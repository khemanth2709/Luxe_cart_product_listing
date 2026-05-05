/**
 * LocalStorage Management Module
 * Handles all localStorage operations
 */

class StorageManager {
    /**
     * Save data to localStorage
     * @param {string} key - Storage key
     * @param {*} data - Data to save
     */
    static save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error(`Error saving to localStorage: ${key}`, error);
        }
    }

    /**
     * Load data from localStorage
     * @param {string} key - Storage key
     * @returns {*} Retrieved data or null
     */
    static load(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error(`Error loading from localStorage: ${key}`, error);
            return null;
        }
    }

    /**
     * Remove data from localStorage
     * @param {string} key - Storage key
     */
    static remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing from localStorage: ${key}`, error);
        }
    }

    /**
     * Clear all application data from localStorage
     */
    static clear() {
        try {
            Object.values(CONFIG.STORAGE_KEYS).forEach(key => {
                localStorage.removeItem(key);
            });
        } catch (error) {
            console.error('Error clearing localStorage', error);
        }
    }

    /**
     * Load cart from storage
     * @returns {Array} Cart items
     */
    static getCart() {
        return this.load(CONFIG.STORAGE_KEYS.CART) || [];
    }

    /**
     * Save cart to storage
     * @param {Array} cart - Cart items
     */
    static saveCart(cart) {
        this.save(CONFIG.STORAGE_KEYS.CART, cart);
    }

    /**
     * Load wishlist from storage
     * @returns {Array} Wishlist item IDs
     */
    static getWishlist() {
        return this.load(CONFIG.STORAGE_KEYS.WISHLIST) || [];
    }

    /**
     * Save wishlist to storage
     * @param {Array} wishlist - Wishlist item IDs
     */
    static saveWishlist(wishlist) {
        this.save(CONFIG.STORAGE_KEYS.WISHLIST, wishlist);
    }

    /**
     * Load orders from storage
     * @returns {Array} Orders
     */
    static getOrders() {
        return this.load(CONFIG.STORAGE_KEYS.ORDERS) || [];
    }

    /**
     * Save orders to storage
     * @param {Array} orders - Orders
     */
    static saveOrders(orders) {
        this.save(CONFIG.STORAGE_KEYS.ORDERS, orders);
    }
}

// Freeze class to prevent modification
Object.freeze(StorageManager);