import { describe, it, expect } from 'vitest';
import { ModelLoader } from '../ModelLoader';
import * as THREE from 'three';

describe('ModelLoader - Basic Tests', () => {
    it('should extract pegboard metadata with defaults', () => {
        const scene = new THREE.Group();
        scene.userData = {
            model_type: 'pegboard',
            panel_width_cm: 36,
            panel_height_cm: 56
        };

        const loader = new ModelLoader();
        const metadata = loader.extractPegboardMetadata(scene);

        expect(metadata.panel_width_cm).toBe(36);
        expect(metadata.panel_height_cm).toBe(56);
        expect(metadata.grid_spacing_mm).toBe(40);
        expect(metadata.grid_offset_mm).toBe(20);
    });

    it('should extract accessory metadata', () => {
        const scene = new THREE.Group();
        scene.userData = {
            model_type: 'accessory',
            snap_mode: 'dual_slot',
            orientation: 'front',
            load_capacity_g: 1000
        };

        // Add peg Empty objects
        const peg1 = new THREE.Object3D();
        peg1.name = 'peg_01';
        peg1.position.set(0, 0, 0);
        scene.add(peg1);

        const peg2 = new THREE.Object3D();
        peg2.name = 'peg_02';
        peg2.position.set(0.04, 0, 0);
        scene.add(peg2);

        const loader = new ModelLoader();
        const metadata = loader.extractAccessoryMetadata(scene);

        expect(metadata.peg_count).toBe(2);
        expect(metadata.peg_positions.length).toBe(2);
        expect(metadata.snap_mode).toBe('dual_slot');
    });

    it('should cache loaded models', () => {
        const loader = new ModelLoader();
        const url = 'http://example.com/test.glb';

        expect(loader.getCachedModel(url)).toBeNull();

        loader.clearCache();
        expect(loader.getCachedModel(url)).toBeNull();
    });
});
