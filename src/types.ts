import * as THREE from 'three';

/**
 * Pegboard metadata extracted from GLB userData
 */
export interface PegboardMetadata {
    panel_width_cm: number;
    panel_height_cm: number;
    grid_spacing_mm: number;
    grid_offset_mm: number;
    border_margin_mm: number;
    slot_width_mm: number;
    slot_height_mm: number;
}

/**
 * Accessory metadata extracted from GLB userData and Empty objects
 */
export interface AccessoryMetadata {
    peg_positions: THREE.Vector3[];
    peg_count: number;
    snap_mode: 'single_slot' | 'dual_slot' | 'rail';
    orientation: 'front' | 'angled';
    load_capacity_g: number;
}

/**
 * Loaded model with metadata
 */
export interface LoadedModel {
    scene: THREE.Group;
    metadata: PegboardMetadata | AccessoryMetadata | null;
    modelType: 'pegboard' | 'accessory' | 'unknown';
}

/**
 * Product data from WooCommerce/WordPress
 */
export interface ProductData {
    id: number;
    name: string;
    type: 'pegboard' | 'accessory';
    glb_url: string;
    price?: number;
    color_variants?: string[]; // Array of hex colors like ['#1a1a2e', '#16213e']
    [key: string]: any;
}
