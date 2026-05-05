/**
 * Validation Utilities
 * Functions for validating user input
 */

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number (10 digits)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone number
 */
function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

/**
 * Validate if string is empty
 * @param {string} value - String to validate
 * @returns {boolean} True if not empty
 */
function isNotEmpty(value) {
    return value && value.trim().length > 0;
}

/**
 * Validate all required checkout fields
 * @param {Object} formData - Form data object
 * @returns {Object} Validation result with isValid and errors
 */
function validateCheckoutForm(formData) {
    const errors = {};
    const required = ['fullName', 'email', 'phone', 'address', 'city', 'state', 'pincode'];

    // Check required fields
    required.forEach(field => {
        if (!isNotEmpty(formData[field])) {
            errors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
        }
    });

    // Validate email
    if (formData.email && !isValidEmail(formData.email)) {
        errors.email = 'Invalid email address';
    }

    // Validate phone
    if (formData.phone && !isValidPhone(formData.phone)) {
        errors.phone = 'Phone must be 10 digits';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

/**
 * Validate quantity
 * @param {number} quantity - Quantity to validate
 * @param {number} maxStock - Maximum available stock
 * @returns {boolean} True if quantity is valid
 */
function isValidQuantity(quantity, maxStock = Infinity) {
    const q = parseInt(quantity) || 0;
    return q > 0 && q <= maxStock;
}