/**
 * Helper Utilities
 * General purpose helper functions
 */

/**
 * Debounce a function
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, delay = CONFIG.DEBOUNCE_DELAY) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Deep clone an object
 * @param {Object} obj - Object to clone
 * @returns {Object} Cloned object
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Get product by ID
 * @param {number} productId - Product ID to find
 * @returns {Object|undefined} Product object or undefined
 */
function getProductById(productId) {
    return PRODUCTS.find(p => p.id === productId);
}

/**
 * Generate unique order ID
 * @returns {string} Unique order ID
 */
function generateOrderId() {
    return `LC-${Date.now().toString().slice(-6)}`;
}

/**
 * Calculate totals (subtotal, tax, total)
 * @param {number} subtotal - Subtotal amount
 * @returns {Object} Object with subtotal, tax, shipping, and total
 */
function calculateTotals(subtotal) {
    const tax = subtotal * CONFIG.TAX_RATE;
    const shipping = CONFIG.SHIPPING_COST;
    const total = subtotal + tax + shipping;

    return {
        subtotal,
        tax,
        shipping,
        total
    };
}

/**
 * Check if a value exists in an array
 * @param {*} value - Value to check
 * @param {Array} array - Array to check in
 * @returns {boolean} True if value exists in array
 */
function includes(value, array) {
    return array.includes(value);
}

/**
 * Remove item from array by value
 * @param {*} value - Value to remove
 * @param {Array} array - Array to modify
 * @returns {Array} Modified array
 */
function removeFromArray(value, array) {
    return array.filter(item => item !== value);
}

/**
 * Get unique values from array
 * @param {Array} array - Array to filter
 * @returns {Array} Array with unique values
 */
function getUnique(array) {
    return [...new Set(array)];
}