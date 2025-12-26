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
    color: string; // Current color hex
}

/**
 * Currency settings from WooCommerce
 */
interface CurrencySettings {
    code: string;
    symbol: string;
    position: 'left' | 'right' | 'left_space' | 'right_space';
    decimals: number;
    decimal_separator: string;
    thousand_separator: string;
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
    
    // Currency settings
    private currency: CurrencySettings = {
        code: 'EUR',
        symbol: '€',
        position: 'right_space',
        decimals: 2,
        decimal_separator: ',',
        thousand_separator: ' '
    };

    // Placed accessories tracking
    private placedAccessories: Map<string, PlacedAccessory> = new Map();
    private nextAccessoryId: number = 1;

    // Placed panels color tracking (panelId -> color)
    private panelColors: Map<string, string> = new Map();

    // Placement State
    private isPlacingPanel: boolean = false;
    private pendingProduct: ProductData | null = null;
    private pendingMetadata: any = null;
    private placementType: 'board' | 'accessory' = 'board';
    private selectedObject: THREE.Object3D | null = null;
    private selectedType: 'panel' | 'accessory' | null = null;
    private selectedId: string | null = null;

    // Dragging State
    private isDragging: boolean = false;
    private dragStartPosition: THREE.Vector3 | null = null;
    private dragOriginalPosition: THREE.Vector3 | null = null;

    // Color variants tracking (default colors per product type)
    private selectedColors: Map<number, string> = new Map();
    
    // Currently active product for placement
    private activeProductId: number | null = null;

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
        
        // Set currency settings from WooCommerce
        if (config.currency) {
            this.currency = { ...this.currency, ...config.currency };
        }

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
     * Decode HTML entities to their actual characters
     * @param html String containing HTML entities
     * @returns Decoded string
     */
    private decodeHtmlEntities(html: string): string {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = html;
        return textarea.value;
    }
    
    /**
     * Format a price according to WooCommerce currency settings
     * @param amount The numeric amount to format
     * @returns Formatted price string with currency symbol
     */
    private formatPrice(amount: number): string {
        // Format the number with proper decimals and separators
        const parts = amount.toFixed(this.currency.decimals).split('.');
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.currency.thousand_separator);
        const decimalPart = parts[1] || '';
        
        const formattedNumber = decimalPart 
            ? `${integerPart}${this.currency.decimal_separator}${decimalPart}`
            : integerPart;
        
        // Decode HTML entities in the currency symbol (e.g., &#x62f;.&#x62a; -> د.ت)
        const symbol = this.decodeHtmlEntities(this.currency.symbol);
        
        // Position the currency symbol
        switch (this.currency.position) {
            case 'left':
                return `${symbol}${formattedNumber}`;
            case 'left_space':
                return `${symbol} ${formattedNumber}`;
            case 'right':
                return `${formattedNumber}${symbol}`;
            case 'right_space':
            default:
                return `${formattedNumber} ${symbol}`;
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
            html += boards.map(p => this.renderProductButton(p, 'pegboard')).join('');
            html += `</div>`;
        }

        if (accessories.length > 0) {
            html += `<div class="pegboard-section-title">Accessoires</div>`;
            html += `<div class="pegboard-grid">`;
            html += accessories.map(p => this.renderProductButton(p, 'accessory')).join('');
            html += `</div>`;
        }

        libraryEl.innerHTML = html;

