import type { ProductData } from './types';

/**
 * Scene item for price calculation
 */
export interface SceneItem {
    productId: number;
    quantity: number;
    variationId?: number;
}

/**
 * Price item with details
 */
export interface PriceItem {
    productId: number;
    name: string;
    unitPrice: number;
    quantity: number;
    subtotal: number;
}

/**
 * PriceCalculator manages real-time price calculations
 */
export class PriceCalculator {
    private items: Map<number, SceneItem>;
    private productPrices: Map<number, number>;
    private productNames: Map<number, string>;
    private debounceTimer: number | null = null;

    constructor() {
        this.items = new Map();
        this.productPrices = new Map();
        this.productNames = new Map();
    }

    /**
     * Set product data (prices and names)
     */
    public setProductData(products: ProductData[]): void {
        products.forEach(product => {
            this.productPrices.set(product.id, product.price || 0);
            this.productNames.set(product.id, product.name);
        });
    }

    /**
     * Add an item
     */
    public addItem(productId: number, variationId?: number): void {
        const key = productId;
        const existing = this.items.get(key);

        if (existing) {
            existing.quantity += 1;
        } else {
            this.items.set(key, {
                productId,
                quantity: 1,
                variationId
            });
        }
    }

    /**
     * Remove an item
     */
    public removeItem(productId: number): boolean {
        const key = productId;
        const existing = this.items.get(key);

        if (!existing) {
            return false;
        }

        if (existing.quantity > 1) {
            existing.quantity -= 1;
        } else {
            this.items.delete(key);
        }

        return true;
    }

    /**
     * Get total price
     */
    public getTotal(): number {
        let total = 0;

        this.items.forEach(item => {
            const price = this.productPrices.get(item.productId) || 0;
            total += price * item.quantity;
        });

        return total;
    }

    /**
     * Get itemized list
     */
    public getItemizedList(): PriceItem[] {
        const list: PriceItem[] = [];

        this.items.forEach(item => {
            const unitPrice = this.productPrices.get(item.productId) || 0;
            const name = this.productNames.get(item.productId) || `Product ${item.productId}`;

            list.push({
                productId: item.productId,
                name,
                unitPrice,
                quantity: item.quantity,
                subtotal: unitPrice * item.quantity
            });
        });

        return list;
    }

    /**
     * Update price with debounce
     */
    public updatePrice(callback: () => void, delay: number = 100): void {
        if (this.debounceTimer !== null) {
            clearTimeout(this.debounceTimer);
        }

        this.debounceTimer = window.setTimeout(() => {
            callback();
            this.debounceTimer = null;
        }, delay);
    }

    /**
     * Get all scene items
     */
    public getSceneItems(): SceneItem[] {
        return Array.from(this.items.values());
    }

    /**
     * Clear all items
     */
    public clear(): void {
        this.items.clear();
    }

    /**
     * Get item count
     */
    public getItemCount(): number {
        let count = 0;
        this.items.forEach(item => {
            count += item.quantity;
        });
        return count;
    }
}
