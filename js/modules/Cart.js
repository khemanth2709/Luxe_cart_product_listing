/**
 * Cart Management Module
 * Handles all cart operations
 */

class CartManager {
    /**
     * @param {Array} initialCart - Initial cart items
     */
    constructor(initialCart = []) {
        this.items = initialCart;
        this.onCartChange = null; // Callback function
    }

    /**
     * Add product to cart
     * @param {number} productId - Product ID
     * @param {number} quantity - Quantity to add
     * @returns {Object} Result object with success and message
     */
    addItem(productId, quantity = 1) {
        const product = getProductById(productId);
        if (!product) {
            return { success: false, message: 'Product not found' };
        }

        const existingItem = this.items.find(item => item.id === productId);
        const maxQuantity = product.stockQuantity || 10;

        if (existingItem) {
            if (existingItem.quantity + quantity > maxQuantity) {
                return { success: false, message: `Only ${maxQuantity} units available` };
            }
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }

        this._notifyChange();
        return { success: true, message: 'Added to cart' };
    }

    /**
     * Remove product from cart
     * @param {number} productId - Product ID
     */
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this._notifyChange();
    }

    /**
     * Update item quantity
     * @param {number} productId - Product ID
     * @param {number} newQuantity - New quantity
     * @returns {boolean} Success status
     */
    updateQuantity(productId, newQuantity) {
        const product = getProductById(productId);
        const maxQuantity = product?.stockQuantity || 10;
        const item = this.items.find(i => i.id === productId);

        if (!item) return false;

        if (newQuantity < 1) {
            this.removeItem(productId);
            return true;
        }

        if (newQuantity > maxQuantity) {
            return false;
        }

        item.quantity = newQuantity;
        this._notifyChange();
        return true;
    }

    /**
     * Clear entire cart
     */
    clear() {
        this.items = [];
        this._notifyChange();
    }

    /**
     * Get cart summary
     * @returns {Object} Cart summary with counts and totals
     */
    getSummary() {
        const itemCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totals = calculateTotals(subtotal);

        return {
            itemCount,
            uniqueItems: this.items.length,
            ...totals
        };
    }

    /**
     * Check if product is in cart
     * @param {number} productId - Product ID
     * @returns {boolean} True if in cart
     */
    hasItem(productId) {
        return this.items.some(item => item.id === productId);
    }

    /**
     * Get cart item count
     * @returns {number} Total items (by quantity)
     */
    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    /**
     * Notify subscribers of cart changes
     * @private
     */
    _notifyChange() {
        if (this.onCartChange) {
            this.onCartChange(this.items);
        }
    }
}