        // Add click listeners for products
        libraryEl.querySelectorAll('.pegboard-product-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Don't trigger if clicking on color dot
                if ((e.target as HTMLElement).classList.contains('color-dot')) return;
                
                const target = e.currentTarget as HTMLElement;
                const id = parseInt(target.dataset.id || '0');
                const type = target.dataset.type;
                if (id && type) {
                    this.handleProductSelect(id, type);
                }
            });
            
            // Add hover listener for insertion mode highlighting
            btn.addEventListener('mouseenter', () => {
                if (this.isPlacingPanel && this.pendingProduct) {
                    const id = parseInt((btn as HTMLElement).dataset.id || '0');
                    if (id === this.pendingProduct.id) {
                        btn.classList.add('hover-during-placement');
                    }
                }
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.classList.remove('hover-during-placement');
            });
        });

        // Add click listeners for color dots
        libraryEl.querySelectorAll('.color-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const target = e.currentTarget as HTMLElement;
                const productId = parseInt(target.dataset.productId || '0');
                const color = target.dataset.color || '';
                if (productId && color) {
                    this.handleColorSelect(productId, color, target);
                }
            });
        });
        
        // Initialize default color highlights for all products with color variants
        this.initializeDefaultColorHighlights();

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

        // Delete selected button (in scene)
        const deleteBtn = document.getElementById('pegboard-delete-selected');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => this.deleteSelectedObject());
        }
        
        // Theme toggle button
        const themeBtn = document.getElementById('pegboard-theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.toggleDarkMode(themeBtn));
        }
        
        // Help button tooltip for mobile (touch devices)
        this.setupMobileHelpTooltip();
    }
    
    /**
     * Setup mobile help tooltip behavior (tap to show, tap anywhere to hide)
     */
    private setupMobileHelpTooltip(): void {
        const helpBtn = document.getElementById('pegboard-help-btn');
        const tooltip = document.querySelector('.pegboard-help-tooltip') as HTMLElement;
        
        if (!helpBtn || !tooltip) return;
        
        // Check if touch device
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            helpBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isVisible = tooltip.classList.contains('visible');
                tooltip.classList.toggle('visible', !isVisible);
            });
            
            // Close tooltip when tapping anywhere else
            document.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                if (!helpBtn.contains(target) && !tooltip.contains(target)) {
                    tooltip.classList.remove('visible');
                }
            });
            
            // Also close on touch start anywhere else
            document.addEventListener('touchstart', (e) => {
                const target = e.target as HTMLElement;
                if (!helpBtn.contains(target) && !tooltip.contains(target)) {
                    tooltip.classList.remove('visible');
                }
            }, { passive: true });
        }
    }
    
    // Dark mode state
    private isDarkMode: boolean = false;
    
    /**
     * Toggle dark mode for the 3D canvas
     */
    private toggleDarkMode(button: HTMLElement): void {
        this.isDarkMode = !this.isDarkMode;
        this.sceneManager.setDarkMode(this.isDarkMode);
        
        // Update button icon
        button.textContent = this.isDarkMode ? '🌙' : '☀️';
        button.title = this.isDarkMode ? 'Mode jour' : 'Mode nuit';
        
        // Update container class for potential CSS styling
        const container = document.getElementById('pegboard-3d-container');
        if (container) {
            container.classList.toggle('dark-mode', this.isDarkMode);
        }
    }

    /**
     * Render a single product button with color variants
     */
    private renderProductButton(product: ProductData, type: string): string {
        const colors = product.color_variants || [];
        const isOutOfStock = product.in_stock === false;
        const stockByColor = product.stock_by_color || {};
        let colorDotsHtml = '';

        if (colors.length > 0) {
            colorDotsHtml = `
                <div class="color-variants">
                    ${colors
                        .map((color) => {
                            const colorInStock = stockByColor[color] !== false;
                            const outOfStockClass = !colorInStock ? 'out-of-stock' : '';
                            const title = !colorInStock ? `${color} - Rupture de stock` : color;
                            return `
                        <span class="color-dot ${outOfStockClass}" 
                              data-product-id="${product.id}" 
                              data-color="${color}"
                              data-in-stock="${colorInStock}"
                              style="background-color: ${color};"
                              title="${title}">
                        </span>
                    `;
                        })
                        .join('')}
                </div>
            `;
        }

        const outOfStockClass = isOutOfStock ? 'out-of-stock' : '';
        const outOfStockLabel = isOutOfStock ? '<span class="out-of-stock-label">Rupture</span>' : '';

        return `
            <div class="pegboard-product-btn ${outOfStockClass}" data-id="${product.id}" data-type="${type}" data-in-stock="${!isOutOfStock}" tabindex="-1">
                <span class="product-name">${product.name}</span>
                ${outOfStockLabel}
                ${colorDotsHtml}
                <span class="product-price">${this.formatPrice(product.price ?? 0)}</span>
            </div>
        `;
    }

    /**
     * Handle color selection for a product
     */
    private handleColorSelect(productId: number, color: string, _dotElement: HTMLElement): void {
        // Check if this color is in stock
        const product = this.products.find(p => p.id === productId);
        if (product && product.stock_by_color && product.stock_by_color[color] === false) {
            // Color is out of stock, don't allow selection
            return;
        }
        
        // Store selected color as the default for this product type (for new placements)
        this.selectedColors.set(productId, color);
        
        // Check if we have a selected accessory of this product type
        if (this.selectedObject && this.selectedType === 'accessory' && this.selectedId) {
            const selectedAccessory = this.placedAccessories.get(this.selectedId);
            if (selectedAccessory && selectedAccessory.productId === productId) {
                // Only change the selected accessory's color
                this.sceneManager.setObjectColor(selectedAccessory.object, color);
                selectedAccessory.color = color;
                // Update the color dot highlight to show the selected accessory's color
                this.updateColorDotHighlight(productId, color);
                this.updateSummarySection();
                return;
            }
        }
        
        // Check if we have a selected panel of this product type
        if (this.selectedObject && this.selectedType === 'panel' && this.selectedId) {
            const selectedPanel = this.multiPanelManager.getPanel(this.selectedId);
            if (selectedPanel && selectedPanel.productId === productId) {
                // Only change the selected panel's color
                this.sceneManager.setObjectColor(selectedPanel.object, color);
                this.panelColors.set(this.selectedId, color);
                // Update the color dot highlight to show the selected panel's color
                this.updateColorDotHighlight(productId, color);
                this.updateSummarySection();
                return;
            }
        }
        
        // No matching selection - just update the default color highlight
        // This sets the default for future placements without changing existing objects
        this.updateColorDotHighlight(productId, color);
    }
    
    /**
     * Initialize default color highlights for all products with color variants
     */
    private initializeDefaultColorHighlights(): void {
        this.products.forEach(product => {
            if (product.color_variants && product.color_variants.length > 0) {
                // Set first IN STOCK color as default if not already set
                if (!this.selectedColors.has(product.id)) {
                    // Find first color that is in stock
                    const firstInStockColor = product.color_variants.find(color => 
                        !product.stock_by_color || product.stock_by_color[color] !== false
                    );
                    if (firstInStockColor) {
                        this.selectedColors.set(product.id, firstInStockColor);
                    }
                }
                // Highlight the default color dot
                const defaultColor = this.selectedColors.get(product.id);
                if (defaultColor) {
                    this.updateColorDotHighlight(product.id, defaultColor);
                }
            }
        });
    }
    
    /**
     * Update color dot highlight for a specific product
     */
    private updateColorDotHighlight(productId: number, color: string): void {
        const productBtn = document.querySelector(`.pegboard-product-btn[data-id="${productId}"]`);
        if (productBtn) {
            // Remove active from all dots in this product
            productBtn.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
            // Add active to the matching color dot
            const matchingDot = productBtn.querySelector(`.color-dot[data-color="${color}"]`);
            if (matchingDot) {
                matchingDot.classList.add('active');
            }
        }
    }
    
    /**
     * Highlight or unhighlight a product button
     */
    private highlightProductButton(productId: number, highlight: boolean): void {
        const productBtn = document.querySelector(`.pegboard-product-btn[data-id="${productId}"]`);
        if (productBtn) {
            if (highlight) {
                productBtn.classList.add('active');
            } else {
                productBtn.classList.remove('active');
            }
        }
    }

    /**
     * Handle product selection
     */
    private async handleProductSelect(id: number, type: string): Promise<void> {
        try {
            const product = this.products.find(p => p.id === id);
            if (!product) return;
            
            // Check if product is out of stock
            if (product.in_stock === false) {
                // Product is completely out of stock, don't allow placement
                return;
            }
            
            // Check if the selected color is in stock
            const selectedColor = this.selectedColors.get(id);
            if (selectedColor && product.stock_by_color && product.stock_by_color[selectedColor] === false) {
                // Selected color is out of stock, try to find an in-stock color
                const inStockColor = product.color_variants?.find(color => 
                    !product.stock_by_color || product.stock_by_color[color] !== false
                );
                if (inStockColor) {
                    this.selectedColors.set(id, inStockColor);
                    this.updateColorDotHighlight(id, inStockColor);
                } else {
                    // No colors in stock
                    return;
                }
            }
            
            // Deselect any currently selected object when starting placement
            if (this.selectedObject) {
                this.deselectObject();
                this.updatePriceDisplay();
            }

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

        this.isPlacingPanel = true;
        this.placementType = 'accessory';
        this.pendingProduct = product;
        this.pendingMetadata = model.metadata;
        this.activeProductId = product.id;
        
        // Highlight the product button during placement
        this.highlightProductButton(product.id, true);

        // Add placing class to container for cursor change
        const container = document.getElementById('pegboard-3d-container');
        if (container) container.classList.add('placing');
        
        // Show placement hint
        this.showContextHint('placement', '👆', `Cliquez sur le panneau pour placer "${product.name}"`);
    }

    /**
     * Start the placement mode for a pegboard
     */
    private async startPlacement(product: ProductData): Promise<void> {
        if (this.isPlacingPanel) {
            this.cancelPlacement();
        }

        const model = await this.modelLoader.loadModel(product.glb_url);

        this.isPlacingPanel = true;
        this.placementType = 'board';
        this.pendingProduct = product;
        this.pendingMetadata = model.metadata;
        this.activeProductId = product.id;
        
        // Highlight the product button during placement
        this.highlightProductButton(product.id, true);

        // Add placing class to container for cursor change
        const container = document.getElementById('pegboard-3d-container');
        if (container) container.classList.add('placing');
        
        // Show placement hint
        this.showContextHint('placement', '👆', `Cliquez pour placer "${product.name}"`);
    }


    /**
     * Cancel placement mode
     */
    private cancelPlacement(): void {
        // Remove product button highlight
        if (this.activeProductId !== null) {
            this.highlightProductButton(this.activeProductId, false);
        }
        
        this.isPlacingPanel = false;
        this.pendingProduct = null;
        this.pendingMetadata = null;
        this.activeProductId = null;

        // Remove placing class from container
        const container = document.getElementById('pegboard-3d-container');
        if (container) container.classList.remove('placing');

        // Remove focus from any product button
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.closest('.pegboard-product-btn')) {
            activeElement.blur();
        }
        // Also blur any focused product button
        document.querySelectorAll('.pegboard-product-btn').forEach((btn) => {
            (btn as HTMLElement).blur();
        });
        
        // Remove hover-during-placement class from all buttons
        document.querySelectorAll('.pegboard-product-btn.hover-during-placement').forEach((btn) => {
            btn.classList.remove('hover-during-placement');
        });
        
        // Hide context hint
        this.hideContextHint();
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
     * Check collision for initial accessory placement (before the object exists)
     * Creates a temporary object to check collision
     */
    private async checkInitialPlacementCollision(position: THREE.Vector3): Promise<boolean> {
        if (!this.pendingProduct) return false;
        
        // Load the model to get its actual size
        const model = await this.modelLoader.loadModel(this.pendingProduct.glb_url);
        const tempObject = model.scene.clone();
        tempObject.position.copy(position);
        tempObject.updateMatrixWorld(true);
        
        // Check collision using the temporary object
        const hasCollision = this.checkAccessoryCollision(position, tempObject);
        
        return hasCollision;
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
     * Setup event listeners
     */
    private setupEventListeners(): void {
        // CRITICAL: Use the Three.js canvas for mouse events, not the outer container
        const canvas = this.sceneManager.getCanvasElement();

        // Mouse events
        canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e as MouseEvent));
        canvas.addEventListener('click', (e) => this.handleClick(e as MouseEvent));
        canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e as MouseEvent));
        canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e as MouseEvent));
        canvas.addEventListener('mouseleave', () => this.handleMouseLeave());

        // Touch events for mobile support
        canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
        canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: false });

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

        // If click is inside the sidebar, don't deselect
        const sidebar = document.getElementById('pegboard-sidebar');
        if (sidebar && sidebar.contains(target)) return;

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
        // No ghost preview - placement happens directly on click
    }

    /**
     * Handle click interactions
     */
    private async handleClick(event: MouseEvent): Promise<void> {
        if (this.isDragging) return;

        if (this.isPlacingPanel && this.pendingProduct && this.pendingMetadata) {
            if (this.placementType === 'accessory') {
                const panels = this.multiPanelManager.getAllPanels().map(p => p.object);
                if (panels.length === 0) return;
                
                const intersection = this.sceneManager.getIntersectionWithObjects(event, panels);
                if (!intersection) return;
                
                const snapPos = this.multiPanelManager.getClosestHole(intersection.point);
                if (!snapPos) return;
                
                // Check collision with existing accessories before placing
                const hasCollision = await this.checkInitialPlacementCollision(snapPos);
                if (hasCollision) {
                    // Don't place if there's a collision
                    console.warn('Cannot place accessory: collision detected');
                    return;
                }
                
                // Place accessory directly
                this.placeAccessoryAt(snapPos);
                
            } else if (this.placementType === 'board') {
                const intersection = this.sceneManager.getIntersectionWithPlane(event);
                if (!intersection) return;
                
                const snapPositions = this.multiPanelManager.getSnapPositions(this.pendingMetadata);
                const hasPanels = this.multiPanelManager.getAllPanels().length > 0;
                
                let bestPos = intersection.clone();
                let foundSnap = false;
                let minDistance = Infinity;
                
                for (const pos of snapPositions) {
                    const dist = intersection.distanceTo(pos);
                    if (dist < 0.5 && dist < minDistance) {
                        minDistance = dist;
                        bestPos = pos;
                        foundSnap = true;
                    }
                }
                
                // First board is placed at origin (0,0,0), subsequent boards need snap
                if (!hasPanels) {
                    bestPos = new THREE.Vector3(0, 0, 0);
                    this.placeBoardAt(bestPos);
                } else if (foundSnap) {
                    this.placeBoardAt(bestPos);
                }
            }
        } else {
            // Selection mode
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
     * Place a board at the specified position
     */
    private async placeBoardAt(position: THREE.Vector3): Promise<void> {
        if (!this.pendingProduct || !this.pendingMetadata) return;
        
        const productId = this.pendingProduct.id;
        const model = await this.modelLoader.loadModel(this.pendingProduct.glb_url);
        const scene = this.sceneManager.cloneWithUniqueMaterials(model.scene);
        scene.rotation.x = -Math.PI / 2;

        // Apply color: use selected color, or first available color variant, or default white
        const selectedColor = this.selectedColors.get(productId);
        const defaultColor = selectedColor || (this.pendingProduct.color_variants && this.pendingProduct.color_variants[0]) || '#ffffff';
        this.sceneManager.setObjectColor(scene, defaultColor);

        const panel = this.multiPanelManager.addPanel(scene, this.pendingMetadata, position, productId);
        this.sceneManager.addObject(panel.object);
        
        // Track the panel's color
        this.panelColors.set(panel.id, defaultColor);
        
        this.priceCalculator.addItem(productId, 1);

        const allPanels = this.multiPanelManager.getAllPanels().map(p => p.object);
        this.sceneManager.fitCameraToSelection(allPanels);

        this.updatePriceDisplay();
        this.cancelPlacement();
    }

    /**
     * Place an accessory at the specified position
     */
    private async placeAccessoryAt(position: THREE.Vector3): Promise<void> {
        if (!this.pendingProduct) return;
        
        const productId = this.pendingProduct.id;
        const model = await this.modelLoader.loadModel(this.pendingProduct.glb_url);
        const scene = this.sceneManager.cloneWithUniqueMaterials(model.scene);
        scene.position.copy(position);

        // Apply color: use selected color, or first available color variant, or default white
        const selectedColor = this.selectedColors.get(productId);
        const defaultColor = selectedColor || (this.pendingProduct.color_variants && this.pendingProduct.color_variants[0]) || '#ffffff';
        this.sceneManager.setObjectColor(scene, defaultColor);

        this.sceneManager.addObject(scene);

        const accessoryId = `acc_${this.nextAccessoryId++}`;
        const panel = this.multiPanelManager.getPanelAtPosition(position);
        const boundingBox = new THREE.Box3().setFromObject(scene);
        
        const placedAccessory: PlacedAccessory = {
            id: accessoryId,
            object: scene,
            productId: productId,
            panelId: panel ? panel.id : null,
            boundingBox: boundingBox,
            color: defaultColor
        };
        this.placedAccessories.set(accessoryId, placedAccessory);

        if (panel) {
            this.multiPanelManager.attachAccessoryToPanel(panel.id, accessoryId);
        }

        this.priceCalculator.addItem(productId, 1);
        this.updatePriceDisplay();
        this.cancelPlacement();
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
     * Convert touch event to mouse-like coordinates
     */
    private touchToMouseEvent(touch: Touch): MouseEvent {
        return {
            clientX: touch.clientX,
            clientY: touch.clientY,
            preventDefault: () => {},
            stopPropagation: () => {}
        } as unknown as MouseEvent;
    }

    /**
     * Track if we're in a touch-drag operation (to distinguish from camera rotation)
     */
    private touchStartedOnSelected: boolean = false;
    private touchStartTime: number = 0;
    private touchStartPos: { x: number; y: number } | null = null;

    /**
     * Handle touch start - check if touching selected object to start drag
     */
    private handleTouchStart(event: TouchEvent): void {
        if (event.touches.length !== 1) return; // Only handle single touch

        const touch = event.touches[0];
        const mouseEvent = this.touchToMouseEvent(touch);
        
        this.touchStartTime = Date.now();
        this.touchStartPos = { x: touch.clientX, y: touch.clientY };
        this.touchStartedOnSelected = false;

        // If placing, let the touch move handle ghost positioning
        if (this.isPlacingPanel) {
            event.preventDefault();
            this.handleMouseMove(mouseEvent);
            return;
        }

        // Check if touching the selected object
        if (this.selectedObject && this.selectedId) {
            const obj = this.sceneManager.getIntersectedObject(mouseEvent);
            if (obj) {
                let isSelectedObject = obj === this.selectedObject;
                if (!isSelectedObject) {
                    obj.traverseAncestors((ancestor) => {
                        if (ancestor === this.selectedObject) isSelectedObject = true;
                    });
                }

                if (isSelectedObject) {
                    // Mark that touch started on selected object
                    this.touchStartedOnSelected = true;
                    event.preventDefault(); // Prevent OrbitControls from taking over
                    
                    // Start dragging immediately
                    this.isDragging = true;
                    this.dragOriginalPosition = this.selectedObject.position.clone();

                    const intersection = this.sceneManager.getIntersectionWithPlane(mouseEvent);
                    if (intersection) {
                        this.dragStartPosition = intersection.clone();
                    }

                    const container = document.getElementById('pegboard-3d-container');
                    if (container) container.classList.add('dragging');

                    this.sceneManager.setControlsEnabled(false);
                    return;
                }
            }
        }

        // Not touching selected object - let OrbitControls handle it for camera rotation
    }

    /**
     * Handle touch move - drag object or update ghost position
     */
    private handleTouchMove(event: TouchEvent): void {
        if (event.touches.length !== 1) return;

        const touch = event.touches[0];
        const mouseEvent = this.touchToMouseEvent(touch);

        // If dragging, handle drag movement
        if (this.isDragging && this.touchStartedOnSelected) {
            event.preventDefault();
            this.handleDragMove(mouseEvent);
            return;
        }

        // If placing, update ghost position
        if (this.isPlacingPanel) {
            event.preventDefault();
            this.handleMouseMove(mouseEvent);
            return;
        }

        // Otherwise, let OrbitControls handle camera rotation
    }

    /**
     * Handle touch end - finish drag or handle tap for selection/placement
     */
    private handleTouchEnd(event: TouchEvent): void {
        const touchDuration = Date.now() - this.touchStartTime;
        const wasDragging = this.isDragging && this.touchStartedOnSelected;

        // If we were dragging, finish the drag
        if (wasDragging) {
            event.preventDefault();
            this.finishDrag();
            this.touchStartedOnSelected = false;
            this.touchStartPos = null;
            return;
        }

        // Check if this was a tap (short touch without much movement)
        if (event.changedTouches.length === 1 && this.touchStartPos) {
            const touch = event.changedTouches[0];
            const moveDistance = Math.sqrt(
                Math.pow(touch.clientX - this.touchStartPos.x, 2) +
                Math.pow(touch.clientY - this.touchStartPos.y, 2)
            );

            // If it was a quick tap with minimal movement, treat as click
            if (touchDuration < 300 && moveDistance < 10) {
                event.preventDefault();
                const mouseEvent = this.touchToMouseEvent(touch);
                this.handleClick(mouseEvent);
            }
        }

        this.touchStartedOnSelected = false;
        this.touchStartPos = null;
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
            // For panels, snap to valid positions and check for overlaps
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

            // Check if the position would cause an overlap with other panels
            const wouldOverlap = !this.multiPanelManager.isValidPositionExcluding(bestPos, panel.metadata, this.selectedId);
            
            // Update position
            this.selectedObject.position.copy(bestPos);

            // Visual feedback: valid only if snapped AND no overlap
            this.sceneManager.setDragValid(this.selectedObject, foundSnap && !wouldOverlap);

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
            if (!movedPanel) {
                this.cancelDrag();
                return;
            }
            
            const attachedAccessoryIds = [...movedPanel.attachedAccessories];
            
            // Check if the new position would cause an overlap
            const wouldOverlap = !this.multiPanelManager.isValidPositionExcluding(newPosition, movedPanel.metadata, this.selectedId);
            
            // If there are other panels and this position would overlap, cancel the drag
            const otherPanels = this.multiPanelManager.getAllPanels().filter(p => p.id !== this.selectedId);
            if (otherPanels.length > 0 && wouldOverlap) {
                this.cancelDrag();
                return;
            }
            
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

        // Show delete button
        const deleteBtn = document.getElementById('pegboard-delete-selected');
        if (deleteBtn) {
            deleteBtn.classList.remove('hidden');
        }

        // Update UI to show selection
        const selector = type === 'panel' ? `[data-panel-id="${id}"]` : `[data-accessory-id="${id}"]`;
        const itemEl = document.querySelector(selector);
        if (itemEl) {
            itemEl.classList.add('selected');
        }
        
        // Highlight the corresponding product button
        let productId: number | null = null;
        if (type === 'accessory') {
            const accessory = this.placedAccessories.get(id);
            if (accessory) {
                productId = accessory.productId;
                // Update color dot to show the selected accessory's color
                this.updateColorDotHighlight(productId, accessory.color);
            }
        } else if (type === 'panel') {
            const panel = this.multiPanelManager.getPanel(id);
            if (panel) {
                productId = panel.productId;
                // Update color dot to show the selected panel's color
                const panelColor = this.panelColors.get(id);
                if (panelColor) {
                    this.updateColorDotHighlight(productId, panelColor);
                }
            }
        }
        
        if (productId !== null) {
            this.highlightProductButton(productId, true);
        }
        
        // Show selection hint
        this.showContextHint('selection', '✋', `Glissez pour déplacer ou appuyez sur ✕ pour supprimer`);
    }

    /**
     * Deselect current object
     */
    private deselectObject(): void {
        if (this.selectedObject) {
            // Get the product ID before clearing selection to restore default color highlight
            let productId: number | null = null;
            if (this.selectedType === 'accessory' && this.selectedId) {
                const accessory = this.placedAccessories.get(this.selectedId);
                if (accessory) {
                    productId = accessory.productId;
                }
            } else if (this.selectedType === 'panel' && this.selectedId) {
                const panel = this.multiPanelManager.getPanel(this.selectedId);
                if (panel) {
                    productId = panel.productId;
                }
            }
            
            this.sceneManager.highlightObject(this.selectedObject, false);
            
            // Remove product button highlight (unless we're in placement mode for that product)
            if (productId !== null && this.activeProductId !== productId) {
                this.highlightProductButton(productId, false);
            }
            
            // Restore default color highlight for this product type
            if (productId !== null) {
                const defaultColor = this.selectedColors.get(productId);
                if (defaultColor) {
                    this.updateColorDotHighlight(productId, defaultColor);
                }
            }
            
            this.selectedObject = null;
            this.selectedType = null;
            this.selectedId = null;
            
            // Hide context hint
            this.hideContextHint();
        }
        // Hide delete button
        const deleteBtn = document.getElementById('pegboard-delete-selected');
        if (deleteBtn) {
            deleteBtn.classList.add('hidden');
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

        // Apply color: use selected color, or first available color variant, or default white
        const selectedColor = this.selectedColors.get(product.id);
        const defaultColor = selectedColor || (product.color_variants && product.color_variants[0]) || '#ffffff';
        
        if (defaultColor) {
            this.sceneManager.setObjectColor(scene, defaultColor);
            // Store as selected if not already set
            if (!selectedColor && product.color_variants && product.color_variants.length > 0) {
                this.selectedColors.set(product.id, defaultColor);
            }
        }

        // Always place first board at origin (0, 0, 0)
        const position = new THREE.Vector3(0, 0, 0);
        const panel = this.multiPanelManager.addPanel(scene, model.metadata as any, position, product.id);
        this.sceneManager.addObject(panel.object);
        
        // Track the panel's color
        this.panelColors.set(panel.id, defaultColor);
        
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
            priceEl.textContent = this.formatPrice(total);
        }

        // Update summary section with grouped items and colors
        this.updateSummarySection();
    }

    /**
     * Update summary section with grouped items and color dots
     */
    private updateSummarySection(): void {
        const summaryEl = document.getElementById('pegboard-summary');
        if (!summaryEl) return;

        // Group items by product ID and collect colors
        const groupedItems: Map<number, { 
            product: ProductData; 
            quantity: number; 
            colors: Set<string>;
            subtotal: number;
        }> = new Map();

        // Count panels
        const panels = this.multiPanelManager.getAllPanels();
        panels.forEach(panel => {
            const product = this.products.find(p => p.id === panel.productId);
            if (!product) return;

            const existing = groupedItems.get(panel.productId);
            const color = this.getObjectColor(panel.object);
            
            if (existing) {
                existing.quantity++;
                existing.subtotal += product.price ?? 0;
                if (color) existing.colors.add(color);
            } else {
                const colors = new Set<string>();
                if (color) colors.add(color);
                groupedItems.set(panel.productId, {
                    product,
                    quantity: 1,
                    colors,
                    subtotal: product.price ?? 0
                });
            }
        });

        // Count accessories
        this.placedAccessories.forEach(accessory => {
            const product = this.products.find(p => p.id === accessory.productId);
            if (!product) return;

            const existing = groupedItems.get(accessory.productId);
            const color = this.getObjectColor(accessory.object);
            
            if (existing) {
                existing.quantity++;
                existing.subtotal += product.price ?? 0;
                if (color) existing.colors.add(color);
            } else {
                const colors = new Set<string>();
                if (color) colors.add(color);
                groupedItems.set(accessory.productId, {
                    product,
                    quantity: 1,
                    colors,
                    subtotal: product.price ?? 0
                });
            }
        });

        // Build summary HTML
        if (groupedItems.size === 0) {
            summaryEl.innerHTML = '';
            return;
        }

        let html = '<div class="pegboard-section-title">Résumé</div>';
        
        groupedItems.forEach(item => {
            const colorDots = Array.from(item.colors)
                .map(color => `<span class="summary-color-dot" style="background-color: ${color};"></span>`)
                .join('');

            html += `
                <div class="pegboard-summary-item">
                    <span class="summary-quantity">${item.quantity}×</span>
                    <span class="summary-name">${item.product.name}</span>
                    <span class="summary-colors">${colorDots}</span>
                    <span class="summary-price">${this.formatPrice(item.subtotal)}</span>
                </div>
            `;
        });

        summaryEl.innerHTML = html;
    }

    /**
     * Get the current color of an object (from its material)
     */
    private getObjectColor(object: THREE.Object3D): string | null {
        let color: string | null = null;
        
        object.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material && !color) {
                const material = child.material as THREE.MeshStandardMaterial;
                if (material.color) {
                    color = '#' + material.color.getHexString();
                }
            }
        });
        
        return color;
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
     * Build cart items with variation IDs based on colors
     */
    private buildCartItems(): { productId: number; quantity: number; variationId?: number; variationAttributes?: { attribute: string; value: string }[] }[] {
        const items: { productId: number; quantity: number; variationId?: number; variationAttributes?: { attribute: string; value: string }[] }[] = [];
        
        // Add panels with their colors
        const panels = this.multiPanelManager.getAllPanels();
        panels.forEach(panel => {
            const product = this.products.find(p => p.id === panel.productId);
            const color = this.panelColors.get(panel.id);
            let variationId: number | undefined;
            let variationAttributes: { attribute: string; value: string }[] | undefined;
            
            if (product && color && product.color_variation_map) {
                // color_variation_map now contains { id, attributes } objects
                const variationData = product.color_variation_map[color] || product.color_variation_map[color.toLowerCase()];
                if (variationData) {
                    // Handle both old format (number) and new format ({ id, attributes })
                    if (typeof variationData === 'number') {
                        variationId = variationData;
                    } else {
                        variationId = variationData.id;
                        variationAttributes = variationData.attributes;
                    }
                }
                console.log('[buildCartItems] Panel color:', color, 'map:', product.color_variation_map, 'variationId:', variationId, 'attributes:', variationAttributes);
            }
            
            items.push({
                productId: panel.productId,
                quantity: 1,
                variationId,
                variationAttributes
            });
        });
        
        // Add accessories with their colors
        this.placedAccessories.forEach(accessory => {
            const product = this.products.find(p => p.id === accessory.productId);
            let variationId: number | undefined;
            let variationAttributes: { attribute: string; value: string }[] | undefined;
            
            if (product && accessory.color && product.color_variation_map) {
                // color_variation_map now contains { id, attributes } objects
                const variationData = product.color_variation_map[accessory.color] || product.color_variation_map[accessory.color.toLowerCase()];
                if (variationData) {
                    // Handle both old format (number) and new format ({ id, attributes })
                    if (typeof variationData === 'number') {
                        variationId = variationData;
                    } else {
                        variationId = variationData.id;
                        variationAttributes = variationData.attributes;
                    }
                }
                console.log('[buildCartItems] Accessory color:', accessory.color, 'map:', product.color_variation_map, 'variationId:', variationId, 'attributes:', variationAttributes);
            }
            
            items.push({
                productId: accessory.productId,
                quantity: 1,
                variationId,
                variationAttributes
            });
        });
        
        console.log('[buildCartItems] Final items:', items);
        return items;
    }

    /**
     * Handle add to cart
     */
    private async handleAddToCart(): Promise<void> {
        const items = this.buildCartItems();
        console.log('[handleAddToCart] Items to add:', items);

        if (items.length === 0) {
            alert('Veuillez ajouter des éléments à votre configuration');
            return;
        }

        await this.cartIntegration.addToCart(items);
    }
    
    // Context hint timeout reference
    private contextHintTimeout: number | null = null;
    
    /**
     * Show a contextual hint popup
     * @param type - 'placement' or 'selection' for styling
     * @param icon - Emoji/icon to display
     * @param text - Hint message
     * @param duration - Auto-hide duration in ms (0 = no auto-hide)
     */
    private showContextHint(type: 'placement' | 'selection', icon: string, text: string, duration: number = 4000): void {
        const hintEl = document.getElementById('pegboard-context-hint');
        if (!hintEl) return;
        
        // Clear any existing timeout
        if (this.contextHintTimeout) {
            clearTimeout(this.contextHintTimeout);
            this.contextHintTimeout = null;
        }
        
        // Update content
        const iconEl = hintEl.querySelector('.hint-icon');
        const textEl = hintEl.querySelector('.hint-text');
        if (iconEl) iconEl.textContent = icon;
        if (textEl) textEl.textContent = text;
        
        // Update styling
        hintEl.classList.remove('hint-placement', 'hint-selection');
        hintEl.classList.add(`hint-${type}`);
        
        // Show hint
        hintEl.classList.remove('hidden');
        // Force reflow for animation
        void hintEl.offsetWidth;
        hintEl.classList.add('visible');
        
        // Auto-hide after duration
        if (duration > 0) {
            this.contextHintTimeout = window.setTimeout(() => {
                this.hideContextHint();
            }, duration);
        }
    }
    
    /**
     * Hide the contextual hint popup
     */
    private hideContextHint(): void {
        const hintEl = document.getElementById('pegboard-context-hint');
        if (!hintEl) return;
        
        // Clear any existing timeout
        if (this.contextHintTimeout) {
            clearTimeout(this.contextHintTimeout);
            this.contextHintTimeout = null;
        }
        
        hintEl.classList.remove('visible');
        // Hide completely after animation
        setTimeout(() => {
            if (!hintEl.classList.contains('visible')) {
                hintEl.classList.add('hidden');
            }
        }, 300);
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
