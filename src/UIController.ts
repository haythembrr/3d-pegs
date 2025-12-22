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
        this.cartIntegration = new CartIntegration(config.cartApiUrl);
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

        // Add Reset Button
        html += `<div style="margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
                    <div class="pegboard-camera-controls">
                        <button class="small-btn" data-preset="front" title="Vue de Face">Front</button>
                        <button class="small-btn" data-preset="side" title="Vue de Côté">Side</button>
                        <button class="small-btn" data-preset="top" title="Vue de Haut">Top</button>
                    </div>
                    <button id="pegboard-reset" class="button small-btn danger">Reset</button>
                 </div>`;

        if (boards.length > 0) {
            html += `<div class="pegboard-section-title">Panneaux</div>`;
            html += `<div class="pegboard-grid">`;
            html += boards.map(p => `
                <button class="pegboard-product-btn" data-id="${p.id}" data-type="pegboard">
                    <span class="product-name">${p.name}</span>
                    <span class="product-price">${p.price} €</span>
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
                    <span class="product-price">${p.price} €</span>
                </button>
            `).join('');
            html += `</div>`;
        }

        libraryEl.innerHTML = html;

        // Add click listeners for products
        const buttons = libraryEl.querySelectorAll('.pegboard-product-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget as HTMLElement;
                const id = parseInt(target.dataset.id || '0');
                const type = target.dataset.type;
                if (id && type) {
                    this.handleProductSelect(id, type);
                }
            });
        });

        // Camera Preset Listeners
        const presetBtns = libraryEl.querySelectorAll('.pegboard-camera-controls button');
        presetBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget as HTMLElement;
                const preset = target.dataset.preset as 'front' | 'side' | 'top';
                if (preset) {
                    this.sceneManager.setCameraPreset(preset);
                }
            });
        });

        // Reset Listener
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

                // Track accessory
                const accessoryId = `acc_${this.nextAccessoryId++}`;
                const panel = this.multiPanelManager.getPanelAtPosition(position);
                
                const placedAccessory: PlacedAccessory = {
                    id: accessoryId,
                    object: scene,
                    productId: this.pendingProduct!.id,
                    panelId: panel ? panel.id : null
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
                }
            }
            // Delete key to remove selected object
            if (e.key === 'Delete' && this.selectedObject && !this.isDragging) {
                this.deleteSelectedObject();
            }
        });
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
                console.log('[handleMouseMove] Accessory - no panels exist, hiding ghost');
                return;
            }

            const intersection = this.sceneManager.getIntersectionWithObjects(event, panels);

            if (intersection) {
                console.log(`[handleMouseMove] Accessory - intersection point: (${intersection.point.x.toFixed(4)}m, ${intersection.point.y.toFixed(4)}m, ${intersection.point.z.toFixed(4)}m)`);
                
                const snapPos = this.multiPanelManager.getClosestHole(intersection.point);
                if (snapPos) {
                    this.ghostPanel.position.copy(snapPos);
                    this.isValidPlacement = true;
                    this.sceneManager.setGhostValid(this.ghostPanel, true);
                    console.log(`[handleMouseMove] Accessory - ✓ snapped to: (${snapPos.x.toFixed(4)}m, ${snapPos.y.toFixed(4)}m), isValidPlacement: true`);
                } else {
                    this.ghostPanel.position.copy(intersection.point);
                    this.ghostPanel.position.z = 0.015; // Keep in front
                    this.isValidPlacement = false;
                    this.sceneManager.setGhostValid(this.ghostPanel, false);
                    console.log(`[handleMouseMove] Accessory - ✗ no snap found, isValidPlacement: false`);
                }
            } else {
                // Mouse not over a panel - show ghost at plane intersection but mark invalid
                const planeIntersection = this.sceneManager.getIntersectionWithPlane(event);
                if (planeIntersection) {
                    this.ghostPanel.position.copy(planeIntersection);
                    this.isValidPlacement = false;
                    this.sceneManager.setGhostValid(this.ghostPanel, false);
                    console.log(`[handleMouseMove] Accessory - not over panel, isValidPlacement: false`);
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
        // Don't process click if we just finished dragging
        if (this.isDragging) return;

        if (this.isPlacingPanel) {
            // Re-validate placement at click time to ensure consistency
            let clickIsValid = this.isValidPlacement;
            
            if (this.placementType === 'accessory' && this.ghostPanel) {
                // Double-check: verify the ghost position is actually on a valid snap point
                const panels = this.multiPanelManager.getAllPanels().map(p => p.object);
                const intersection = this.sceneManager.getIntersectionWithObjects(event, panels);
                
                if (intersection) {
                    const snapPos = this.multiPanelManager.getClosestHole(intersection.point);
                    clickIsValid = snapPos !== null;
                    
                    // Update ghost position and visual to match click-time validation
                    if (snapPos) {
                        this.ghostPanel.position.copy(snapPos);
                        this.sceneManager.setGhostValid(this.ghostPanel, true);
                    } else {
                        this.sceneManager.setGhostValid(this.ghostPanel, false);
                    }
                } else {
                    clickIsValid = false;
                }
            }
            
            // Only place if ghost is visible AND placement is valid
            console.log(`[handleClick] Placement attempt - ghostVisible: ${this.ghostPanel?.visible}, isValidPlacement: ${this.isValidPlacement}, clickIsValid: ${clickIsValid}, placementType: ${this.placementType}`);
            
            if (this.ghostPanel && this.ghostPanel.visible && clickIsValid) {
                console.log('[handleClick] ✓ Placing object - valid placement');
                this.confirmPlacement();
            } else {
                console.log(`[handleClick] ✗ Cannot place - visible: ${this.ghostPanel?.visible}, valid: ${clickIsValid}`);
                // Visual feedback - flash red briefly
                if (this.ghostPanel) {
                    this.sceneManager.setGhostValid(this.ghostPanel, false);
                }
            }
        } else {
            // Not placing. Check if clicked on existing object to select it
            const obj = this.sceneManager.getIntersectedObject(event);
            if (obj) {
                // IMPORTANT: Check accessories FIRST since they are in front of panels
                // This prevents selecting both when clicking on an accessory
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

        } else if (this.selectedType === 'accessory') {
            // For accessories, snap to holes
            const panels = this.multiPanelManager.getAllPanels().map(p => p.object);
            const panelIntersection = this.sceneManager.getIntersectionWithObjects(event, panels);

            if (panelIntersection) {
                const snapPos = this.multiPanelManager.getClosestHole(panelIntersection.point);
                if (snapPos) {
                    this.selectedObject.position.copy(snapPos);
                    this.sceneManager.setDragValid(this.selectedObject, true);
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
            // Update panel position in manager
            this.multiPanelManager.updatePanelPosition(this.selectedId, newPosition);
            
            // Re-center camera after moving panel
            this.centerCameraOnPanels();
        } else if (this.selectedType === 'accessory') {
            // Update accessory's panel attachment
            const accessory = this.placedAccessories.get(this.selectedId);
            if (accessory) {
                // Detach from old panel
                if (accessory.panelId) {
                    this.multiPanelManager.detachAccessoryFromPanel(accessory.panelId, this.selectedId);
                }
                // Attach to new panel
                const newPanel = this.multiPanelManager.getPanelAtPosition(newPosition);
                if (newPanel) {
                    accessory.panelId = newPanel.id;
                    this.multiPanelManager.attachAccessoryToPanel(newPanel.id, this.selectedId);
                } else {
                    accessory.panelId = null;
                }
            }
        }

        // Reset drag state
        this.isDragging = false;
        this.dragStartPosition = null;
        this.dragOriginalPosition = null;

        // Reset cursor and controls
        const container = document.getElementById('pegboard-3d-container');
        if (container) container.classList.remove('dragging');
        this.sceneManager.setControlsEnabled(true);

        // Reset highlight to selection color
        this.sceneManager.highlightObject(this.selectedObject, true);
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
