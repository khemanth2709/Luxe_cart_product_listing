/**
 * Application Configuration
 * Central place for all constants and configuration values
 */

const CONFIG = {
    // Pagination
    PRODUCTS_PER_PAGE: 12,

    // Price
    MIN_PRICE: 0,
    MAX_PRICE: 500000,
    CURRENCY: 'INR',
    CURRENCY_SYMBOL: '₹',

    // Tax
    TAX_RATE: 0.18, // 18%
    SHIPPING_COST: 99,

    // Filters
    DEFAULT_FILTERS: {
        categories: [],
        priceRange: {
            min: 0,
            max: 500000
        },
        minRating: 0,
        inStockOnly: true,
        sortBy: 'recommended',
        searchQuery: ''
    },

    // Categories
    CATEGORIES: ['Electronics', 'Fashion', 'Home', 'Accessories'],

    // Stock statuses
    STOCK_STATUS: {
        IN_STOCK: 'In Stock',
        LIMITED_STOCK: 'Limited Stock',
        OUT_OF_STOCK: 'Out of Stock'
    },

    // Sort options
    SORT_OPTIONS: {
        RECOMMENDED: 'recommended',
        PRICE_LOW: 'price-low',
        PRICE_HIGH: 'price-high',
        RATING_HIGH: 'rating-high',
        NAME_ASC: 'name-asc',
        NAME_DESC: 'name-desc'
    },

    // Payment methods
    PAYMENT_METHODS: {
        UPI: 'upi',
        CARD: 'card',
        NET_BANKING: 'netbanking',
        COD: 'cod'
    },

    // Toast duration
    TOAST_DURATION: 5000,

    // Debounce delay
    DEBOUNCE_DELAY: 300,

    // LocalStorage keys
    STORAGE_KEYS: {
        CART: 'cart',
        WISHLIST: 'wishlist',
        ORDERS: 'orders',
        USER_PREFERENCES: 'userPreferences'
    },

    // Rating thresholds
    RATING_THRESHOLDS: [0, 3, 4, 4.5],

    // Image placeholder
    IMAGE_PLACEHOLDER: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23F0E6D2'/%3E%3C/svg%3E"
};

// Freeze config to prevent accidental modifications
Object.freeze(CONFIG);
Object.freeze(CONFIG.DEFAULT_FILTERS);