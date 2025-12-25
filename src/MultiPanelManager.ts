import * as THREE from 'three';
import type { PegboardMetadata } from './types';
import type { GridPosition } from './SnappingSystem';

/**
 * Panel instance in the scene
 */
export interface Panel {
    id: string;
    object: THREE.Object3D;
    metadata: PegboardMetadata;
    position: THREE.Vector3;
    gridOffset: THREE.Vector2;
    attachedAccessories: string[]; // IDs of accessories on this panel
    productId: number; // Product ID for color tracking
}

/**
 * Global grid combining all panels
 */
export interface GlobalGrid {
    panels: Panel[];
    totalWidth: number;
    totalHeight: number;
    gridPositions: GridPosition[];
}

/**
 * MultiPanelManager handles assembly of multiple pegboards
 */
export class MultiPanelManager {
    private panels: Map<string, Panel>;
    private nextPanelId: number = 1;

    constructor() {
        this.panels = new Map();
    }

    /**
     * Add a new panel to the scene
     */
    public addPanel(
        pegboard: THREE.Object3D,
        metadata: PegboardMetadata,
        position?: THREE.Vector3,
        productId: number = 0
    ): Panel {
        const id = `panel_${this.nextPanelId++}`;

        // Use provided position or calculate default adjacent position
        const finalPosition = position ? position.clone() : this.getAdjacentPosition();
        pegboard.position.copy(finalPosition);

        const panel: Panel = {
            id,
            object: pegboard,
            metadata,
            position: finalPosition,
            gridOffset: new THREE.Vector2(0, 0), // Will be calculated
            attachedAccessories: [],
            productId
        };

        this.panels.set(id, panel);
        this.recalculateGlobalGrid();

        return panel;
    }

    /**
     * Check if a potential position is valid (no overlaps)
     * Panel extends RIGHT (positive X) and DOWN (negative Y) from position
     */
    public isValidPosition(position: THREE.Vector3, metadata: PegboardMetadata): boolean {
        const newWidth = (metadata.panel_width_cm * 10) / 1000;
        const newHeight = (metadata.panel_height_cm * 10) / 1000;
        const epsilon = 0.001; // Small margin for floating point errors

        // New panel bounds
        const newLeft = position.x + epsilon;
        const newRight = position.x + newWidth - epsilon;
        const newBottom = position.y - newHeight + epsilon;
        const newTop = position.y - epsilon;

        for (const panel of this.panels.values()) {
            const width = (panel.metadata.panel_width_cm * 10) / 1000;
            const height = (panel.metadata.panel_height_cm * 10) / 1000;

            const left = panel.position.x;
            const right = panel.position.x + width;
            const bottom = panel.position.y - height;
            const top = panel.position.y;

            // Check for overlap
            if (newLeft < right && newRight > left && newBottom < top && newTop > bottom) {
                return false;
            }
        }
        return true;
    }

    /**
     * Get list of valid snap positions for a new panel around existing panels
     * Panel extends RIGHT (positive X) and DOWN (negative Y) from position
     */
    public getSnapPositions(metadata: PegboardMetadata): THREE.Vector3[] {
        if (this.panels.size === 0) {
            return [new THREE.Vector3(0, 0, 0)];
        }

        const validPositions: THREE.Vector3[] = [];
        const newWidth = (metadata.panel_width_cm * 10) / 1000;
        const newHeight = (metadata.panel_height_cm * 10) / 1000;

        this.panels.forEach(panel => {
            const width = (panel.metadata.panel_width_cm * 10) / 1000;
            const height = (panel.metadata.panel_height_cm * 10) / 1000;
            const x = panel.position.x;
            const y = panel.position.y;

            // Right of existing panel (new panel's left edge touches existing right edge)
            validPositions.push(new THREE.Vector3(x + width, y, 0));
            // Left of existing panel (new panel's right edge touches existing left edge)
            validPositions.push(new THREE.Vector3(x - newWidth, y, 0));
            // Above existing panel (new panel's bottom edge touches existing top edge)
            // Since panel extends DOWN, "above" means new panel's (y - newHeight) = existing y
            validPositions.push(new THREE.Vector3(x, y + newHeight, 0));
            // Below existing panel (new panel's top edge touches existing bottom edge)
            // Existing bottom = y - height, new top = newY, so newY = y - height
            validPositions.push(new THREE.Vector3(x, y - height, 0));
        });

        // Filter out positions that would overlap existing panels
        return validPositions.filter(pos => this.isValidPosition(pos, metadata));
    }

