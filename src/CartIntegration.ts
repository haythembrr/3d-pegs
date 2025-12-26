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
 * Debug logger for cart operations
 */
class CartLogger {
    private static enabled: boolean = true;
    private static prefix: string = '[Pegboard3D Cart]';

    static log(message: string, data?: unknown): void {
        if (this.enabled) {
            if (data !== undefined) {
                console.log(`${this.prefix} ${message}`, data);
            } else {
                console.log(`${this.prefix} ${message}`);
            }
        }
    }

    static warn(message: string, data?: unknown): void {
        if (this.enabled) {
            if (data !== undefined) {
                console.warn(`${this.prefix} ${message}`, data);
            } else {
                console.warn(`${this.prefix} ${message}`);
            }
        }
    }

    static error(message: string, data?: unknown): void {
        if (data !== undefined) {
            console.error(`${this.prefix} ${message}`, data);
        } else {
            console.error(`${this.prefix} ${message}`);
        }
    }
}

/**
 * CartIntegration handles adding items to WooCommerce cart
 * Uses custom AJAX endpoint for maximum compatibility
 */
export class CartIntegration {
    private cartPageUrl: string;
    private isLoading: boolean = false;
    private ajaxUrl: string;
    private retryCount: number = 2;
    private retryDelay: number = 300;

    constructor(
        _apiUrl: string = '',
        _nonce: string = '',
        cartPageUrl: string = '/cart'
    ) {
        this.cartPageUrl = cartPageUrl;
        this.ajaxUrl = this.getAjaxUrl();

        CartLogger.log('CartIntegration initialized', {
            cartPageUrl: this.cartPageUrl,
            ajaxUrl: this.ajaxUrl
        });
    }

    /**
     * Get WordPress AJAX URL
     */
    private getAjaxUrl(): string {
        // Try multiple sources for AJAX URL
        const win = window as any;
        
        // From our plugin config
        if (win.Pegboard3DConfig?.ajaxUrl) {
            return win.Pegboard3DConfig.ajaxUrl;
        }
        
        // From WooCommerce params
        if (win.wc_add_to_cart_params?.ajax_url) {
            return win.wc_add_to_cart_params.ajax_url;
        }
        
        if (win.woocommerce_params?.ajax_url) {
            return win.woocommerce_params.ajax_url;
        }
        
        // WordPress global
        if (win.ajaxurl) {
            return win.ajaxurl;
        }
        
        // Construct from current URL
        return `${window.location.origin}/wp-admin/admin-ajax.php`;
    }

    /**
     * Add all items to cart
     */
    public async addToCart(items: SceneItem[]): Promise<CartResponse> {
        CartLogger.log('addToCart called', { itemCount: items.length });

        if (this.isLoading) {
            return { success: false, message: 'Une opération est déjà en cours' };
        }

        if (items.length === 0) {
            return { success: false, message: 'Aucun article à ajouter' };
        }

        this.showLoadingState();

        try {
            const groupedItems = this.groupItemsByProduct(items);
            CartLogger.log('Items grouped', {
                originalCount: items.length,
                groupedCount: groupedItems.length,
                items: groupedItems.map(i => ({
                    productId: i.productId,
                    variationId: i.variationId,
                    quantity: i.quantity
                }))
            });

            const errors: string[] = [];
            let successCount = 0;

            for (let i = 0; i < groupedItems.length; i++) {
                const item = groupedItems[i];
                let lastError: Error | null = null;
                let success = false;

                CartLogger.log(`Processing item ${i + 1}/${groupedItems.length}`, {
                    productId: item.productId,
                    variationId: item.variationId,
                    quantity: item.quantity
                });

                for (let attempt = 0; attempt <= this.retryCount && !success; attempt++) {
                    try {
                        if (i > 0 || attempt > 0) {
                            await this.delay(attempt > 0 ? this.retryDelay * (attempt + 1) : 150);
                        }

                        if (attempt > 0) {
                            CartLogger.log(`Retry attempt ${attempt} for item ${i + 1}`);
                        }

                        await this.addSingleItem(item);
                        success = true;
                        successCount++;
                        CartLogger.log(`Item ${i + 1} added successfully`);
                    } catch (error) {
                        lastError = error instanceof Error ? error : new Error('Unknown error');
                        CartLogger.warn(`Item ${i + 1} attempt ${attempt + 1} failed`, lastError.message);
                    }
                }

                if (!success && lastError) {
                    errors.push(`Product ${item.variationId || item.productId}: ${lastError.message}`);
                    CartLogger.error(`Item ${i + 1} failed after all retries`, lastError.message);
                }
            }

            this.hideLoadingState();
            CartLogger.log('addToCart completed', { successCount, errorCount: errors.length });

            if (successCount === 0) {
                return this.handleError(new Error(errors.join('; ')));
            }
            return this.handleSuccess();
        } catch (error) {
            this.hideLoadingState();
            CartLogger.error('addToCart unexpected error', error);
            return this.handleError(error as Error);
        }
    }

