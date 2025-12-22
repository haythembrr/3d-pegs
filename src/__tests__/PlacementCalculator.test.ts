import { describe, it, expect } from 'vitest';
import { PlacementCalculator } from '../PlacementCalculator';
import * as THREE from 'three';
import type { PegboardMetadata, AccessoryMetadata } from '../types';

describe('PlacementCalculator', () => {
    const defaultPegboard: PegboardMetadata = {
        panel_width_cm: 36,
        panel_height_cm: 56,
        grid_spacing_mm: 40,
        grid_offset_mm: 20,
        border_margin_mm: 18,
        slot_width_mm: 5,
        slot_height_mm: 15
    };

    const singlePegAccessory: AccessoryMetadata = {
        peg_positions: [new THREE.Vector3(0, 0, 0)],
        peg_count: 1,
        snap_mode: 'single_slot',
        orientation: 'front',
        load_capacity_g: 500
    };

    const dualPegAccessory: AccessoryMetadata = {
        peg_positions: [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0.04, 0, 0) // 40mm apart
        ],
        peg_count: 2,
        snap_mode: 'dual_slot',
        orientation: 'front',
        load_capacity_g: 1000
    };

    it('should compute peg world positions', () => {
        const calculator = new PlacementCalculator();
        const cursor = new THREE.Vector3(0.1, 0.1, 0);

        const positions = calculator.computePegWorldPositions(dualPegAccessory, cursor);

        expect(positions.length).toBe(2);
        expect(positions[0].x).toBeCloseTo(0.1, 3);
        expect(positions[1].x).toBeCloseTo(0.14, 3); // 0.1 + 0.04
    });

    it('should find valid position for single peg accessory', () => {
        const calculator = new PlacementCalculator();
        const cursor = new THREE.Vector3(0.041, 0.041, 0);

        const position = calculator.findNearestValidPosition(
            singlePegAccessory,
            cursor,
            defaultPegboard
        );

        expect(position).not.toBeNull();
        expect(position!.x).toBeCloseTo(0.04, 3);
    });

    it('should find valid position for dual peg accessory', () => {
        const calculator = new PlacementCalculator();
        const cursor = new THREE.Vector3(0.041, 0.041, 0);

        const position = calculator.findNearestValidPosition(
            dualPegAccessory,
            cursor,
            defaultPegboard
        );

        expect(position).not.toBeNull();
        // Position should be snapped such that all pegs are valid
    });

    it('should reject position outside bounds', () => {
        const calculator = new PlacementCalculator();
        const cursor = new THREE.Vector3(0.5, 0.5, 0); // Way outside

        const position = calculator.findNearestValidPosition(
            singlePegAccessory,
            cursor,
            defaultPegboard
        );

        expect(position).toBeNull();
    });

    it('should detect collision between accessories', () => {
        const calculator = new PlacementCalculator();

        // Create two box geometries that would overlap
        const box1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1));
        box1.position.set(0.05, 0.05, 0);

        const box2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1));
        const newPosition = new THREE.Vector3(0.06, 0.06, 0); // Overlaps box1

        const collision = calculator.checkCollision(box2, newPosition, [box1]);

        expect(collision).toBe(true);
    });

    it('should not detect collision when accessories dont overlap', () => {
        const calculator = new PlacementCalculator();

        const box1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.05));
        box1.position.set(0.05, 0.05, 0);

        const box2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.05));
        const newPosition = new THREE.Vector3(0.2, 0.2, 0); // Far away

        const collision = calculator.checkCollision(box2, newPosition, [box1]);

        expect(collision).toBe(false);
    });

    it('should detect position outside bounds', () => {
        const calculator = new PlacementCalculator();

        const outsidePosition = new THREE.Vector3(0.5, 0.5, 0);
        const isOutside = calculator.isOutsideBounds(outsidePosition, defaultPegboard);

        expect(isOutside).toBe(true);
    });

    it('should validate position inside bounds', () => {
        const calculator = new PlacementCalculator();

        const insidePosition = new THREE.Vector3(0.1, 0.1, 0);
        const isOutside = calculator.isOutsideBounds(insidePosition, defaultPegboard);

        expect(isOutside).toBe(false);
    });
});