    /**
     * Remove a panel and all its accessories
     */
    public removePanel(panelId: string): string[] {
        const panel = this.panels.get(panelId);
        if (!panel) {
            return [];
        }

        // Get list of attached accessories to remove
        const accessoriesToRemove = [...panel.attachedAccessories];

        // Remove panel
        this.panels.delete(panelId);
        this.recalculateGlobalGrid();

        return accessoriesToRemove;
    }

    /**
     * Calculate position for next panel (adjacent to existing)
     */
    private getAdjacentPosition(): THREE.Vector3 {
        if (this.panels.size === 0) {
            return new THREE.Vector3(0, 0, 0); // First panel at origin
        }

        // Place new panel to the right of the rightmost panel
        let maxX = 0;
        let refY = 0;

        this.panels.forEach(panel => {
            const panelWidthM = (panel.metadata.panel_width_cm * 10) / 1000;
            const rightEdge = panel.position.x + panelWidthM;
            if (rightEdge > maxX) {
                maxX = rightEdge;
                refY = panel.position.y;
            }
        });

        return new THREE.Vector3(maxX, refY, 0);
    }

    /**
     * Recalculate the global grid after panel changes
     */
    private recalculateGlobalGrid(): void {
        // Grid positions are now calculated directly in calculateGlobalGrid()
        // using panel.position, so no need to maintain separate offsets
    }

    /**
     * Get the global grid combining all panels
     * Uses IKEA SKÅDIS pattern: 40mm spacing with 20mm offset staggered grid
     * 
     * IMPORTANT: Panels are rotated -90° on X axis, so:
     * - Panel origin is at TOP-LEFT corner
     * - Panel extends RIGHT (positive X) and DOWN (negative Y)
     */
    public calculateGlobalGrid(): GlobalGrid {
        const panelArray = Array.from(this.panels.values());

        if (panelArray.length === 0) {
            return {
                panels: [],
                totalWidth: 0,
                totalHeight: 0,
                gridPositions: []
            };
        }

        // Calculate total bounds
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        panelArray.forEach(panel => {
            const widthM = (panel.metadata.panel_width_cm * 10) / 1000;
            const heightM = (panel.metadata.panel_height_cm * 10) / 1000;

            minX = Math.min(minX, panel.position.x);
            maxX = Math.max(maxX, panel.position.x + widthM);
            minY = Math.min(minY, panel.position.y - heightM);
            maxY = Math.max(maxY, panel.position.y);
        });

        // Collect all grid positions from all panels
        const gridPositions: GridPosition[] = [];

        panelArray.forEach(panel => {
            const spacing = panel.metadata.grid_spacing_mm;
            const offset = panel.metadata.grid_offset_mm;
            const margin = panel.metadata.border_margin_mm;
            const widthMm = panel.metadata.panel_width_cm * 10;
            const heightMm = panel.metadata.panel_height_cm * 10;
            const panelXMm = panel.position.x * 1000;
            const panelYMm = panel.position.y * 1000;

            // Grid A positions
            for (let localX = margin; localX <= widthMm - margin; localX += spacing) {
                for (let localY = margin; localY <= heightMm - margin; localY += spacing) {
                    gridPositions.push({
                        x: panelXMm + localX,
                        y: panelYMm - localY,
                        grid: 'A'
                    });
                }
            }

            // Grid B positions (offset/staggered)
            for (let localX = margin + offset; localX <= widthMm - margin; localX += spacing) {
                for (let localY = margin + offset; localY <= heightMm - margin; localY += spacing) {
                    gridPositions.push({
                        x: panelXMm + localX,
                        y: panelYMm - localY,
                        grid: 'B'
                    });
                }
            }
        });

        return {
            panels: panelArray,
            totalWidth: (maxX - minX) * 1000,
            totalHeight: (maxY - minY) * 1000,
            gridPositions
        };
    }

