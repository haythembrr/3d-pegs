import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import type { PegboardMetadata, AccessoryMetadata, LoadedModel } from './types';

/**
 * SKÅDIS default values for missing metadata
 */
const SKADIS_DEFAULTS = {
    grid_spacing_mm: 40,
    grid_offset_mm: 20,
    slot_width_mm: 5,
    slot_height_mm: 15,
    border_margin_mm: 18
};

/**
 * ModelLoader handles loading GLB files and extracting metadata
 */
export class ModelLoader {
    private loader: GLTFLoader;
    private cache: Map<string, LoadedModel>;

    constructor() {
        this.loader = new GLTFLoader();
        this.cache = new Map();

        // Optional: Setup DRACO loader for compressed models
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/path/to/draco/'); // Update this path
        this.loader.setDRACOLoader(dracoLoader);
    }

    /**
     * Load a GLB model from URL
     */
    public async loadModel(url: string): Promise<LoadedModel> {
        // Check cache first
        const cached = this.cache.get(url);
        if (cached) {
            console.log(`[ModelLoader] Loaded from cache: ${url}`);
            return cached;
        }

        return new Promise((resolve, reject) => {
            this.loader.load(
                url,
                (gltf) => {
                    const model = this.processModel(gltf);
                    this.cache.set(url, model);
                    resolve(model);
                },
                undefined,
                (error) => {
                    console.error(`[ModelLoader] Failed to load ${url}:`, error);
                    reject(error);
                }
            );
        });
    }

    /**
     * Process loaded GLTF and extract metadata
     */
    private processModel(gltf: any): LoadedModel {
        const scene = gltf.scene;

        console.log('[ModelLoader] Processing model, userData:', scene.userData);

        // Auto-scale check: If model is huge (> 10m), it's likely in mm. Scale to m.
        const box = new THREE.Box3().setFromObject(scene);
        const size = new THREE.Vector3();
        box.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);

        if (maxDim > 10) {
            console.warn(`[ModelLoader] Model is huge (${maxDim} units). Assuming mm and scaling by 0.001.`);
            scene.scale.setScalar(0.001);
            // Re-measure after scale if needed, but we trust the factor.
        }

        // Try to determine model type from userData
        const userData = scene.userData || {};
        let modelType = userData.model_type || this.inferModelType(scene);

        console.log('[ModelLoader] Inferred model type:', modelType);

        let metadata: PegboardMetadata | AccessoryMetadata | null = null;

        if (modelType === 'pegboard') {
            metadata = this.extractPegboardMetadata(scene);
        } else if (modelType === 'accessory') {
            metadata = this.extractAccessoryMetadata(scene);
        }

        return {
            scene,
            metadata,
            modelType
        };
    }

    /**
     * Infer model type if not explicitly set
     */
    private inferModelType(scene: THREE.Group): 'pegboard' | 'accessory' | 'unknown' {
        // Look for peg Empty objects - indicates accessory
        const hasEmptyObjects = this.findPegEmptyObjects(scene).length > 0;
        if (hasEmptyObjects) {
            return 'accessory';
        }

        // If userData has panel dimensions, it's likely a pegboard
        if (scene.userData.panel_width_cm || scene.userData.panel_height_cm) {
            return 'pegboard';
        }

        // Fallback: If no specific accessory markers found, assume it's a pegboard
        // This is a permissive fallback to allow models without metadata to load
        console.warn('[ModelLoader] Could not infer model type from metadata, defaulting to "pegboard"');
        return 'pegboard';
    }

    /**
     * Extract pegboard metadata from userData
     */
    public extractPegboardMetadata(scene: THREE.Group): PegboardMetadata {
        const userData = scene.userData || {};

        const metadata: PegboardMetadata = {
            panel_width_cm: userData.panel_width_cm || 36,
            panel_height_cm: userData.panel_height_cm || 56,
            grid_spacing_mm: userData.grid_spacing_mm || SKADIS_DEFAULTS.grid_spacing_mm,
            grid_offset_mm: userData.grid_offset_mm || SKADIS_DEFAULTS.grid_offset_mm,
            border_margin_mm: userData.border_margin_mm || SKADIS_DEFAULTS.border_margin_mm,
            slot_width_mm: userData.slot_width_mm || SKADIS_DEFAULTS.slot_width_mm,
            slot_height_mm: userData.slot_height_mm || SKADIS_DEFAULTS.slot_height_mm
        };

        // Log warnings for missing metadata
        if (!userData.panel_width_cm) {
            console.warn('[ModelLoader] Missing panel_width_cm, using default');
        }
        if (!userData.panel_height_cm) {
            console.warn('[ModelLoader] Missing panel_height_cm, using default');
        }

        return metadata;
    }

    /**
     * Extract accessory metadata from userData and Empty objects
     */
    public extractAccessoryMetadata(scene: THREE.Group): AccessoryMetadata {
        const userData = scene.userData || {};

        // Find all peg Empty objects
        const pegEmptyObjects = this.findPegEmptyObjects(scene);
        const pegPositions = pegEmptyObjects.map(obj => obj.position.clone());

        const metadata: AccessoryMetadata = {
            peg_positions: pegPositions,
            peg_count: pegPositions.length || userData.peg_count || 1,
            snap_mode: userData.snap_mode || 'single_slot',
            orientation: userData.orientation || 'front',
            load_capacity_g: userData.load_capacity_g || 500
        };

        if (pegPositions.length === 0) {
            console.warn('[ModelLoader] No peg Empty objects found in accessory model');
        }

        return metadata;
    }

    /**
     * Find all Empty objects with names starting with "peg_"
     */
    private findPegEmptyObjects(scene: THREE.Group): THREE.Object3D[] {
        const pegObjects: THREE.Object3D[] = [];

        scene.traverse((child) => {
            if (child.name.startsWith('peg_') && child.type === 'Object3D') {
                // In glTF, Empty objects are imported as Object3D with no geometry
                if (!(child as any).geometry) {
                    pegObjects.push(child);
                }
            }
        });

        return pegObjects;
    }

    /**
     * Get cached model if available
     */
    public getCachedModel(url: string): LoadedModel | null {
        return this.cache.get(url) || null;
    }

    /**
     * Clear cache
     */
    public clearCache(): void {
        this.cache.clear();
    }
}
