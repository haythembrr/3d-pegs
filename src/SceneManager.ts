import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * SceneManager handles the Three.js scene, camera, renderer, and controls
 */
export class SceneManager {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private controls: OrbitControls;
    private container: HTMLElement;
    private animationId: number | null = null;

    constructor(container: HTMLElement) {
        this.container = container;

        // Initialize scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf0f0f0);

        // Initialize camera
        const aspect = container.clientWidth / container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
        // Initial position: slightly angled for a pleasant 3/4 view
        this.camera.position.set(0.2, 0.3, 1.8);

        // Initialize renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false
        });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(this.renderer.domElement);

        // Initialize controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        // Limit rotation to prevent viewing behind pegboard
        this.controls.maxPolarAngle = Math.PI / 2; // Don't go below horizon
        this.controls.minDistance = 0.5;
        this.controls.maxDistance = 10;

        // Add lighting
        this.setupLighting();

        // Handle window resize
        window.addEventListener('resize', () => this.resize());
    }

    /**
     * Setup scene lighting
     */
    private setupLighting(): void {
        // Ambient light for general illumination
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        // Directional light for shadows and depth
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 7.5);
        this.scene.add(directionalLight);
    }

    /**
     * Resize handler
     */
    public resize(): void {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }

    /**
     * Add object to scene
     */
    public addObject(object: THREE.Object3D): void {
        this.scene.add(object);
    }

    /**
     * Remove object from scene
     */
    public removeObject(object: THREE.Object3D): void {
        this.scene.remove(object);
    }

    /**
     * Get intersected object from mouse event
     */
    public getIntersectedObject(event: MouseEvent): THREE.Object3D | null {
        const rect = this.renderer.domElement.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(x, y), this.camera);

        const intersects = raycaster.intersectObjects(this.scene.children, true);
        return intersects.length > 0 ? intersects[0].object : null;
    }

    /**
     * Get intersection point with a plane (default XY plane Z=0)
     */
    public getIntersectionWithPlane(event: MouseEvent): THREE.Vector3 | null {
        const rect = this.renderer.domElement.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(x, y), this.camera);

        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const target = new THREE.Vector3();

        return raycaster.ray.intersectPlane(plane, target);
    }

    /**
     * Get intersection point with specific objects
     */
    public getIntersectionWithObjects(event: MouseEvent, objects: THREE.Object3D[]): THREE.Intersection | null {
        const rect = this.renderer.domElement.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(x, y), this.camera);

        const intersects = raycaster.intersectObjects(objects, true);
        return intersects.length > 0 ? intersects[0] : null;
    }

    /**
     * Create a ghost version of a model
     */
    public createGhost(model: THREE.Object3D): THREE.Object3D {
        const ghost = model.clone(true);
        ghost.traverse((child) => {
            child.raycast = () => { }; // Disable raycasting for ghost
            if (child instanceof THREE.Mesh) {
                const materials = Array.isArray(child.material) ? child.material : [child.material];

                child.material = materials.map((m: THREE.Material) => {
                    const clone = (m as THREE.MeshStandardMaterial).clone();
                    clone.transparent = true;
                    clone.opacity = 0.6;
                    clone.depthWrite = false;
                    clone.emissive = new THREE.Color(0x00ff00); // Start green (valid)
                    clone.emissiveIntensity = 0.3;
                    clone.needsUpdate = true;
                    return clone;
                });

                if (!Array.isArray(child.material)) {
                    child.material = child.material[0];
                }
            }
        });
        return ghost;
    }

    /**
     * Set ghost color for valid/invalid placement feedback
     */
    public setGhostValid(ghost: THREE.Object3D, isValid: boolean): void {
        const color = isValid ? 0x00ff00 : 0xff0000; // Green or Red
        ghost.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                const mat = child.material as THREE.MeshStandardMaterial;
                if (mat.emissive) {
                    mat.emissive.setHex(color);
                    mat.emissiveIntensity = 0.4;
                }
            }
        });
    }

    /**
     * Highlight an object (for selection)
     */
    public highlightObject(obj: THREE.Object3D, highlight: boolean): void {
        obj.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                // Handle both single material and array of materials
                const materials = Array.isArray(child.material) ? child.material : [child.material];
                
                materials.forEach((mat) => {
                    if (mat instanceof THREE.MeshStandardMaterial) {
                        if (highlight) {
                            mat.emissive = new THREE.Color(0x0073aa);
                            mat.emissiveIntensity = 0.3;
                        } else {
                            mat.emissive = new THREE.Color(0x000000);
                            mat.emissiveIntensity = 0;
                        }
                        mat.needsUpdate = true;
                    }
                });
            }
        });
    }

    /**
     * Set drag valid/invalid visual feedback (green/red highlight)
     */
    public setDragValid(obj: THREE.Object3D, isValid: boolean): void {
        const color = isValid ? 0x00ff00 : 0xff0000; // Green or Red
        obj.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                const materials = Array.isArray(child.material) ? child.material : [child.material];
                
                materials.forEach((mat) => {
                    if (mat instanceof THREE.MeshStandardMaterial) {
                        mat.emissive = new THREE.Color(color);
                        mat.emissiveIntensity = 0.4;
                        mat.needsUpdate = true;
                    }
                });
            }
        });
    }

    /**
     * Clone an object with unique materials (to prevent shared material issues)
     * This ensures each instance can be highlighted independently
     */
    public cloneWithUniqueMaterials(obj: THREE.Object3D): THREE.Object3D {
        const clone = obj.clone(true);
        
        clone.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                // Clone materials to make them unique per instance
                if (Array.isArray(child.material)) {
                    child.material = child.material.map(mat => mat.clone());
                } else {
                    child.material = child.material.clone();
                }
            }
        });
        
        return clone;
    }

    /**
     * Enable or disable orbit controls (for dragging)
     */
    public setControlsEnabled(enabled: boolean): void {
        this.controls.enabled = enabled;
    }

    /**
     * Get the canvas element for event binding
     */
    public getCanvasElement(): HTMLCanvasElement {
        return this.renderer.domElement;
    }

    /**
     * Start render loop
     */
    public render(): void {
        const animate = () => {
            this.animationId = requestAnimationFrame(animate);
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        };
        animate();
    }

    /**
     * Stop render loop
     */
    public stop(): void {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    /**
     * Get the scene
     */
    public getScene(): THREE.Scene {
        return this.scene;
    }

    /**
     * Set camera to a specific preset view
     * All views are slightly angled for a more natural, pleasant perspective
     */
    public setCameraPreset(preset: 'front' | 'side' | 'top'): void {
        const distance = 1.5;
        const currentTarget = this.controls.target.clone();

        let pos = new THREE.Vector3();

        switch (preset) {
            case 'front':
                // Slightly angled front view - more natural perspective
                // Small offset on X and Y for depth perception
                pos.set(0.15, 0.1, distance);
                break;
            case 'side':
                // Angled side view - not perfectly perpendicular
                // Shows depth while maintaining side perspective
                pos.set(distance, 0.2, 0.4);
                break;
            case 'top':
                // Angled top view - 3/4 perspective from above
                // Much more pleasant than straight down
                pos.set(0.3, distance * 0.9, distance * 0.5);
                break;
        }

        // Apply offset to target
        pos.add(currentTarget);

        this.camera.position.copy(pos);
        this.camera.lookAt(currentTarget);
        this.controls.update();
    }

    /**
     * Fit camera to view all objects in the list
     */
    public fitCameraToSelection(objects: THREE.Object3D[]): void {
        if (objects.length === 0) return;

        const box = new THREE.Box3();
        objects.forEach(obj => box.expandByObject(obj));

        if (box.isEmpty()) return;

        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Calculate distance needed
        const maxSize = Math.max(size.x, size.y, size.z);
        const fitHeightDistance = maxSize / (2 * Math.atan(Math.PI * this.camera.fov / 360));
        const fitWidthDistance = fitHeightDistance / this.camera.aspect;
        const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance); // 1.2 margin

        const direction = this.camera.position.clone().sub(this.controls.target).normalize().multiplyScalar(distance);

        // Move camera
        this.camera.position.copy(center).add(direction);
        this.controls.target.copy(center);

        // Ensure camera is not too far or too close if limited
        // this.camera.position.clamp(...) 

        this.camera.updateProjectionMatrix();
        this.controls.update();
    }

    /**
     * Cleanup
     */
    public dispose(): void {
        this.stop();
        this.renderer.dispose();
        this.controls.dispose();
        if (this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
        }
    }
}
