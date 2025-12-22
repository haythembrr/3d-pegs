import * as THREE from 'three';
import type { PegboardMetadata, AccessoryMetadata } from './types';
import { SnappingSystem } from './SnappingSystem';

/**
 * PlacementCalculator handles the calculation of valid accessory placements
 */
export class PlacementCalculator {
    private snappingSystem: SnappingSystem;

    constructor() {
        this.snappingSystem = new SnappingSystem();
    }

    /**
     * Compute world positions of all peg points based on cursor position
     * 
     * @param accessoryMetadata Metadata of the accessory being placed
     * @param cursorPosition Current cursor position in 3D space
     * @returns Array of world positions for each peg point
     */
    public computePegWorldPositions(
        accessoryMetadata: AccessoryMetadata,
        cursorPosition: THREE.Vector3
    ): THREE.Vector3[] {
        return accessoryMetadata.peg_positions.map(pegPos => {
            return new THREE.Vector3(
                cursorPosition.x + pegPos.x,
                cursorPosition.y + pegPos.y,
                cursorPosition.z + pegPos.z
            );
        });
    }

    /**
     * Find the nearest valid position for an accessory
     * Tries to snap all peg points to valid grid positions
     * 
     * @param accessoryMetadata Metadata of the accessory
     * @param cursorPosition Initial cursor position
     * @param pegboard Pegboard metadata
     * @returns Valid snapped position or null if no valid position found
     */
    public findNearestValidPosition(
        accessoryMetadata: AccessoryMetadata,
        cursorPosition: THREE.Vector3,
        pegboard: PegboardMetadata
    ): THREE.Vector3 | null {
        // For single peg accessories, simply snap to nearest grid point
        if (accessoryMetadata.peg_count === 1) {
            const snapResult = this.snappingSystem.calculateSnapPoint(
                cursorPosition,
                pegboard,
                accessoryMetadata
            );
            return snapResult.isValid ? snapResult.snappedPosition : null;
        }

        // For multi-peg accessories, we need to ensure ALL pegs align
        // Strategy: Snap the first peg, then check if all other pegs are valid

        const firstPegRelative = accessoryMetadata.peg_positions[0];
        const firstPegWorld = new THREE.Vector3(
            cursorPosition.x + firstPegRelative.x,
            cursorPosition.y + firstPegRelative.y,
            cursorPosition.z + firstPegRelative.z
        );

        // Snap first peg to grid
        const snapResult = this.snappingSystem.calculateSnapPoint(
            firstPegWorld,
            pegboard,
            accessoryMetadata
        );

        if (!snapResult.isValid) {
            return null;
        }

        // Calculate accessory origin position that would place first peg at snapped position
        const accessoryOrigin = new THREE.Vector3(
            snapResult.snappedPosition.x - firstPegRelative.x,
            snapResult.snappedPosition.y - firstPegRelative.y,
            cursorPosition.z
        );

        // Validate that all peg positions are valid
        const isValid = this.snappingSystem.validatePlacement(
            accessoryMetadata.peg_positions,
            accessoryOrigin,
            pegboard
        );

        return isValid ? accessoryOrigin : null;
    }

    /**
     * Check if an accessory would collide with existing accessories
     * Uses bounding box overlap on XY plane
     * 
     * @param newAccessory The accessory being placed
     * @param newPosition Position where it would be placed
     * @param existingAccessories Array of already placed accessories with their objects
     * @returns true if collision detected
     */
    public checkCollision(
        newAccessory: THREE.Object3D,
        newPosition: THREE.Vector3,
        existingAccessories: THREE.Object3D[]
    ): boolean {
        // Create a temporary object at the new position to get its bounding box
        const tempObj = newAccessory.clone();
        tempObj.position.copy(newPosition);
        tempObj.updateMatrixWorld(true);

        const newBox = new THREE.Box3().setFromObject(tempObj);

        // Project to 2D (XY plane) for collision detection
        const newBox2D = {
            minX: newBox.min.x,
            maxX: newBox.max.x,
            minY: newBox.min.y,
            maxY: newBox.max.y
        };

        // Check against all existing accessories
        for (const existing of existingAccessories) {
            const existingBox = new THREE.Box3().setFromObject(existing);
            const existingBox2D = {
                minX: existingBox.min.x,
                maxX: existingBox.max.x,
                minY: existingBox.min.y,
                maxY: existingBox.max.y
            };

            // Check 2D overlap
            const overlapX =
                newBox2D.minX < existingBox2D.maxX &&
                newBox2D.maxX > existingBox2D.minX;

            const overlapY =
                newBox2D.minY < existingBox2D.maxY &&
                newBox2D.maxY > existingBox2D.minY;

            if (overlapX && overlapY) {
                return true; // Collision detected
            }
        }

        return false; // No collision
    }

    /**
     * Check if a position is outside pegboard bounds
     * 
     * @param position Position to check
     * @param pegboard Pegboard metadata
     * @returns true if outside bounds
     */
    public isOutsideBounds(
        position: THREE.Vector3,
        pegboard: PegboardMetadata
    ): boolean {
        const xMm = position.x * 1000;
        const yMm = position.y * 1000;
        const panelWidthMm = pegboard.panel_width_cm * 10;
        const panelHeightMm = pegboard.panel_height_cm * 10;

        return (
            xMm < 0 ||
            xMm > panelWidthMm ||
            yMm < 0 ||
            yMm > panelHeightMm
        );
    }
}
