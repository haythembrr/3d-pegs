import type { SceneItem } from './PriceCalculator';

/**
 * Cart response from WooCommerce
 */
export interface CartResponse {
    success: boolean;
    message?: string;
    cartUrl?: string;
}

/**
 * CartIntegration handles adding items to WooCommerce cart
 */
export class CartIntegration {
    private apiUrl: string;
    private isLoading: boolean = false;
    private nonce: string;
    private cartPageUrl: string;

    constructor(apiUrl: string = '/wp-json/wc/store/v1/cart/add-item', nonce: string = '', cartPageUrl: string = '/cart') {
        this.apiUrl = apiUrl;
        this.cartPageUrl = cartPageUrl;
        // Get nonce from WooCommerce Store API or fallback
        this.nonce = nonce || this.getStoreApiNonce();
    }

    /**
     * Get the WooCommerce Store API nonce from various sources
     */
    private getStoreApiNonce(): string {
        // Try wcSettings (WooCommerce Blocks)
        if (typeof (window as any).wcSettings !== 'undefined') {
            const wcSettings = (window as any).wcSettings;
            if (wcSettings.storeApiNonce) {
                return wcSettings.storeApiNonce;
            }
            if (wcSettings.nonce) {
                return wcSettings.nonce;
            }
        }
        
        // Try wcStoreApiNonce (older WooCommerce versions)
        if (typeof (window as any).wcStoreApiNonce !== 'undefined') {
            return (window as any).wcStoreApiNonce;
        }
        
        // Try wp.apiFetch nonce
        if (typeof (window as any).wp !== 'undefined' && (window as any).wp.apiFetch) {
            const apiFetch = (window as any).wp.apiFetch;
            if (apiFetch.nonceMiddleware && apiFetch.nonceMiddleware.nonce) {
                return apiFetch.nonceMiddleware.nonce;
            }
        }
        
        return '';
    }

    /**
     * Add all items to cart
     */
    public async addToCart(items: SceneItem[]): Promise<CartResponse> {
        if (this.isLoading) {
            return {
                success: false,
                message: 'Une opération est déjà en cours'
            };
        }

        if (items.length === 0) {
            return {
                success: false,
                message: 'Aucun article à ajouter'
            };
        }

        this.showLoadingState();

        try {
            // Group items by productId to reduce API calls
            const groupedItems = this.groupItemsByProduct(items);
            
            console.log('[addToCart] Adding items sequentially:', groupedItems);
            
            // Add items sequentially to avoid race conditions with WooCommerce cart
            const errors: string[] = [];
            let successCount = 0;
            
            for (const item of groupedItems) {
                try {
                    await this.addSingleItem(item);
                    successCount++;
                    console.log('[addToCart] Successfully added item:', item);
                } catch (error) {
                    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
                    console.error('[addToCart] Failed to add item:', item, errorMsg);
                    errors.push(`Product ${item.productId}: ${errorMsg}`);
                }
            }

            this.hideLoadingState();
            
            if (successCount === 0) {
                // All items failed
                return this.handleError(new Error(errors.join('; ')));
            } else if (errors.length > 0) {
                // Some items failed - still redirect but log warnings
                console.warn('[addToCart] Some items failed:', errors);
                return this.handleSuccess();
            } else {
                // All items succeeded
                return this.handleSuccess();
            }
        } catch (error) {
            this.hideLoadingState();
            return this.handleError(error as Error);
        }
    }

    /**
     * Group items by product ID to reduce API calls
     */
    private groupItemsByProduct(items: SceneItem[]): SceneItem[] {
        const grouped = new Map<string, SceneItem>();
        
        for (const item of items) {
            // Include variation attributes in the key to properly group items with same variation
            const attrKey = item.variationAttributes 
                ? JSON.stringify(item.variationAttributes.sort((a, b) => a.attribute.localeCompare(b.attribute)))
                : '';
            const key = `${item.productId}-${item.variationId || 0}-${attrKey}`;
            const existing = grouped.get(key);
            
            if (existing) {
                existing.quantity += item.quantity;
            } else {
                grouped.set(key, { ...item });
            }
        }
        
        return Array.from(grouped.values());
    }

    /**
     * Add a single item to cart
     */
    private async addSingleItem(item: SceneItem): Promise<void> {
        // For variable products with a variation, use the variation ID as the main ID
        // The WooCommerce Store API expects the variation ID, not the parent product ID
        const productId = item.variationId || item.productId;
        
        console.log('[addSingleItem] Adding item:', { 
            originalProductId: item.productId, 
            variationId: item.variationId, 
            variationAttributes: item.variationAttributes,
            usingId: productId, 
            quantity: item.quantity 
        });
        
        const body: Record<string, unknown> = {
            id: productId,
            quantity: item.quantity
        };

        // Add variation attributes if this is a variable product
        // WooCommerce Store API requires these for variable products
        if (item.variationId && item.variationAttributes && item.variationAttributes.length > 0) {
            body.variation = item.variationAttributes;
        }

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        // Add nonce header if available (required for Store API)
        if (this.nonce) {
            headers['Nonce'] = this.nonce;
            headers['X-WC-Store-API-Nonce'] = this.nonce;
        }

        console.log('[addSingleItem] Request body:', body);

        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers,
            credentials: 'same-origin', // Include cookies for session
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('[addSingleItem] Error response:', errorData);
            const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
            throw new Error(errorMessage);
        }
    }

    /**
     * Show loading state
     */
    public showLoadingState(): void {
        this.isLoading = true;
        const button = document.querySelector<HTMLButtonElement>('#pegboard-add-to-cart');
        if (button) {
            button.disabled = true;
            button.textContent = 'Ajout en cours...';
        }

        // Show spinner
        const spinner = document.querySelector('#pegboard-cart-spinner');
        if (spinner) {
            spinner.classList.remove('hidden');
        }
    }

    /**
     * Hide loading state
     */
    public hideLoadingState(): void {
        this.isLoading = false;
        const button = document.querySelector<HTMLButtonElement>('#pegboard-add-to-cart');
        if (button) {
            button.disabled = false;
            button.textContent = 'Ajouter au panier';
        }

        // Hide spinner
        const spinner = document.querySelector('#pegboard-cart-spinner');
        if (spinner) {
            spinner.classList.add('hidden');
        }
    }

    /**
     * Handle success response
     */
    public handleSuccess(): CartResponse {
        // Update mini-cart if available
        if (typeof (window as any).wc_fragments !== 'undefined') {
            document.body.dispatchEvent(new Event('wc_fragment_refresh'));
        }

        // Show success message and redirect immediately
        this.showMessage('Configuration ajoutée au panier !', 'success');

        // Redirect to cart page immediately
        window.location.href = this.cartPageUrl;

        return {
            success: true,
            message: 'Articles ajoutés au panier avec succès',
            cartUrl: this.cartPageUrl
        };
    }

    /**
     * Handle error
     */
    public handleError(error: Error): CartResponse {
        console.error('Cart error:', error);

        this.showMessage(
            'Erreur lors de l\'ajout au panier. Veuillez réessayer.',
            'error'
        );

        return {
            success: false,
            message: error.message
        };
    }

    /**
     * Show message to user
     */
    private showMessage(message: string, type: 'success' | 'error'): void {
        const container = document.querySelector('#pegboard-messages');
        if (!container) return;

        const messageEl = document.createElement('div');
        messageEl.className = `pegboard-message pegboard-message-${type}`;
        messageEl.textContent = message;

        container.appendChild(messageEl);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }

    /**
     * Check if currently loading
     */
    public isProcessing(): boolean {
        return this.isLoading;
    }
}
