/**
 * Wishlist Management Module
 * Handles all wishlist operations
 */

class WishlistManager {
    /**
     * @param {Array} initialWishlist - Initial wishlist items (product IDs)
     */
    constructor(initialWishlist = []) {
        this.items = initialWishlist;
        this.onWishlistChange = null; // Callback function
    }

    /**
     * Add product to wishlist
     * @param {number} productId - Product ID
     * @returns {boolean} Success status
     */
    addItem(productId) {
        const product = getProductById(productId);
        if (!product) return false;

        if (!this.items.includes(productId)) {
            this.items.push(productId);
            this._notifyChange();
            return true;
        }
        return false;
    }

    /**
     * Remove product from wishlist
     * @param {number} productId - Product ID
     * @returns {boolean} Success status
     */
    removeItem(productId) {
        const index = this.items.indexOf(productId);
        if (index !== -1) {
            this.items.splice(index, 1);
            this._notifyChange();
            return true;
        }
        return false;
    }

    /**
     * Toggle product in wishlist
     * @param {number} productId - Product ID
     * @returns {boolean} True if added, false if removed
     */
    toggleItem(productId) {
        if (this.hasItem(productId)) {
            this.removeItem(productId);
            return false;
        } else {
            this.addItem(productId);
            return true;
        }
    }

    /**
     * Check if product is in wishlist
     * @param {number} productId - Product ID
     * @returns {boolean} True if in wishlist
     */
    hasItem(productId) {
        return this.items.includes(productId);
    }

    /**
     * Get all wishlist products
     * @returns {Array} Array of product objects
     */
    getProducts() {
        return this.items
            .map(id => getProductById(id))
            .filter(product => product !== undefined);
    }

    /**
     * Clear entire wishlist
     */
    clear() {
        this.items = [];
        this._notifyChange();
    }

    /**
     * Get wishlist item count
     * @returns {number} Number of items
     */
    getItemCount() {
        return this.items.length;
    }

    /**
     * Notify subscribers of wishlist changes
     * @private
     */
    _notifyChange() {
        if (this.onWishlistChange) {
            this.onWishlistChange(this.items);
        }
    }
}