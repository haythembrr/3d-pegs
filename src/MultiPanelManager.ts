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
        position?: THREE.Vector3
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
            attachedAccessories: []
        };

        this.panels.set(id, panel);
        this.recalculateGlobalGrid();

        return panel;
    }

    /**
     * Check if a potential position is valid (no overlaps)
     */
    public isValidPosition(position: THREE.Vector3, metadata: PegboardMetadata): boolean {
        const newWidth = (metadata.panel_width_cm * 10) / 1000;
        const newHeight = (metadata.panel_height_cm * 10) / 1000;
        const epsilon = 0.001; // Small margin for floating point errors

        const newLeft = position.x + epsilon;
        const newRight = position.x + newWidth - epsilon;
        const newBottom = position.y + epsilon;
        const newTop = position.y + newHeight - epsilon;

        for (const panel of this.panels.values()) {
            const width = (panel.metadata.panel_width_cm * 10) / 1000;
            const height = (panel.metadata.panel_height_cm * 10) / 1000;

            const left = panel.position.x;
            const right = panel.position.x + width;
            const bottom = panel.position.y;
            const top = panel.position.y + height;

            // Check for overlap
            if (newLeft < right && newRight > left && newBottom < top && newTop > bottom) {
                return false;
            }
        }
        return true;
    }

    /**
     * Get list of valid snap positions for a new panel around existing panels
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

            // Right
            validPositions.push(new THREE.Vector3(x + width, y, 0));
            // Left
            validPositions.push(new THREE.Vector3(x - newWidth, y, 0));
            // Top
            validPositions.push(new THREE.Vector3(x, y + height, 0));
            // Bottom
            validPositions.push(new THREE.Vector3(x, y - newHeight, 0));
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
            minY = Math.min(minY, panel.position.y);
            maxY = Math.max(maxY, panel.position.y + heightM);
        });

        // Collect all grid positions from all panels
        const gridPositions: GridPosition[] = [];

        panelArray.forEach(panel => {
            const spacing = panel.metadata.grid_spacing_mm; // 40mm for SKÅDIS
            const offset = panel.metadata.grid_offset_mm;   // 20mm for SKÅDIS
            const margin = panel.metadata.border_margin_mm; // Border margin
            const widthMm = panel.metadata.panel_width_cm * 10;  // Convert cm to mm
            const heightMm = panel.metadata.panel_height_cm * 10; // Convert cm to mm
            
            // Panel position in world coordinates (meters)
            const panelX = panel.position.x;
            const panelY = panel.position.y;

            // Grid A positions - primary grid starting from margin
            for (let localX = margin; localX <= widthMm - margin; localX += spacing) {
                for (let localY = margin; localY <= heightMm - margin; localY += spacing) {
                    gridPositions.push({
                        x: localX + (panelX * 1000), // Store in mm (local + panel offset in mm)
                        y: localY + (panelY * 1000),
                        grid: 'A'
                    });
                }
            }

            // Grid B positions - offset/staggered grid (shifted by 20mm on both axes)
            for (let localX = margin + offset; localX <= widthMm - margin; localX += spacing) {
                for (let localY = margin + offset; localY <= heightMm - margin; localY += spacing) {
                    gridPositions.push({
                        x: localX + (panelX * 1000),
                        y: localY + (panelY * 1000),
                        grid: 'B'
                    });
                }
            }
        });

        console.log(`[MultiPanelManager] Generated ${gridPositions.length} grid positions for ${panelArray.length} panels`);

        return {
            panels: panelArray,
            totalWidth: (maxX - minX) * 1000, // in mm
            totalHeight: (maxY - minY) * 1000, // in mm
            gridPositions
        };
    }

    /**
     * Get the panel at a specific position
     */
    public getPanelAtPosition(position: THREE.Vector3): Panel | null {
        for (const panel of this.panels.values()) {
            const widthM = (panel.metadata.panel_width_cm * 10) / 1000;
            const heightM = (panel.metadata.panel_height_cm * 10) / 1000;

            if (
                position.x >= panel.position.x &&
                position.x <= panel.position.x + widthM &&
                position.y >= panel.position.y &&
                position.y <= panel.position.y + heightM
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

            // Right
            validPositions.push(new THREE.Vector3(x + width, y, 0));
            // Left
            validPositions.push(new THREE.Vector3(x - newWidth, y, 0));
            // Top
            validPositions.push(new THREE.Vector3(x, y + height, 0));
            // Bottom
            validPositions.push(new THREE.Vector3(x, y - newHeight, 0));
        });

        // Filter out positions that would overlap other panels (excluding the one being dragged)
        return validPositions.filter(pos => this.isValidPositionExcluding(pos, metadata, excludePanelId));
    }

    /**
     * Check if a position is valid, excluding a specific panel (for dragging)
     */
    private isValidPositionExcluding(position: THREE.Vector3, metadata: PegboardMetadata, excludePanelId: string): boolean {
        const newWidth = (metadata.panel_width_cm * 10) / 1000;
        const newHeight = (metadata.panel_height_cm * 10) / 1000;
        const epsilon = 0.001;

        const newLeft = position.x + epsilon;
        const newRight = position.x + newWidth - epsilon;
        const newBottom = position.y + epsilon;
        const newTop = position.y + newHeight - epsilon;

        for (const panel of this.panels.values()) {
            if (panel.id === excludePanelId) continue; // Skip the panel being dragged

            const width = (panel.metadata.panel_width_cm * 10) / 1000;
            const height = (panel.metadata.panel_height_cm * 10) / 1000;

            const left = panel.position.x;
            const right = panel.position.x + width;
            const bottom = panel.position.y;
            const top = panel.position.y + height;

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
     */
    public getClosestHole(worldPos: THREE.Vector3, maxDistM: number = 0.05): THREE.Vector3 | null {
        const grid = this.calculateGlobalGrid();
        let closest: THREE.Vector3 | null = null;
        let minDistSq = maxDistM * maxDistM;

        // Convert world pos to grid space (mm) if needed, 
        // OR convert grid positions to world (m) to compare.
        // Grid is in mm. Let's convert grid points to meters for comparison with worldPos.

        // Optimization: Check bounds first? For now simple iteration.

        for (const pos of grid.gridPositions) {
            const holeX = pos.x / 1000;
            const holeY = pos.y / 1000;

            // Assume holes are on Z=0 plane relative to panels? 
            // Panels are at Z=0? 
            // addPanel sets Z to 0 in getAdjacentPosition (Vector3(maxX, refY, 0)).
            // So holes are at (holeX, holeY, 0).
            // Accessories need a small Z offset to appear in front of the board
            const holePos = new THREE.Vector3(holeX, holeY, 0.015); // 1.5cm in front

            // Calculate squared distance (ignoring Z if we want 2D snap, but 3D distance is fine if close to plane)
            // Use 2D distance for "wall" snapping
            const dx = worldPos.x - holeX;
            const dy = worldPos.y - holeY;
            const distSq = dx * dx + dy * dy;

            if (distSq < minDistSq) {
                minDistSq = distSq;
                closest = holePos;
            }
        }

        return closest;
    }
}