    /**
     * Add single item using our custom AJAX endpoint
     */
    private async addSingleItem(item: SceneItem): Promise<void> {
        const formData = new FormData();
        formData.append('action', 'pegboard_add_to_cart');
        formData.append('product_id', String(item.productId));
        formData.append('quantity', String(item.quantity));

        if (item.variationId && item.variationId > 0) {
            formData.append('variation_id', String(item.variationId));

            if (item.variationAttributes && item.variationAttributes.length > 0) {
                for (const attr of item.variationAttributes) {
                    const attrName = attr.attribute.startsWith('attribute_')
                        ? attr.attribute
                        : `attribute_${attr.attribute}`;
                    formData.append(attrName, attr.value);
                }
            }
        }

        CartLogger.log('Sending AJAX request', {
            url: this.ajaxUrl,
            action: 'pegboard_add_to_cart',
            productId: item.productId,
            variationId: item.variationId,
            quantity: item.quantity,
            attributes: item.variationAttributes
        });

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        try {
            const response = await fetch(this.ajaxUrl, {
                method: 'POST',
                body: formData,
                credentials: 'same-origin',
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            CartLogger.log('Response received', { status: response.status, ok: response.ok });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();
            CartLogger.log('Response data', data);

            if (!data.success) {
                const errorMsg = data.data?.message || 'Failed to add to cart';
                throw new Error(errorMsg);
            }
        } catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    throw new Error('Request timeout');
                }
                throw error;
            }
            throw new Error('Unknown error');
        }
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private groupItemsByProduct(items: SceneItem[]): SceneItem[] {
        const grouped = new Map<string, SceneItem>();

        for (const item of items) {
            const variationKey = item.variationId ? String(item.variationId) : '0';
            const attrKey = item.variationAttributes
                ? JSON.stringify([...item.variationAttributes].sort((a, b) => a.attribute.localeCompare(b.attribute)))
                : '';
            const key = `${item.productId}-${variationKey}-${attrKey}`;
            const existing = grouped.get(key);

            if (existing) {
                existing.quantity += item.quantity;
            } else {
                grouped.set(key, {
                    ...item,
                    variationAttributes: item.variationAttributes ? [...item.variationAttributes] : undefined
                });
            }
        }

        return Array.from(grouped.values());
    }

    public showLoadingState(): void {
        this.isLoading = true;
        const button = document.querySelector<HTMLButtonElement>('#pegboard-add-to-cart');
        if (button) {
            button.disabled = true;
            button.textContent = 'Ajout en cours...';
        }
        const spinner = document.querySelector('#pegboard-cart-spinner');
        if (spinner) spinner.classList.remove('hidden');
    }

    public hideLoadingState(): void {
        this.isLoading = false;
        const button = document.querySelector<HTMLButtonElement>('#pegboard-add-to-cart');
        if (button) {
            button.disabled = false;
            button.textContent = 'Ajouter au panier';
        }
        const spinner = document.querySelector('#pegboard-cart-spinner');
        if (spinner) spinner.classList.add('hidden');
    }

    public handleSuccess(): CartResponse {
        // Show success message first
        this.showMessage('Configuration ajoutée au panier !', 'success');
        
        // Try to trigger WooCommerce events (wrapped in try-catch to prevent third-party plugin errors from blocking redirect)
        try {
            const win = window as any;
            if (win.jQuery) {
                // Use setTimeout to make these non-blocking
                setTimeout(() => {
                    try {
                        win.jQuery(document.body).trigger('wc_fragment_refresh');
                    } catch (e) {
                        CartLogger.warn('wc_fragment_refresh trigger failed', e);
                    }
                }, 0);
                
                setTimeout(() => {
                    try {
                        win.jQuery(document.body).trigger('added_to_cart');
                    } catch (e) {
                        CartLogger.warn('added_to_cart trigger failed', e);
                    }
                }, 0);
            }
        } catch (e) {
            // Ignore errors from third-party plugins listening to these events
            CartLogger.warn('jQuery event trigger failed', e);
        }

        // Redirect to cart page - this is the important part
        CartLogger.log('Redirecting to cart', { url: this.cartPageUrl });
        setTimeout(() => {
            window.location.href = this.cartPageUrl;
        }, 300);

        return { success: true, message: 'Articles ajoutés au panier', cartUrl: this.cartPageUrl };
    }

    public handleError(error: Error): CartResponse {
        this.showMessage('Erreur lors de l\'ajout au panier. Veuillez réessayer.', 'error');
        return { success: false, message: error.message };
    }

    private showMessage(message: string, type: 'success' | 'error'): void {
        const container = document.querySelector('#pegboard-messages');
        if (!container) return;

        const messageEl = document.createElement('div');
        messageEl.className = `pegboard-message pegboard-message-${type}`;
        messageEl.textContent = message;
        container.appendChild(messageEl);

        setTimeout(() => messageEl.remove(), 5000);
    }

    public isProcessing(): boolean {
        return this.isLoading;
    }
}