    /**
     * Get the panel at a specific position
     * Panel extends RIGHT (positive X) and DOWN (negative Y) from its origin
     */
    public getPanelAtPosition(position: THREE.Vector3): Panel | null {
        for (const panel of this.panels.values()) {
            const widthM = (panel.metadata.panel_width_cm * 10) / 1000;
            const heightM = (panel.metadata.panel_height_cm * 10) / 1000;

            // Panel bounds: X from origin to origin+width, Y from origin-height to origin
            const panelLeft = panel.position.x;
            const panelRight = panel.position.x + widthM;
            const panelBottom = panel.position.y - heightM;
            const panelTop = panel.position.y;

            if (
                position.x >= panelLeft &&
                position.x <= panelRight &&
                position.y >= panelBottom &&
                position.y <= panelTop
            ) {
                return panel;
            }
        }

        return null;
    }

    /**
     * Attach an accessory to a panel
     */
    public attachAccessoryToPanel(panelId: string, accessoryId: string): void {
        const panel = this.panels.get(panelId);
        if (panel && !panel.attachedAccessories.includes(accessoryId)) {
            panel.attachedAccessories.push(accessoryId);
        }
    }

    /**
     * Detach an accessory from a panel
     */
    public detachAccessoryFromPanel(panelId: string, accessoryId: string): void {
        const panel = this.panels.get(panelId);
        if (panel) {
            panel.attachedAccessories = panel.attachedAccessories.filter(
                id => id !== accessoryId
            );
        }
    }

    /**
     * Get all panels
     */
    public getAllPanels(): Panel[] {
        return Array.from(this.panels.values());
    }

    /**
     * Get panel by ID
     */
    public getPanel(id: string): Panel | undefined {
        return this.panels.get(id);
    }

    /**
     * Update a panel's position
     */
    public updatePanelPosition(panelId: string, newPosition: THREE.Vector3): void {
        const panel = this.panels.get(panelId);
        if (panel) {
            panel.position.copy(newPosition);
            panel.object.position.copy(newPosition);
            this.recalculateGlobalGrid();
        }
    }

    /**
     * Get list of valid snap positions for a panel, excluding a specific panel (for dragging)
     * Panel extends RIGHT (positive X) and DOWN (negative Y) from position
     */
    public getSnapPositionsExcluding(metadata: PegboardMetadata, excludePanelId: string): THREE.Vector3[] {
        const otherPanels = Array.from(this.panels.values()).filter(p => p.id !== excludePanelId);

        if (otherPanels.length === 0) {
            // If this is the only panel, allow placement anywhere
            return [new THREE.Vector3(0, 0, 0)];
        }

        const validPositions: THREE.Vector3[] = [];
        const newWidth = (metadata.panel_width_cm * 10) / 1000;
        const newHeight = (metadata.panel_height_cm * 10) / 1000;

        otherPanels.forEach(panel => {
            const width = (panel.metadata.panel_width_cm * 10) / 1000;
            const height = (panel.metadata.panel_height_cm * 10) / 1000;
            const x = panel.position.x;
            const y = panel.position.y;

            // Right of existing panel
            validPositions.push(new THREE.Vector3(x + width, y, 0));
            // Left of existing panel
            validPositions.push(new THREE.Vector3(x - newWidth, y, 0));
            // Above existing panel
            validPositions.push(new THREE.Vector3(x, y + newHeight, 0));
            // Below existing panel
            validPositions.push(new THREE.Vector3(x, y - height, 0));
        });

        // Filter out positions that would overlap other panels (excluding the one being dragged)
        return validPositions.filter(pos => this.isValidPositionExcluding(pos, metadata, excludePanelId));
    }

