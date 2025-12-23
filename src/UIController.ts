import * as THREE from 'three';
import { SceneManager } from './SceneManager';
import { ModelLoader } from './ModelLoader';
import { PriceCalculator } from './PriceCalculator';
import { CartIntegration } from './CartIntegration';
import { MultiPanelManager } from './MultiPanelManager';
import type { ProductData } from './types';

/**
 * Accessory instance tracking
 */
interface PlacedAccessory {
    id: string;
    object: THREE.Object3D;
    productId: number;
    panelId: string | null;
    boundingBox: THREE.Box3; // For collision detection
}

/**
 * UIController orchestrates all components and manages user interactions
 */
export class UIController {
    private sceneManager: SceneManager;
    private modelLoader: ModelLoader;
    private priceCalculator: PriceCalculator;
    private cartIntegration: CartIntegration;
    private multiPanelManager: MultiPanelManager;

    private products: ProductData[] = [];

    // Placed accessories tracking
    private placedAccessories: Map<string, PlacedAccessory> = new Map();
    private nextAccessoryId: number = 1;

    // Placement State
    private isPlacingPanel: boolean = false;
    private ghostPanel: THREE.Object3D | null = null;
    private pendingProduct: ProductData | null = null;
    private pendingMetadata: any = null;
    private placementType: 'board' | 'accessory' = 'board';
    private selectedObject: THREE.Object3D | null = null;
    private selectedType: 'panel' | 'accessory' | null = null;
    private selectedId: string | null = null;
    private isValidPlacement: boolean = true;

    // Dragging State
    private isDragging: boolean = false;
    private dragStartPosition: THREE.Vector3 | null = null;
    private dragOriginalPosition: THREE.Vector3 | null = null;

