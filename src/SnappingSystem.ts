import * as THREE from 'three';
import type { PegboardMetadata, AccessoryMetadata } from './types';

/**
 * Grid position on the SKÅDIS dual-grid
 */
export interface GridPosition {
    x: number;
    y: number;
    grid: 'A' | 'B';
}

/**
 * Result of a snap calculation
 */
export interface SnapResult {
    isValid: boolean;
    snappedPosition: THREE.Vector3;
    gridPositions: GridPosition[];
}

/**
 * SnappingSystem implements the SKÅDIS dual-grid snapping algorithm
 * 
 * The SKÅDIS pegboard uses a staggered grid pattern:
 * - Grid A: positions at x = n*40mm, y = m*40mm
 * - Grid B: positions at x = n*40+20mm, y = m*40+20mm
 */
export class SnappingSystem {
    /**
     * Calculate the nearest snap point for a cursor position
     * 
     * @param cursorPosition Position in 3D space (in meters)
     * @param pegboard Pegboard metadata
     * @param accessory Optional accessory metadata for snap_mode consideration
     * @returns SnapResult with the nearest valid position
     */
    public calculateSnapPoint(
        cursorPosition: THREE.Vector3,
        pegboard: PegboardMetadata,
        _accessory?: AccessoryMetadata
    ): SnapResult {
        // Note: accessory parameter reserved for future snap_mode specific logic
        // (e.g., rail mode might have different snapping behavior)

        // Convert cursor position from meters to millimeters for grid calculation
        const xMm = cursorPosition.x * 1000;
        const yMm = cursorPosition.y * 1000;

        const spacing = pegboard.grid_spacing_mm;
        const offset = pegboard.grid_offset_mm;

        // Calculate nearest position on Grid A
        const xA = Math.round(xMm / spacing) * spacing;
        const yA = Math.round(yMm / spacing) * spacing;
        const distA = Math.sqrt((xMm - xA) ** 2 + (yMm - yA) ** 2);

        // Calculate nearest position on Grid B
        const xB = Math.round((xMm - offset) / spacing) * spacing + offset;
        const yB = Math.round((yMm - offset) / spacing) * spacing + offset;
        const distB = Math.sqrt((xMm - xB) ** 2 + (yMm - yB) ** 2);

        // Choose the nearest grid point
        let snappedX: number, snappedY: number, grid: 'A' | 'B';

        if (distA <= distB) {
            snappedX = xA;
            snappedY = yA;
            grid = 'A';
        } else {
            snappedX = xB;
            snappedY = yB;
            grid = 'B';
        }

        // Check if position is within pegboard bounds
        const panelWidthMm = pegboard.panel_width_cm * 10;
        const panelHeightMm = pegboard.panel_height_cm * 10;
        const margin = pegboard.border_margin_mm;

        const isValid =
            snappedX >= margin &&
            snappedX <= panelWidthMm - margin &&
            snappedY >= margin &&
            snappedY <= panelHeightMm - margin;

        // Convert back to meters
        const snappedPosition = new THREE.Vector3(
            snappedX / 1000,
            snappedY / 1000,
            cursorPosition.z
        );

        return {
            isValid,
            snappedPosition,
            gridPositions: [{
                x: snappedX,
                y: snappedY,
                grid
            }]
        };
    }

    /**
     * Validate if all peg positions align with valid grid points
     * 
     * @param pegPositions Array of peg positions (relative to accessory)
     * @param accessoryWorldPos World position of accessory origin
     * @param pegboard Pegboard metadata
     * @returns true if all pegs align with valid grid positions
     */
    public validatePlacement(
        pegPositions: THREE.Vector3[],
        accessoryWorldPos: THREE.Vector3,
        pegboard: PegboardMetadata
    ): boolean {
        const spacing = pegboard.grid_spacing_mm;
        const offset = pegboard.grid_offset_mm;
        const panelWidthMm = pegboard.panel_width_cm * 10;
        const panelHeightMm = pegboard.panel_height_cm * 10;
        const margin = pegboard.border_margin_mm;

        // Check each peg point
        for (const pegPos of pegPositions) {
            // Calculate world position of this peg
            const worldX = (accessoryWorldPos.x + pegPos.x) * 1000; // to mm
            const worldY = (accessoryWorldPos.y + pegPos.y) * 1000; // to mm

            // Check if it aligns with Grid A or Grid B
            const isOnGridA =
                Math.abs(worldX % spacing) < 0.5 &&
                Math.abs(worldY % spacing) < 0.5;

            const isOnGridB =
                Math.abs((worldX - offset) % spacing) < 0.5 &&
                Math.abs((worldY - offset) % spacing) < 0.5;

            // Check bounds
            const isInBounds =
                worldX >= margin &&
                worldX <= panelWidthMm - margin &&
                worldY >= margin &&
                worldY <= panelHeightMm - margin;

            if (!(isOnGridA || isOnGridB) || !isInBounds) {
                return false;
            }
        }

        return true;
    }

    /**
     * Get all valid grid positions on the pegboard
     * 
     * @param pegboard Pegboard metadata
     * @returns Array of all valid grid positions
     */
    public getGridPositions(pegboard: PegboardMetadata): GridPosition[] {
        const positions: GridPosition[] = [];
        const spacing = pegboard.grid_spacing_mm;
        const offset = pegboard.grid_offset_mm;
        const panelWidthMm = pegboard.panel_width_cm * 10;
        const panelHeightMm = pegboard.panel_height_cm * 10;
        const margin = pegboard.border_margin_mm;

        // Generate Grid A positions
        for (let x = margin; x <= panelWidthMm - margin; x += spacing) {
            for (let y = margin; y <= panelHeightMm - margin; y += spacing) {
                positions.push({ x, y, grid: 'A' });
            }
        }

        // Generate Grid B positions
        for (let x = margin + offset; x <= panelWidthMm - margin; x += spacing) {
            for (let y = margin + offset; y <= panelHeightMm - margin; y += spacing) {
                positions.push({ x, y, grid: 'B' });
            }
        }

        return positions;
    }
}
