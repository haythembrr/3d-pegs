import { describe, it, expect } from 'vitest';
import { SnappingSystem } from '../SnappingSystem';
import * as THREE from 'three';
import type { PegboardMetadata } from '../types';

describe('SnappingSystem - Dual-Grid Algorithm', () => {
    const defaultPegboard: PegboardMetadata = {
        panel_width_cm: 36,
        panel_height_cm: 56,
        grid_spacing_mm: 40,
        grid_offset_mm: 20,
        border_margin_mm: 18,
        slot_width_mm: 5,
        slot_height_mm: 15
    };

    it('should snap to Grid A when closer', () => {
        const snapping = new SnappingSystem();

        // Position at 0.04m (40mm) should snap to Grid A at 40mm
        const cursor = new THREE.Vector3(0.041, 0.041, 0);
        const result = snapping.calculateSnapPoint(cursor, defaultPegboard);

        expect(result.isValid).toBe(true);
        expect(result.snappedPosition.x).toBeCloseTo(0.04, 3);
        expect(result.snappedPosition.y).toBeCloseTo(0.04, 3);
        expect(result.gridPositions[0].grid).toBe('A');
    });

    it('should snap to Grid B when closer', () => {
        const snapping = new SnappingSystem();

        // Position at 0.06m (60mm) should snap to Grid B at 60mm (40+20)
        const cursor = new THREE.Vector3(0.061, 0.061, 0);
        const result = snapping.calculateSnapPoint(cursor, defaultPegboard);

        expect(result.isValid).toBe(true);
        expect(result.snappedPosition.x).toBeCloseTo(0.06, 3);
        expect(result.snappedPosition.y).toBeCloseTo(0.06, 3);
        expect(result.gridPositions[0].grid).toBe('B');
    });

    it('should reject positions outside bounds', () => {
        const snapping = new SnappingSystem();

        // Position beyond panel width
        const cursor = new THREE.Vector3(0.5, 0.04, 0); // 500mm, way outside 360mm panel
        const result = snapping.calculateSnapPoint(cursor, defaultPegboard);

        expect(result.isValid).toBe(false);
    });

    it('should validate multi-peg placement', () => {
        const snapping = new SnappingSystem();

        // Two pegs at valid grid positions
        const pegPositions = [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0.04, 0, 0) // 40mm apart, on Grid A
        ];

        const accessoryPos = new THREE.Vector3(0.04, 0.04, 0); // 40mm, 40mm
        const isValid = snapping.validatePlacement(pegPositions, accessoryPos, defaultPegboard);

        expect(isValid).toBe(true);
    });

    it('should reject multi-peg placement with invalid peg', () => {
        const snapping = new SnappingSystem();

        // One peg valid, one invalid (not on grid)
        const pegPositions = [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0.035, 0, 0) // 35mm, not on grid
        ];

        const accessoryPos = new THREE.Vector3(0.04, 0.04, 0);
        const isValid = snapping.validatePlacement(pegPositions, accessoryPos, defaultPegboard);

        expect(isValid).toBe(false);
    });

    it('should generate all grid positions', () => {
        const snapping = new SnappingSystem();
        const positions = snapping.getGridPositions(defaultPegboard);

        // Should have positions from both grids
        expect(positions.length).toBeGreaterThan(0);

        const gridAPositions = positions.filter(p => p.grid === 'A');
        const gridBPositions = positions.filter(p => p.grid === 'B');

        expect(gridAPositions.length).toBeGreaterThan(0);
        expect(gridBPositions.length).toBeGreaterThan(0);
    });
});