    /**
     * Check if a position is valid, excluding a specific panel (for dragging)
     * Panel extends RIGHT (positive X) and DOWN (negative Y) from position
     */
    public isValidPositionExcluding(position: THREE.Vector3, metadata: PegboardMetadata, excludePanelId: string): boolean {
        const newWidth = (metadata.panel_width_cm * 10) / 1000;
        const newHeight = (metadata.panel_height_cm * 10) / 1000;
        const epsilon = 0.001;

        const newLeft = position.x + epsilon;
        const newRight = position.x + newWidth - epsilon;
        const newBottom = position.y - newHeight + epsilon;
        const newTop = position.y - epsilon;

        for (const panel of this.panels.values()) {
            if (panel.id === excludePanelId) continue; // Skip the panel being dragged

            const width = (panel.metadata.panel_width_cm * 10) / 1000;
            const height = (panel.metadata.panel_height_cm * 10) / 1000;

            const left = panel.position.x;
            const right = panel.position.x + width;
            const bottom = panel.position.y - height;
            const top = panel.position.y;

            // Check for overlap
            if (newLeft < right && newRight > left && newBottom < top && newTop > bottom) {
                return false;
            }
        }
        return true;
    }

    /**
     * Get the closest grid hole to a world position
     * @param worldPos Position in world coordinates (meters)
     * @param maxDistM Maximum distance to snap (meters)
     * 
     * COORDINATE SYSTEM after -90° X rotation:
     * - Panel origin (panel.position) is at the TOP-LEFT corner of the visible panel
     * - Panel extends RIGHT (positive X) and DOWN (negative Y) from origin
     * - worldPos.x = horizontal position (left to right)
     * - worldPos.y = vertical position (panel extends downward from origin)
     * - worldPos.z = depth (0 = panel surface, positive = in front)
     */
    public getClosestHole(worldPos: THREE.Vector3, maxDistM: number = 0.05): THREE.Vector3 | null {
        let closest: THREE.Vector3 | null = null;
        let minDistSq = maxDistM * maxDistM;

        const panelArray = Array.from(this.panels.values());

        for (const panel of panelArray) {
            const widthM = (panel.metadata.panel_width_cm * 10) / 1000;
            const heightM = (panel.metadata.panel_height_cm * 10) / 1000;

            const localX = worldPos.x - panel.position.x;
            const localY = panel.position.y - worldPos.y;

            const tolerance = maxDistM;
            if (localX < -tolerance || localX > widthM + tolerance ||
                localY < -tolerance || localY > heightM + tolerance) {
                continue;
            }

            const spacing = panel.metadata.grid_spacing_mm / 1000;
            const offset = panel.metadata.grid_offset_mm / 1000;
            const margin = panel.metadata.border_margin_mm / 1000;

            // Grid A positions
            for (let gx = margin; gx <= widthM - margin; gx += spacing) {
                for (let gy = margin; gy <= heightM - margin; gy += spacing) {
                    const dx = localX - gx;
                    const dy = localY - gy;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < minDistSq) {
                        minDistSq = distSq;
                        const surfaceZ = this.calculatePanelSurfaceZ(panel);
                        closest = new THREE.Vector3(
                            panel.position.x + gx,
                            panel.position.y - gy,
                            surfaceZ + 0.003
                        );
                    }
                }
            }

            // Grid B positions (offset/staggered)
            for (let gx = margin + offset; gx <= widthM - margin; gx += spacing) {
                for (let gy = margin + offset; gy <= heightM - margin; gy += spacing) {
                    const dx = localX - gx;
                    const dy = localY - gy;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < minDistSq) {
                        minDistSq = distSq;
                        const surfaceZ = this.calculatePanelSurfaceZ(panel);
                        closest = new THREE.Vector3(
                            panel.position.x + gx,
                            panel.position.y - gy,
                            surfaceZ + 0.003
                        );
                    }
                }
            }
        }

        return closest;
    }

    /**
     * Calculate the actual surface Z position of a panel
     */
    private calculatePanelSurfaceZ(panel: Panel): number {
        const box = new THREE.Box3().setFromObject(panel.object);
        const size = box.getSize(new THREE.Vector3());
        return panel.position.z + (size.z / 2);
    }
}
