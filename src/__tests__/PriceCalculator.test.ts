import { describe, it, expect, beforeEach } from 'vitest';
import { PriceCalculator } from '../PriceCalculator';

describe('PriceCalculator', () => {
    let calculator: PriceCalculator;

    beforeEach(() => {
        calculator = new PriceCalculator();

        // Set up some product data
        calculator.setProductData([
            { id: 1, name: 'Pegboard 36x56', type: 'pegboard', glb_url: '', price: 29.99 },
            { id: 2, name: 'Hook', type: 'accessory', glb_url: '', price: 4.99 },
            { id: 3, name: 'Shelf', type: 'accessory', glb_url: '', price: 12.99 }
        ]);
    });

    it('should calculate total price correctly', () => {
        calculator.addItem(1); // Pegboard: 29.99
        calculator.addItem(2); // Hook: 4.99
        calculator.addItem(2); // Hook: 4.99 (x2)

        const total = calculator.getTotal();
        expect(total).toBeCloseTo(39.97, 2); // 29.99 + 4.99 + 4.99
    });

    it('should handle item removal', () => {
        calculator.addItem(2); // Hook: 4.99
        calculator.addItem(2); // Hook: 4.99 (x2)

        expect(calculator.getTotal()).toBeCloseTo(9.98, 2);

        calculator.removeItem(2);
        expect(calculator.getTotal()).toBeCloseTo(4.99, 2);

        calculator.removeItem(2);
        expect(calculator.getTotal()).toBe(0);
    });

    it('should track quantities correctly', () => {
        calculator.addItem(1);
        calculator.addItem(2);
        calculator.addItem(2);
        calculator.addItem(2);

        const items = calculator.getSceneItems();

        const pegboard = items.find(i => i.productId === 1);
        const hook = items.find(i => i.productId === 2);

        expect(pegboard?.quantity).toBe(1);
        expect(hook?.quantity).toBe(3);
    });

    it('should provide itemized list', () => {
        calculator.addItem(1);
        calculator.addItem(2);
        calculator.addItem(2);

        const list = calculator.getItemizedList();

        expect(list.length).toBe(2);
        expect(list[0].name).toBe('Pegboard 36x56');
        expect(list[0].subtotal).toBeCloseTo(29.99, 2);
        expect(list[1].subtotal).toBeCloseTo(9.98, 2);
    });

    it('should count total items', () => {
        calculator.addItem(1);
        calculator.addItem(2);
        calculator.addItem(2);

        expect(calculator.getItemCount()).toBe(3);
    });

    it('should clear all items', () => {
        calculator.addItem(1);
        calculator.addItem(2);

        calculator.clear();

        expect(calculator.getTotal()).toBe(0);
        expect(calculator.getItemCount()).toBe(0);
    });
});
