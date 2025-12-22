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

    constructor(apiUrl: string = '/wp-json/wc/store/v1/cart/add-item') {
        this.apiUrl = apiUrl;
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

        this.showLoadingState();

        try {
            // Add items one by one (WooCommerce Store API limitation)
            for (const item of items) {
                await this.addSingleItem(item);
            }

            this.hideLoadingState();
            return this.handleSuccess();
        } catch (error) {
            this.hideLoadingState();
            return this.handleError(error as Error);
        }
    }

    /**
     * Add a single item to cart
     */
    private async addSingleItem(item: SceneItem): Promise<void> {
        const body: any = {
            id: item.productId,
            quantity: item.quantity
        };

        if (item.variationId) {
            body.variation = [{
                attribute: '',
                value: item.variationId
            }];
        }

        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
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
            // Trigger WooCommerce fragments refresh
            document.body.dispatchEvent(new Event('wc_fragment_refresh'));
        }

        // Show success message
        this.showMessage('Configuration ajoutée au panier !', 'success');

        return {
            success: true,
            message: 'Articles ajoutés au panier avec succès',
            cartUrl: '/panier' // Can be configured
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
