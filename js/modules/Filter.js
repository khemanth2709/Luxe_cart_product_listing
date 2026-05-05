/**
 * Product Filtering & Sorting Module
 * Handles filtering and sorting logic
 */

class FilterManager {
    /**
     * @param {Array} products - Array of products to filter
     * @param {Object} initialFilters - Initial filter state
     */
    constructor(products = [], initialFilters = CONFIG.DEFAULT_FILTERS) {
        this.products = products;
        this.filters = deepClone(initialFilters);
    }

    /**
     * Apply all filters to products
     * @returns {Array} Filtered products
     */
    apply() {
        let filtered = [...this.products];

        // Search filter
        if (this.filters.searchQuery) {
            const query = this.filters.searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
        }

        // Category filter
        if (this.filters.categories.length > 0) {
            filtered = filtered.filter(p =>
                this.filters.categories.includes(p.category)
            );
        }

        // Price filter
        filtered = filtered.filter(p =>
            p.price >= this.filters.priceRange.min &&
            p.price <= this.filters.priceRange.max
        );

        // Rating filter
        if (this.filters.minRating > 0) {
            filtered = filtered.filter(p => p.rating >= this.filters.minRating);
        }

        // Stock filter
        if (this.filters.inStockOnly) {
            filtered = filtered.filter(p =>
                p.stock === CONFIG.STOCK_STATUS.IN_STOCK ||
                p.stock === CONFIG.STOCK_STATUS.LIMITED_STOCK
            );
        }

        // Apply sorting
        return this.sort(filtered);
    }

    /**
     * Sort products
     * @param {Array} productsArray - Products to sort
     * @returns {Array} Sorted products
     */
    sort(productsArray) {
        const sorted = [...productsArray];

        switch (this.filters.sortBy) {
            case CONFIG.SORT_OPTIONS.PRICE_LOW:
                return sorted.sort((a, b) => a.price - b.price);
            case CONFIG.SORT_OPTIONS.PRICE_HIGH:
                return sorted.sort((a, b) => b.price - a.price);
            case CONFIG.SORT_OPTIONS.RATING_HIGH:
                return sorted.sort((a, b) => b.rating - a.rating);
            case CONFIG.SORT_OPTIONS.NAME_ASC:
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case CONFIG.SORT_OPTIONS.NAME_DESC:
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            default:
                return sorted; // Recommended
        }
    }

    /**
     * Set category filters
     * @param {Array} categories - Selected categories
     */
    setCategories(categories) {
        this.filters.categories = categories;
    }

    /**
     * Set price range
     * @param {number} min - Minimum price
     * @param {number} max - Maximum price
     */
    setPriceRange(min, max) {
        this.filters.priceRange = { min, max };
    }

    /**
     * Set minimum rating
     * @param {number} rating - Minimum rating
     */
    setMinRating(rating) {
        this.filters.minRating = rating;
    }

    /**
     * Set stock filter
     * @param {boolean} inStockOnly - Only show in stock items
     */
    setInStockOnly(inStockOnly) {
        this.filters.inStockOnly = inStockOnly;
    }

    /**
     * Set sort option
     * @param {string} sortBy - Sort option key
     */
    setSortBy(sortBy) {
        this.filters.sortBy = sortBy;
    }

    /**
     * Set search query
     * @param {string} query - Search query
     */
    setSearchQuery(query) {
        this.filters.searchQuery = query.trim();
    }

    /**
     * Reset all filters
     */
    reset() {
        this.filters = deepClone(CONFIG.DEFAULT_FILTERS);
    }

    /**
     * Get current filters
     * @returns {Object} Current filter state
     */
    getFilters() {
        return deepClone(this.filters);
    }
}