    constructor(containerId: string, config: any) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container ${containerId} not found`);
        }

        // Initialize all components
        this.sceneManager = new SceneManager(container);
        this.modelLoader = new ModelLoader();
        this.priceCalculator = new PriceCalculator();
        this.cartIntegration = new CartIntegration(config.cartApiUrl, config.storeApiNonce, config.cartPageUrl);
        this.multiPanelManager = new MultiPanelManager();

        // Set product data
        this.products = config.products || [];
        this.priceCalculator.setProductData(this.products);

        // Setup UI
        this.renderProductLibrary();
        this.setupEventListeners();

        // Start render loop
        this.sceneManager.render();

        // Load default panel if specified
        if (config.defaultPanel) {
            this.loadDefaultPanel(config.defaultPanel);
        } else {
            // Try to load the first pegboard found if no default
            const firstBoard = this.products.find(p => p.type === 'pegboard');
            if (firstBoard) {
                this.loadDefaultPanel(firstBoard.id.toString());
            }
        }
    }

    /**
     * Render product library in sidebar
     */
    private renderProductLibrary(): void {
        const libraryEl = document.getElementById('pegboard-product-library');
        if (!libraryEl) return;

        const boards = this.products.filter(p => p.type === 'pegboard');
        const accessories = this.products.filter(p => p.type === 'accessory');

        let html = '';

        if (boards.length > 0) {
            html += `<div class="pegboard-section-title">Panneaux</div>`;
            html += `<div class="pegboard-grid">`;
            html += boards.map(p => `
                <button class="pegboard-product-btn" data-id="${p.id}" data-type="pegboard">
                    <span class="product-name">${p.name}</span>
                    <span class="product-price">${(p.price ?? 0).toFixed(2)} €</span>
                </button>
            `).join('');
            html += `</div>`;
        }

        if (accessories.length > 0) {
            html += `<div class="pegboard-section-title">Accessoires</div>`;
            html += `<div class="pegboard-grid">`;
            html += accessories.map(p => `
                <button class="pegboard-product-btn" data-id="${p.id}" data-type="accessory">
                    <span class="product-name">${p.name}</span>
                    <span class="product-price">${(p.price ?? 0).toFixed(2)} €</span>
                </button>
            `).join('');
            html += `</div>`;
        }

        libraryEl.innerHTML = html;

        // Add click listeners for products
        libraryEl.querySelectorAll('.pegboard-product-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget as HTMLElement;
                const id = parseInt(target.dataset.id || '0');
                const type = target.dataset.type;
                if (id && type) {
                    this.handleProductSelect(id, type);
                }
            });
        });

        // Camera controls are now in the HTML template, bind them here
        const cameraControls = document.getElementById('pegboard-camera-controls');
        if (cameraControls) {
            cameraControls.querySelectorAll('.pegboard-camera-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const target = e.currentTarget as HTMLElement;
                    const preset = target.dataset.preset as 'front' | 'side' | 'top';
                    if (preset) {
                        this.sceneManager.setCameraPreset(preset);
                    }
                });
            });
        }

        // Reset button
        const resetBtn = document.getElementById('pegboard-reset');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetConfiguration());
        }
    }

    /**
     * Handle product selection
     */
    private async handleProductSelect(id: number, type: string): Promise<void> {
        try {
            // Deselect any currently selected object when starting placement
            if (this.selectedObject) {
                this.deselectObject();
                this.updatePriceDisplay();
            }

            const product = this.products.find(p => p.id === id);
            if (!product) return;

            if (type === 'pegboard') {
                await this.startPlacement(product);
            } else if (type === 'accessory') {
                await this.startAccessoryPlacement(product);
            }
        } catch (error) {
            console.error('Failed to select product:', error);
        }
    }

    /**
     * Start the placement mode for a pegboard
     */
    /**
     * Start the placement mode for an accessory
     */
    private async startAccessoryPlacement(product: ProductData): Promise<void> {
        if (this.isPlacingPanel) {
            this.cancelPlacement();
        }

        const model = await this.modelLoader.loadModel(product.glb_url);
        const ghost = this.sceneManager.createGhost(model.scene);
        ghost.position.set(0, 0, 0.015); // Start slightly in front of board plane
        ghost.visible = true; // Ensure ghost is visible

        this.sceneManager.addObject(ghost);

        this.isPlacingPanel = true;
        this.placementType = 'accessory';
        this.ghostPanel = ghost;
        this.pendingProduct = product;
        this.pendingMetadata = model.metadata;

        // Set initial invalid state (red) since not over a panel yet
        this.sceneManager.setGhostValid(ghost, false);

        // Add placing class to container for cursor change
        const container = document.getElementById('pegboard-3d-container');
        if (container) container.classList.add('placing');
    }

    /**
     * Start the placement mode for a pegboard
     */
    private async startPlacement(product: ProductData): Promise<void> {
        if (this.isPlacingPanel) {
            this.cancelPlacement();
        }

        const model = await this.modelLoader.loadModel(product.glb_url);
        const ghost = this.sceneManager.createGhost(model.scene);
        ghost.rotation.x = -Math.PI / 2; // Upright
        ghost.position.set(0, 0, 0); // Start at origin
        ghost.visible = true; // Ensure ghost is visible

        this.sceneManager.addObject(ghost);

        this.isPlacingPanel = true;
        this.placementType = 'board';
        this.ghostPanel = ghost;
        this.pendingProduct = product;
        this.pendingMetadata = model.metadata;

        // Set initial valid state (green)
        this.sceneManager.setGhostValid(ghost, true);

        // Add placing class to container for cursor change
        const container = document.getElementById('pegboard-3d-container');
        if (container) container.classList.add('placing');
    }

    // Position ghost initially at mouse or center
    // (Will be updated by mousemove immediately if mouse is over canvas)


    /**
     * Cancel placement mode
     */
    private cancelPlacement(): void {
        if (this.ghostPanel) {
            this.sceneManager.removeObject(this.ghostPanel);
            this.ghostPanel = null;
        }
        this.isPlacingPanel = false;
        this.pendingProduct = null;
        this.pendingMetadata = null;

        // Remove placing class from container
        const container = document.getElementById('pegboard-3d-container');
        if (container) container.classList.remove('placing');
    }

    /**
     * Check if placing an accessory at a position would collide with existing accessories
     */
    private checkAccessoryCollision(position: THREE.Vector3, ghostObject: THREE.Object3D, excludeId?: string): boolean {
        const shrinkAmount = 0.003;
        
        const ghostFootprint = this.calculate2DFootprint(ghostObject, position);
        if (!ghostFootprint) return false;
        
        for (const [id, accessory] of this.placedAccessories) {
            if (excludeId && id === excludeId) continue;
            
            const accessoryFootprint = this.calculate2DFootprint(accessory.object);
            if (!accessoryFootprint) continue;
            
            const ghostMinX = ghostFootprint.min.x + shrinkAmount;
            const ghostMaxX = ghostFootprint.max.x - shrinkAmount;
            const ghostMinY = ghostFootprint.min.y + shrinkAmount;
            const ghostMaxY = ghostFootprint.max.y - shrinkAmount;
            
            const accMinX = accessoryFootprint.min.x + shrinkAmount;
            const accMaxX = accessoryFootprint.max.x - shrinkAmount;
            const accMinY = accessoryFootprint.min.y + shrinkAmount;
            const accMaxY = accessoryFootprint.max.y - shrinkAmount;
            
            const overlapX = ghostMinX < accMaxX && ghostMaxX > accMinX;
            const overlapY = ghostMinY < accMaxY && ghostMaxY > accMinY;
            
            if (overlapX && overlapY) return true;
        }
        
        return false;
    }
    
    /**
     * Calculate 2D footprint of an object on the panel surface (XY plane projection)
     * This avoids false collisions from 3D depth by only considering the surface footprint
     */
    private calculate2DFootprint(object: THREE.Object3D, atPosition?: THREE.Vector3): THREE.Box2 | null {
        const box = new THREE.Box2();
        let hasGeometry = false;
        
        // If a position is provided, temporarily move the object
        const originalPosition = object.position.clone();
        if (atPosition) {
            object.position.copy(atPosition);
        }
        object.updateMatrixWorld(true);
        
        // Traverse and collect 2D projections from actual meshes
        object.traverse((child) => {
            if (child instanceof THREE.Mesh && child.geometry) {
                // Get vertices and project to XY plane
                const vertices = child.geometry.attributes.position;
                if (vertices) {
                    const vertex = new THREE.Vector3();
                    const worldVertex = new THREE.Vector3();
                    
                    for (let i = 0; i < vertices.count; i++) {
                        vertex.fromBufferAttribute(vertices, i);
                        worldVertex.copy(vertex).applyMatrix4(child.matrixWorld);
                        
                        // Project to XY plane (ignore Z for 2D footprint)
                        if (hasGeometry) {
                            box.expandByPoint(new THREE.Vector2(worldVertex.x, worldVertex.y));
                        } else {
                            box.set(
                                new THREE.Vector2(worldVertex.x, worldVertex.y),
                                new THREE.Vector2(worldVertex.x, worldVertex.y)
                            );
                            hasGeometry = true;
                        }
                    }
                }
            }
        });
        
        // Restore original position
        if (atPosition) {
            object.position.copy(originalPosition);
            object.updateMatrixWorld(true);
        }
        
        return hasGeometry ? box : null;
    }

    /**
     * Calculate the actual surface Z position of a panel considering its rotation and thickness
     */
    private calculatePanelSurfaceZ(panel: any): number {
        // Panels are rotated -90° around X-axis, so they lie flat
        // Get the panel's bounding box to determine thickness
        const box = new THREE.Box3().setFromObject(panel.object);
        const size = box.getSize(new THREE.Vector3());
        
        // After -90° rotation around X:
        // - The panel's top surface is at its position.z + half the thickness in Z direction
        return panel.position.z + (size.z / 2);
    }

    /**
     * Confirm placement at current ghost position
     */
    private confirmPlacement(): void {
        if (!this.ghostPanel || !this.ghostPanel.visible || !this.pendingProduct || !this.pendingMetadata) return;

        const position = this.ghostPanel.position.clone();
        const rotation = this.ghostPanel.rotation.clone();

        this.modelLoader.loadModel(this.pendingProduct.glb_url).then(model => {
            // Clone with unique materials to prevent shared material issues
            const scene = this.sceneManager.cloneWithUniqueMaterials(model.scene);
            scene.rotation.copy(rotation);

            if (this.placementType === 'board') {
                const panel = this.multiPanelManager.addPanel(scene, this.pendingMetadata, position);
                this.sceneManager.addObject(panel.object);
                this.priceCalculator.addItem(this.pendingProduct!.id, 1);

                // Camera fit
                const allPanels = this.multiPanelManager.getAllPanels().map(p => p.object);
                this.sceneManager.fitCameraToSelection(allPanels);

            } else if (this.placementType === 'accessory') {
                scene.position.copy(position);
                this.sceneManager.addObject(scene);

                // Track accessory with bounding box for collision detection
                const accessoryId = `acc_${this.nextAccessoryId++}`;
                const panel = this.multiPanelManager.getPanelAtPosition(position);
                
                // Calculate bounding box
                const boundingBox = new THREE.Box3().setFromObject(scene);
                
                const placedAccessory: PlacedAccessory = {
                    id: accessoryId,
                    object: scene,
                    productId: this.pendingProduct!.id,
                    panelId: panel ? panel.id : null,
                    boundingBox: boundingBox
                };
                this.placedAccessories.set(accessoryId, placedAccessory);

                // Track accessory attachment to panel
                if (panel) {
                    this.multiPanelManager.attachAccessoryToPanel(panel.id, accessoryId);
                }

                this.priceCalculator.addItem(this.pendingProduct!.id, 1);
            }

            this.updatePriceDisplay();
            this.cancelPlacement();
        });
    }

    /**
     * Setup event listeners
     */
    private setupEventListeners(): void {
        // CRITICAL: Use the Three.js canvas for mouse events, not the outer container
        const canvas = this.sceneManager.getCanvasElement();

        canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e as MouseEvent));
        canvas.addEventListener('click', (e) => this.handleClick(e as MouseEvent));
        canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e as MouseEvent));
        canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e as MouseEvent));
        canvas.addEventListener('mouseleave', () => this.handleMouseLeave());

        // Add to cart button
        const cartButton = document.getElementById('pegboard-add-to-cart');
        if (cartButton) {
            cartButton.addEventListener('click', () => this.handleAddToCart());
        }

        // Update price display
        this.updatePriceDisplay();

        // Escape key to cancel placement or dragging
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.isPlacingPanel) {
                    this.cancelPlacement();
                } else if (this.isDragging) {
                    this.cancelDrag();
                } else if (this.selectedObject) {
                    // Also deselect on Escape
                    this.deselectObject();
                    this.updatePriceDisplay();
                }
            }
            // Delete key to remove selected object
            if (e.key === 'Delete' && this.selectedObject && !this.isDragging) {
                this.deleteSelectedObject();
            }
        });

        // Deselect when clicking outside the 3D container
        document.addEventListener('click', (e) => this.handleDocumentClick(e));
    }

    /**
     * Handle clicks outside the 3D canvas to deselect objects
     */
    private handleDocumentClick(event: MouseEvent): void {
        // Don't deselect if we're dragging or placing
        if (this.isDragging || this.isPlacingPanel) return;

        // Check if click is inside the 3D container
        const container = document.getElementById('pegboard-3d-container');
        if (!container) return;

        const target = event.target as HTMLElement;
        
        // If click is inside the 3D container, let handleClick manage selection
        if (container.contains(target)) return;

        // If click is on an item list element (select/delete buttons), don't deselect
        const itemList = document.getElementById('pegboard-item-list');
        if (itemList && itemList.contains(target)) return;

        // Click is outside - deselect any selected object
        if (this.selectedObject) {
            this.deselectObject();
            this.updatePriceDisplay();
        }
    }

    /**
     * Handle mouse move for ghost positioning and dragging
     */
    private handleMouseMove(event: MouseEvent): void {
        // Handle dragging selected object
        if (this.isDragging && this.selectedObject) {
            this.handleDragMove(event);
            return;
        }

        // Handle placement ghost
        if (!this.isPlacingPanel || !this.ghostPanel || !this.pendingMetadata) return;

        // Always show ghost during placement
        this.ghostPanel.visible = true;

        if (this.placementType === 'board') {
            const intersection = this.sceneManager.getIntersectionWithPlane(event);
            if (!intersection) {
                this.ghostPanel.visible = false;
                return;
            }

            const snapPositions = this.multiPanelManager.getSnapPositions(this.pendingMetadata);
            let bestPos = intersection.clone();
            let minDistance = Infinity;
            let foundSnap = false;

            if (snapPositions.length > 0) {
                for (const pos of snapPositions) {
                    const dist = intersection.distanceTo(pos);
                    if (dist < 0.5) {
                        if (dist < minDistance) {
                            minDistance = dist;
                            bestPos = pos;
                            foundSnap = true;
                        }
                    }
                }
            }

            const hasPanels = this.multiPanelManager.getAllPanels().length > 0;

            // Determine if placement is valid
            this.isValidPlacement = !hasPanels || foundSnap;

            // Always show ghost, but change color based on validity
            this.ghostPanel.position.copy(bestPos);
            this.sceneManager.setGhostValid(this.ghostPanel, this.isValidPlacement);

        } else if (this.placementType === 'accessory') {
            const panels = this.multiPanelManager.getAllPanels().map(p => p.object);
            if (panels.length === 0) {
                this.ghostPanel.visible = false;
                this.isValidPlacement = false;
                return;
            }

            const intersection = this.sceneManager.getIntersectionWithObjects(event, panels);

            if (intersection) {
                const snapPos = this.multiPanelManager.getClosestHole(intersection.point);
                if (snapPos) {
                    const hasCollision = this.checkAccessoryCollision(snapPos, this.ghostPanel);
                    this.ghostPanel.position.copy(snapPos);
                    this.isValidPlacement = !hasCollision;
                    this.sceneManager.setGhostValid(this.ghostPanel, !hasCollision);
                } else {
                    this.ghostPanel.position.copy(intersection.point);
                    const panels = this.multiPanelManager.getAllPanels();
                    if (panels.length > 0) {
                        const intersectedPanel = panels.find(p => {
                            const box = new THREE.Box3().setFromObject(p.object);
                            return box.containsPoint(intersection.point);
                        });
                        if (intersectedPanel) {
                            const surfaceZ = this.calculatePanelSurfaceZ(intersectedPanel);
                            this.ghostPanel.position.z = surfaceZ + 0.003;
                        } else {
                            this.ghostPanel.position.z = 0.003;
                        }
                    } else {
                        this.ghostPanel.position.z = 0.003;
                    }
                    this.isValidPlacement = false;
                    this.sceneManager.setGhostValid(this.ghostPanel, false);
                }
            } else {
                const planeIntersection = this.sceneManager.getIntersectionWithPlane(event);
                if (planeIntersection) {
                    this.ghostPanel.position.copy(planeIntersection);
                    this.isValidPlacement = false;
                    this.sceneManager.setGhostValid(this.ghostPanel, false);
                } else {
                    this.ghostPanel.visible = false;
                    this.isValidPlacement = false;
                }
            }
        }
    }

    /**
     * Handle click interactions
     */
    private handleClick(event: MouseEvent): void {
        if (this.isDragging) return;

        if (this.isPlacingPanel) {
            let clickIsValid = this.isValidPlacement;
            
            if (this.placementType === 'accessory' && this.ghostPanel) {
                const panels = this.multiPanelManager.getAllPanels().map(p => p.object);
                const intersection = this.sceneManager.getIntersectionWithObjects(event, panels);
                
                if (intersection) {
                    const snapPos = this.multiPanelManager.getClosestHole(intersection.point);
                    if (snapPos) {
                        const hasCollision = this.checkAccessoryCollision(snapPos, this.ghostPanel);
                        clickIsValid = !hasCollision;
                        this.ghostPanel.position.copy(snapPos);
                        this.sceneManager.setGhostValid(this.ghostPanel, !hasCollision);
                    } else {
                        clickIsValid = false;
                        this.sceneManager.setGhostValid(this.ghostPanel, false);
                    }
                } else {
                    clickIsValid = false;
                }
            }
            
            if (this.ghostPanel && this.ghostPanel.visible && clickIsValid) {
                this.confirmPlacement();
            } else if (this.ghostPanel) {
                this.sceneManager.setGhostValid(this.ghostPanel, false);
            }
        } else {
            const obj = this.sceneManager.getIntersectedObject(event);
            if (obj) {
                let foundAccessory = false;
                for (const [id, accessory] of this.placedAccessories) {
                    let isMatch = obj === accessory.object;
                    if (!isMatch) {
                        obj.traverseAncestors((ancestor) => {
                            if (ancestor === accessory.object) isMatch = true;
                        });
                    }
                    if (isMatch) {
                        this.selectObject(accessory.object, id, 'accessory');
                        foundAccessory = true;
                        break;
                    }
                }

                // If not an accessory, check if it's a panel
                if (!foundAccessory) {
                    const panels = this.multiPanelManager.getAllPanels();
                    let foundPanel = false;
                    for (const panel of panels) {
                        let isMatch = obj === panel.object;
                        if (!isMatch) {
                            obj.traverseAncestors((ancestor) => {
                                if (ancestor === panel.object) isMatch = true;
                            });
                        }
                        if (isMatch) {
                            this.selectObject(panel.object, panel.id, 'panel');
                            foundPanel = true;
                            break;
                        }
                    }
                    
                    if (!foundPanel) {
                        this.deselectObject();
                    }
                }
            } else {
                this.deselectObject();
            }
        }
    }

    /**
     * Handle mouse down - start dragging if on selected object
     */
    private handleMouseDown(event: MouseEvent): void {
        if (this.isPlacingPanel) return;

        // Check if clicking on the selected object to start dragging
        if (this.selectedObject && this.selectedId) {
            const obj = this.sceneManager.getIntersectedObject(event);
            if (obj) {
                // Check if the clicked object is part of the selected object
                let isSelectedObject = obj === this.selectedObject;
                if (!isSelectedObject) {
                    obj.traverseAncestors((ancestor) => {
                        if (ancestor === this.selectedObject) isSelectedObject = true;
                    });
                }

                if (isSelectedObject) {
                    // Start dragging
                    this.isDragging = true;
                    this.dragOriginalPosition = this.selectedObject.position.clone();

                    const intersection = this.sceneManager.getIntersectionWithPlane(event);
                    if (intersection) {
                        this.dragStartPosition = intersection.clone();
                    }

                    // Change cursor and add dragging class
                    const container = document.getElementById('pegboard-3d-container');
                    if (container) container.classList.add('dragging');

                    // Disable orbit controls during drag
                    this.sceneManager.setControlsEnabled(false);
                }
            }
        }
    }

    /**
     * Handle mouse up - finish dragging
     */
    private handleMouseUp(_event: MouseEvent): void {
        if (this.isDragging) {
            this.finishDrag();
        }
    }

    /**
     * Handle mouse leave - cancel drag if active
     */
    private handleMouseLeave(): void {
        if (this.isDragging) {
            this.cancelDrag();
        }
    }

    /**
     * Handle drag movement
     */
    private handleDragMove(event: MouseEvent): void {
        if (!this.selectedObject || !this.dragStartPosition || !this.dragOriginalPosition) return;

        const intersection = this.sceneManager.getIntersectionWithPlane(event);
        if (!intersection) return;

        // Calculate delta from drag start
        const delta = intersection.clone().sub(this.dragStartPosition);

        if (this.selectedType === 'panel' && this.selectedId) {
            // For panels, snap to valid positions
            const panel = this.multiPanelManager.getPanel(this.selectedId);
            if (!panel) return;

            const newPos = this.dragOriginalPosition.clone().add(delta);

            // Get snap positions (excluding current panel)
            const snapPositions = this.multiPanelManager.getSnapPositionsExcluding(panel.metadata, this.selectedId);

            let bestPos = newPos.clone();
            let minDistance = Infinity;
            let foundSnap = false;

            // Check for snap positions
            for (const pos of snapPositions) {
                const dist = newPos.distanceTo(pos);
                if (dist < 0.3) { // Snap threshold
                    if (dist < minDistance) {
                        minDistance = dist;
                        bestPos = pos.clone();
                        foundSnap = true;
                    }
                }
            }

            // If no panels left (this is the only one), allow free placement
            const otherPanels = this.multiPanelManager.getAllPanels().filter(p => p.id !== this.selectedId);
            if (otherPanels.length === 0) {
                bestPos = newPos;
                foundSnap = true; // Allow placement anywhere if it's the only panel
            }

            // Update position
            this.selectedObject.position.copy(bestPos);

            // Visual feedback
            this.sceneManager.setDragValid(this.selectedObject, foundSnap);

        } else if (this.selectedType === 'accessory' && this.selectedId) {
            // For accessories, snap to holes and check for collisions
            const panels = this.multiPanelManager.getAllPanels().map(p => p.object);
            const panelIntersection = this.sceneManager.getIntersectionWithObjects(event, panels);

            if (panelIntersection) {
                const snapPos = this.multiPanelManager.getClosestHole(panelIntersection.point);
                if (snapPos) {
                    // Check for collision with other accessories (exclude the one being dragged)
                    const hasCollision = this.checkAccessoryCollision(snapPos, this.selectedObject, this.selectedId);
                    
                    this.selectedObject.position.copy(snapPos);
                    this.sceneManager.setDragValid(this.selectedObject, !hasCollision);
                } else {
                    this.selectedObject.position.copy(panelIntersection.point);
                    this.selectedObject.position.z = 0.015; // Keep in front of board
                    this.sceneManager.setDragValid(this.selectedObject, false);
                }
            } else {
                // Not over a panel - show at plane position but invalid
                const newPos = this.dragOriginalPosition.clone().add(delta);
                this.selectedObject.position.copy(newPos);
                this.sceneManager.setDragValid(this.selectedObject, false);
            }
        }
    }

    /**
     * Finish dragging and confirm new position
     */
    private finishDrag(): void {
        if (!this.selectedObject || !this.selectedId) {
            this.isDragging = false;
            return;
        }

        const newPosition = this.selectedObject.position.clone();

        if (this.selectedType === 'panel') {
            const movedPanel = this.multiPanelManager.getPanel(this.selectedId);
            const attachedAccessoryIds = movedPanel ? [...movedPanel.attachedAccessories] : [];
            
            this.multiPanelManager.updatePanelPosition(this.selectedId, newPosition);
            
            if (attachedAccessoryIds.length > 0) {
                this.relocateAccessoriesAfterPanelMove(attachedAccessoryIds, this.selectedId);
            }
            
            this.centerCameraOnPanels();
        } else if (this.selectedType === 'accessory') {
            let isValidPlacement = false;
            let finalPosition = newPosition.clone();
            
            const snapPos = this.multiPanelManager.getClosestHole(newPosition);
            if (snapPos) {
                const hasCollision = this.checkAccessoryCollision(snapPos, this.selectedObject, this.selectedId);
                if (!hasCollision) {
                    isValidPlacement = true;
                    finalPosition = snapPos;
                }
            }
            
            if (!isValidPlacement) {
                this.cancelDrag();
                return;
            }
            
            this.selectedObject.position.copy(finalPosition);
            
            const accessory = this.placedAccessories.get(this.selectedId);
            if (accessory) {
                if (accessory.panelId) {
                    this.multiPanelManager.detachAccessoryFromPanel(accessory.panelId, this.selectedId);
                }
                const newPanel = this.multiPanelManager.getPanelAtPosition(finalPosition);
                if (newPanel) {
                    accessory.panelId = newPanel.id;
                    this.multiPanelManager.attachAccessoryToPanel(newPanel.id, this.selectedId);
                }
                accessory.boundingBox = new THREE.Box3().setFromObject(accessory.object);
            }
        }

        this.isDragging = false;
        this.dragStartPosition = null;
        this.dragOriginalPosition = null;

        const container = document.getElementById('pegboard-3d-container');
        if (container) container.classList.remove('dragging');
        this.sceneManager.setControlsEnabled(true);
        this.sceneManager.highlightObject(this.selectedObject, true);
    }

    /**
     * Relocate accessories to valid positions after their parent panel was moved
     * Handles aligned accessories by finding alternative holes when collision occurs
     */
    private relocateAccessoriesAfterPanelMove(accessoryIds: string[], _movedPanelId: string): void {
        if (accessoryIds.length === 0) return;

        for (const accId of accessoryIds) {
            const accessory = this.placedAccessories.get(accId);
            if (!accessory) continue;

            const currentPos = accessory.object.position.clone();
            
            // Try to find a valid position, expanding search if needed
            const validPos = this.findValidRelocationPosition(accessory, accId, currentPos);
            
            if (validPos) {
                accessory.object.position.copy(validPos);
                
                if (accessory.panelId) {
                    this.multiPanelManager.detachAccessoryFromPanel(accessory.panelId, accId);
                }
                
                const newPanel = this.multiPanelManager.getPanelAtPosition(validPos);
                if (newPanel) {
                    accessory.panelId = newPanel.id;
                    this.multiPanelManager.attachAccessoryToPanel(newPanel.id, accId);
                }
                
                accessory.boundingBox = new THREE.Box3().setFromObject(accessory.object);
            } else {
                this.removeAccessory(accId);
            }
        }
        
        this.updatePriceDisplay();
    }

    /**
     * Find a valid relocation position for an accessory
     * Searches nearby holes and finds one without collision
     */
    private findValidRelocationPosition(
        accessory: PlacedAccessory,
        accId: string,
        targetPos: THREE.Vector3
    ): THREE.Vector3 | null {
        const allPanels = this.multiPanelManager.getAllPanels();
        if (allPanels.length === 0) return null;

        // Collect candidate holes from all panels, sorted by distance
        const candidates: { pos: THREE.Vector3; dist: number }[] = [];
        
        for (const panel of allPanels) {
            const spacing = panel.metadata.grid_spacing_mm / 1000;
            const offset = panel.metadata.grid_offset_mm / 1000;
            const margin = panel.metadata.border_margin_mm / 1000;
            const widthM = (panel.metadata.panel_width_cm * 10) / 1000;
            const heightM = (panel.metadata.panel_height_cm * 10) / 1000;

            // Grid A
            for (let gx = margin; gx <= widthM - margin; gx += spacing) {
                for (let gy = margin; gy <= heightM - margin; gy += spacing) {
                    const pos = new THREE.Vector3(panel.position.x + gx, panel.position.y - gy, 0.005);
                    const dist = targetPos.distanceTo(pos);
                    if (dist < 0.5) candidates.push({ pos, dist });
                }
            }
            // Grid B
            for (let gx = margin + offset; gx <= widthM - margin; gx += spacing) {
                for (let gy = margin + offset; gy <= heightM - margin; gy += spacing) {
                    const pos = new THREE.Vector3(panel.position.x + gx, panel.position.y - gy, 0.005);
                    const dist = targetPos.distanceTo(pos);
                    if (dist < 0.5) candidates.push({ pos, dist });
                }
            }
        }

        // Sort by distance (closest first)
        candidates.sort((a, b) => a.dist - b.dist);

        // Find first position without collision
        for (const candidate of candidates) {
            if (!this.checkAccessoryCollision(candidate.pos, accessory.object, accId)) {
                return candidate.pos;
            }
        }

        return null;
    }

    /**
     * Remove an accessory by ID
     */
    private removeAccessory(accessoryId: string): void {
        const accessory = this.placedAccessories.get(accessoryId);
        if (!accessory) return;
        
        this.sceneManager.removeObject(accessory.object);
        
        if (accessory.panelId) {
            this.multiPanelManager.detachAccessoryFromPanel(accessory.panelId, accessoryId);
        }
        
        // Remove from price calculator
        this.priceCalculator.removeItem(accessory.productId);
        
        // Remove from placed accessories
        this.placedAccessories.delete(accessoryId);
        
        // Update price display
        this.updatePriceDisplay();
    }

    /**
     * Cancel dragging and restore original position
     */
    private cancelDrag(): void {
        if (this.selectedObject && this.dragOriginalPosition) {
            this.selectedObject.position.copy(this.dragOriginalPosition);
            this.sceneManager.highlightObject(this.selectedObject, true);
        }

        this.isDragging = false;
        this.dragStartPosition = null;
        this.dragOriginalPosition = null;

        // Reset cursor and controls
        const container = document.getElementById('pegboard-3d-container');
        if (container) container.classList.remove('dragging');
        this.sceneManager.setControlsEnabled(true);
    }

    /**
     * Select an object in the scene
     */
    private selectObject(obj: THREE.Object3D, id: string, type: 'panel' | 'accessory'): void {
        this.deselectObject();
        this.selectedObject = obj;
        this.selectedType = type;
        this.selectedId = id;
        this.sceneManager.highlightObject(obj, true);

        // Update UI to show selection
        const selector = type === 'panel' ? `[data-panel-id="${id}"]` : `[data-accessory-id="${id}"]`;
        const itemEl = document.querySelector(selector);
        if (itemEl) {
            itemEl.classList.add('selected');
        }
    }

    /**
     * Deselect current object
     */
    private deselectObject(): void {
        if (this.selectedObject) {
            this.sceneManager.highlightObject(this.selectedObject, false);
            this.selectedObject = null;
            this.selectedType = null;
            this.selectedId = null;
        }
        // Remove selection highlight from UI
        document.querySelectorAll('.pegboard-item.selected').forEach(el => {
            el.classList.remove('selected');
        });
    }

    /**
     * Delete the currently selected object
     */
    private deleteSelectedObject(): void {
        if (!this.selectedObject || !this.selectedId || !this.selectedType) return;

        if (this.selectedType === 'panel') {
            this.deletePanelById(this.selectedId);
        } else if (this.selectedType === 'accessory') {
            this.deleteAccessoryById(this.selectedId);
        }

        this.selectedObject = null;
        this.selectedType = null;
        this.selectedId = null;
    }

    // Note: pickupPanel is disabled for now - we use selection-based workflow instead.
    // This method can be re-enabled for drag-to-move functionality in the future.
    /*
    private async pickupPanel(panelId: string): Promise<void> {
        const panel = this.multiPanelManager.getPanel(panelId);
        if (!panel) return;

        const product = this.products.find(p => p.type === 'pegboard');
        if (!product) return;

        this.multiPanelManager.removePanel(panelId);
        this.sceneManager.removeObject(panel.object);

        this.priceCalculator.removeItem(product.id);
        this.updatePriceDisplay();

        await this.startPlacement(product);
    }
    */

    // Updated loadPegboard replacement (keeping old method name but redirecting or removing)
    // Actually, I should remove loadPegboard from being called directly if I use startPlacement.
    // I can make loadPegboard just call startPlacement? 
    // Wait, loadPegboard was for direct add. startPlacement is interactive.
    // I used 'loadPegboard' in 'loadDefaultPanel'. 
    // loadDefaultPanel should probably instant-place (non-interactive) or start placement?
    // "Add First Board: Should snap to center (0,0,0) or start placement mode."
    // Let's make loadPegboard behave as instant add (for defaults) but handleProductSelect use startPlacement.




    /**
     * Reset configuration
     */
    private resetConfiguration(): void {
        const panels = this.multiPanelManager.getAllPanels();
        panels.forEach(panel => {
            this.sceneManager.removeObject(panel.object);
        });

        // Also remove accessories
        this.placedAccessories.forEach(accessory => {
            this.sceneManager.removeObject(accessory.object);
        });

        if (confirm('Tout réinitialiser?')) {
            window.location.reload();
        }
    }

    /**
     * Load a pegboard immediately (internal/default use)
     */
    private async loadPegboard(product: ProductData): Promise<void> {
        const model = await this.modelLoader.loadModel(product.glb_url);
        // Clone with unique materials to prevent shared material issues
        const scene = this.sceneManager.cloneWithUniqueMaterials(model.scene);
        scene.rotation.x = -Math.PI / 2;

        const panel = this.multiPanelManager.addPanel(scene, model.metadata as any);
        this.sceneManager.addObject(panel.object);
        this.priceCalculator.addItem(product.id, 1);
        this.updatePriceDisplay();

        const allPanels = this.multiPanelManager.getAllPanels().map(p => p.object);
        this.sceneManager.fitCameraToSelection(allPanels);
    }

    /**
     * Load default panel
     */
    private async loadDefaultPanel(productId: string): Promise<void> {
        const product = this.products.find(p => p.id === parseInt(productId));
        if (product) {
            await this.loadPegboard(product);
        }
    }

    /**
     * Update price display in UI
     */
    private updatePriceDisplay(): void {
        const priceEl = document.querySelector('#pegboard-price-display .amount');
        if (priceEl) {
            const total = this.priceCalculator.getTotal();
            priceEl.textContent = `${total.toFixed(2)} €`;
        }

        // Update item list with panel-level details
        const itemListEl = document.getElementById('pegboard-item-list');
        if (itemListEl) {
            const panels = this.multiPanelManager.getAllPanels();

            // Build HTML for panels
            let html = '';

            // Add help hint if there are items
            if (panels.length > 0 || this.placedAccessories.size > 0) {
                html += '<div class="pegboard-help-hint">💡 Cliquez sur un élément pour le sélectionner, puis glissez-le pour le déplacer</div>';
            }

            if (panels.length > 0) {
                html += '<div class="pegboard-section-title">Panneaux</div>';
                panels.forEach(panel => {
                    const isSelected = this.selectedObject === panel.object;
                    const product = this.products.find(p => p.type === 'pegboard');
                    const name = product ? product.name : 'Panneau';
                    const price = product?.price ?? 0;

                    html += `
                        <div class="pegboard-item ${isSelected ? 'selected' : ''}" data-panel-id="${panel.id}">
                            <span class="item-info">
                                <span class="item-name">${name}</span>
                                <span class="item-price">${price.toFixed(2)} €</span>
                            </span>
                            <div class="pegboard-item-actions">
                                <button class="select-btn" data-action="select" data-panel-id="${panel.id}" title="Sélectionner">⊙</button>
                                <button class="delete-btn" data-action="delete" data-panel-id="${panel.id}" title="Supprimer">×</button>
                            </div>
                        </div>
                    `;
                });
            }

            // Show accessories
            if (this.placedAccessories.size > 0) {
                html += '<div class="pegboard-section-title">Accessoires</div>';
                this.placedAccessories.forEach((accessory, id) => {
                    const isSelected = this.selectedObject === accessory.object;
                    const product = this.products.find(p => p.id === accessory.productId);
                    const name = product ? product.name : 'Accessoire';
                    const price = product?.price ?? 0;

                    html += `
                        <div class="pegboard-item ${isSelected ? 'selected' : ''}" data-accessory-id="${id}">
                            <span class="item-info">
                                <span class="item-name">${name}</span>
                                <span class="item-price">${price.toFixed(2)} €</span>
                            </span>
                            <div class="pegboard-item-actions">
                                <button class="select-btn" data-action="select" data-accessory-id="${id}" title="Sélectionner">⊙</button>
                                <button class="delete-btn" data-action="delete" data-accessory-id="${id}" title="Supprimer">×</button>
                            </div>
                        </div>
                    `;
                });
            }

            // Also show summary from price calculator
            const items = this.priceCalculator.getItemizedList();
            if (items.length > 0) {
                html += '<div class="pegboard-section-title" style="margin-top:10px;">Résumé</div>';
                items.forEach(item => {
                    html += `
                        <div class="pegboard-item summary-item">
                            <span>${item.name}</span>
                            <span>×${item.quantity}</span>
                            <span>${item.subtotal.toFixed(2)} €</span>
                        </div>
                    `;
                });
            }

            itemListEl.innerHTML = html;

            // Add event listeners for select/delete buttons
            this.setupItemListListeners(itemListEl);
        }
    }

    /**
     * Setup event listeners for item list buttons
     */
    private setupItemListListeners(container: HTMLElement): void {
        // Select buttons for panels
        container.querySelectorAll('[data-action="select"][data-panel-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const panelId = (btn as HTMLElement).dataset.panelId;
                if (panelId) {
                    const panel = this.multiPanelManager.getPanel(panelId);
                    if (panel) {
                        this.selectObject(panel.object, panel.id, 'panel');
                    }
                }
            });
        });

        // Delete buttons for panels
        container.querySelectorAll('[data-action="delete"][data-panel-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const panelId = (btn as HTMLElement).dataset.panelId;
                if (panelId) {
                    this.deletePanelById(panelId);
                }
            });
        });

        // Select buttons for accessories
        container.querySelectorAll('[data-action="select"][data-accessory-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const accessoryId = (btn as HTMLElement).dataset.accessoryId;
                if (accessoryId) {
                    const accessory = this.placedAccessories.get(accessoryId);
                    if (accessory) {
                        this.selectObject(accessory.object, accessoryId, 'accessory');
                    }
                }
            });
        });

        // Delete buttons for accessories
        container.querySelectorAll('[data-action="delete"][data-accessory-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const accessoryId = (btn as HTMLElement).dataset.accessoryId;
                if (accessoryId) {
                    this.deleteAccessoryById(accessoryId);
                }
            });
        });

        // Clicking the panel item row itself selects it
        container.querySelectorAll('.pegboard-item[data-panel-id]').forEach(item => {
            item.addEventListener('click', () => {
                const panelId = (item as HTMLElement).dataset.panelId;
                if (panelId) {
                    const panel = this.multiPanelManager.getPanel(panelId);
                    if (panel) {
                        this.selectObject(panel.object, panel.id, 'panel');
                    }
                }
            });
        });

        // Clicking the accessory item row itself selects it
        container.querySelectorAll('.pegboard-item[data-accessory-id]').forEach(item => {
            item.addEventListener('click', () => {
                const accessoryId = (item as HTMLElement).dataset.accessoryId;
                if (accessoryId) {
                    const accessory = this.placedAccessories.get(accessoryId);
                    if (accessory) {
                        this.selectObject(accessory.object, accessoryId, 'accessory');
                    }
                }
            });
        });
    }

    /**
     * Delete a panel by its ID
     */
    private deletePanelById(panelId: string): void {
        const panel = this.multiPanelManager.getPanel(panelId);
        if (!panel) return;

        // If currently selected, deselect
        if (this.selectedObject === panel.object) {
            this.deselectObject();
        }

        // Remove from scene
        this.sceneManager.removeObject(panel.object);

        // Remove attached accessories
        const accessoriesToRemove = this.multiPanelManager.removePanel(panelId);
        accessoriesToRemove.forEach(accId => {
            const accessory = this.placedAccessories.get(accId);
            if (accessory) {
                this.sceneManager.removeObject(accessory.object);
                this.priceCalculator.removeItem(accessory.productId);
                this.placedAccessories.delete(accId);
            }
        });

        // Update price
        const product = this.products.find(p => p.type === 'pegboard');
        if (product) {
            this.priceCalculator.removeItem(product.id);
        }

        this.updatePriceDisplay();
        
        // Re-center camera on remaining panels
        this.centerCameraOnPanels();
    }

    /**
     * Delete an accessory by its ID
     */
    private deleteAccessoryById(accessoryId: string): void {
        const accessory = this.placedAccessories.get(accessoryId);
        if (!accessory) return;

        // If currently selected, deselect
        if (this.selectedObject === accessory.object) {
            this.deselectObject();
        }

        // Remove from scene
        this.sceneManager.removeObject(accessory.object);

        // Detach from panel if attached
        if (accessory.panelId) {
            this.multiPanelManager.detachAccessoryFromPanel(accessory.panelId, accessoryId);
        }

        // Update price
        this.priceCalculator.removeItem(accessory.productId);

        // Remove from tracking
        this.placedAccessories.delete(accessoryId);

        this.updatePriceDisplay();
    }

    /**
     * Center camera on all panels
     */
    private centerCameraOnPanels(): void {
        const allPanels = this.multiPanelManager.getAllPanels().map(p => p.object);
        if (allPanels.length > 0) {
            this.sceneManager.fitCameraToSelection(allPanels);
        }
    }

    /**
     * Handle add to cart
     */
    private async handleAddToCart(): Promise<void> {
        const items = this.priceCalculator.getSceneItems();

        if (items.length === 0) {
            alert('Veuillez ajouter des éléments à votre configuration');
            return;
        }

        await this.cartIntegration.addToCart(items);
    }

    /**
     * Dispose and cleanup
     */
    public dispose(): void {
        this.sceneManager.dispose();
        this.modelLoader.clearCache();
        this.priceCalculator.clear();
    }
}
