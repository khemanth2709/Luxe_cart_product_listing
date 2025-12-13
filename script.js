// Product Data - 40 realistic products
const products = [{
        id: 1,
        name: "Apple iPhone 14 Pro Max",
        category: "Electronics",
        price: 139999,
        originalPrice: 149999,
        rating: 4.8,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1663499482523-1c0c1eae63ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1663499482523-1c0c1eae63ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "The ultimate iPhone with Pro camera system, Dynamic Island, and A16 Bionic chip.",
        specs: {
            "Display": "6.7-inch Super Retina XDR",
            "Processor": "A16 Bionic",
            "Camera": "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
            "Battery": "Up to 29 hours video playback",
            "Storage": "256GB"
        },
        stock: "In Stock",
        stockQuantity: 25,
        isNew: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        category: "Electronics",
        price: 124999,
        originalPrice: 134999,
        rating: 4.7,
        reviews: 980,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Premium smartphone with S Pen, 200MP camera, and Snapdragon 8 Gen 2 processor.",
        specs: {
            "Display": "6.8-inch Dynamic AMOLED 2X",
            "Processor": "Snapdragon 8 Gen 2",
            "Camera": "200MP Wide + 12MP Ultra Wide + 10MP Telephoto",
            "Battery": "5000mAh",
            "Storage": "256GB"
        },
        stock: "In Stock",
        stockQuantity: 18,
        isNew: true
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        category: "Electronics",
        price: 28990,
        rating: 4.8,
        reviews: 2450,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Industry-leading noise cancellation with premium sound quality and comfort.",
        specs: {
            "Type": "Over-ear wireless",
            "Noise Cancellation": "Industry-leading",
            "Battery": "Up to 30 hours",
            "Connectivity": "Bluetooth 5.2",
            "Weight": "250g"
        },
        stock: "In Stock",
        stockQuantity: 42
    },
    {
        id: 4,
        name: "MacBook Air M2",
        category: "Electronics",
        price: 114999,
        originalPrice: 119999,
        rating: 4.9,
        reviews: 1870,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Supercharged by M2 chip with all-day battery life and stunning Liquid Retina display.",
        specs: {
            "Display": "13.6-inch Liquid Retina",
            "Processor": "Apple M2",
            "RAM": "8GB",
            "Storage": "256GB SSD",
            "Battery": "Up to 18 hours"
        },
        stock: "Limited Stock",
        stockQuantity: 8,
        isNew: true
    },
    {
        id: 5,
        name: "Canon EOS R6 Camera",
        category: "Electronics",
        price: 215999,
        rating: 4.6,
        reviews: 890,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Full-frame mirrorless camera with advanced autofocus and 4K video.",
        specs: {
            "Sensor": "20.1MP Full-frame CMOS",
            "ISO": "100-102400",
            "Video": "4K 60p",
            "Autofocus": "Dual Pixel CMOS AF II",
            "Connectivity": "Wi-Fi & Bluetooth"
        },
        stock: "In Stock",
        stockQuantity: 12
    },
    {
        id: 6,
        name: "Apple Watch Series 8",
        category: "Electronics",
        price: 45999,
        rating: 4.5,
        reviews: 3250,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Advanced health monitoring with temperature sensing and crash detection.",
        specs: {
            "Display": "Always-on Retina",
            "Battery": "Up to 18 hours",
            "Connectivity": "GPS + Cellular",
            "Materials": "Aluminum Case",
            "Sensors": "Temperature, ECG, Blood Oxygen"
        },
        stock: "In Stock",
        stockQuantity: 35
    },
    {
        id: 7,
        name: "iPad Pro 12.9-inch",
        category: "Electronics",
        price: 109999,
        rating: 4.7,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Ultra-fast M2 chip with stunning Liquid Retina XDR display.",
        specs: {
            "Display": "12.9-inch Liquid Retina XDR",
            "Processor": "Apple M2",
            "Storage": "256GB",
            "Camera": "12MP Wide + 10MP Ultra Wide",
            "Battery": "Up to 10 hours"
        },
        stock: "In Stock",
        stockQuantity: 22
    },
    {
        id: 8,
        name: "Bose SoundLink Revolve+",
        category: "Electronics",
        price: 24990,
        originalPrice: 29990,
        rating: 4.4,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "360-degree wireless Bluetooth speaker with deep, immersive sound.",
        specs: {
            "Type": "Portable Bluetooth Speaker",
            "Battery": "Up to 16 hours",
            "Connectivity": "Bluetooth, NFC",
            "Water Resistance": "IP55",
            "Weight": "0.9kg"
        },
        stock: "In Stock",
        stockQuantity: 50,
        onSale: true
    },
    {
        id: 9,
        name: "Dell XPS 13 Laptop",
        category: "Electronics",
        price: 124999,
        rating: 4.6,
        reviews: 1650,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "InfinityEdge display with 11th Gen Intel Core processors.",
        specs: {
            "Display": "13.4-inch 4K UHD+",
            "Processor": "Intel Core i7",
            "RAM": "16GB",
            "Storage": "512GB SSD",
            "Battery": "Up to 14 hours"
        },
        stock: "In Stock",
        stockQuantity: 15
    },
    {
        id: 10,
        name: "Samsung 55-inch 4K QLED TV",
        category: "Electronics",
        price: 84999,
        originalPrice: 99999,
        rating: 4.7,
        reviews: 3200,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Quantum Dot technology with Object Tracking Sound and Alexa built-in.",
        specs: {
            "Display": "55-inch QLED 4K",
            "HDR": "Quantum HDR",
            "Smart TV": "Tizen OS",
            "Audio": "Object Tracking Sound",
            "Connectivity": "4 HDMI, 2 USB"
        },
        stock: "In Stock",
        stockQuantity: 28,
        onSale: true
    },
    {
        id: 11,
        name: "Men's Premium Leather Jacket",
        category: "Fashion",
        price: 12499,
        rating: 4.5,
        reviews: 420,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Genuine leather jacket with quilted lining and multiple pockets.",
        specs: {
            "Material": "100% Genuine Leather",
            "Lining": "Quilted Polyester",
            "Closure": "Zipper",
            "Pockets": "4",
            "Care": "Professional cleaning only"
        },
        stock: "In Stock",
        stockQuantity: 25
    },
    {
        id: 12,
        name: "Women's Designer Silk Dress",
        category: "Fashion",
        price: 15999,
        rating: 4.7,
        reviews: 680,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Elegant silk dress with floral pattern and comfortable fit.",
        specs: {
            "Material": "100% Pure Silk",
            "Style": "A-line",
            "Length": "Knee-length",
            "Care": "Dry clean only",
            "Occasion": "Formal, Party"
        },
        stock: "Limited Stock",
        stockQuantity: 6,
        isNew: true
    },
    {
        id: 13,
        name: "Premium Running Shoes",
        category: "Fashion",
        price: 8599,
        originalPrice: 9999,
        rating: 4.6,
        reviews: 2450,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Lightweight running shoes with responsive cushioning and breathable mesh.",
        specs: {
            "Material": "Breathable Mesh",
            "Sole": "Rubber",
            "Closure": "Lace-up",
            "Weight": "280g",
            "Technology": "Responsive Cushioning"
        },
        stock: "In Stock",
        stockQuantity: 40,
        onSale: true
    },
    {
        id: 14,
        name: "Designer Leather Handbag",
        category: "Fashion",
        price: 28999,
        rating: 4.8,
        reviews: 920,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Luxury leather handbag with gold hardware and spacious interior.",
        specs: {
            "Material": "Italian Leather",
            "Dimensions": "30x20x15 cm",
            "Closure": "Magnetic Snap",
            "Compartments": "3",
            "Strap": "Adjustable, Removable"
        },
        stock: "In Stock",
        stockQuantity: 18
    },
    {
        id: 15,
        name: "Men's Formal Suit",
        category: "Fashion",
        price: 18999,
        originalPrice: 22999,
        rating: 4.4,
        reviews: 780,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Tailored formal suit with premium wool blend and modern fit.",
        specs: {
            "Material": "Wool Blend",
            "Fit": "Slim",
            "Includes": "Jacket + Trousers",
            "Color": "Navy Blue",
            "Care": "Dry clean only"
        },
        stock: "In Stock",
        stockQuantity: 30,
        onSale: true
    },
    {
        id: 16,
        name: "Women's Winter Coat",
        category: "Fashion",
        price: 12999,
        rating: 4.3,
        reviews: 650,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Warm winter coat with faux fur hood and water-resistant fabric.",
        specs: {
            "Material": "Polyester Blend",
            "Lining": "Thermal",
            "Hood": "Detachable Faux Fur",
            "Pockets": "4",
            "Water Resistance": "Yes"
        },
        stock: "In Stock",
        stockQuantity: 35
    },
    {
        id: 17,
        name: "Casual T-Shirt Pack (3)",
        category: "Fashion",
        price: 3499,
        rating: 4.2,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Pack of 3 premium cotton t-shirts in assorted colors.",
        specs: {
            "Material": "100% Cotton",
            "Colors": "Black, White, Grey",
            "Fit": "Regular",
            "Sleeve": "Short",
            "Care": "Machine wash"
        },
        stock: "In Stock",
        stockQuantity: 100
    },
    {
        id: 18,
        name: "Designer Sunglasses",
        category: "Fashion",
        price: 15999,
        rating: 4.7,
        reviews: 1450,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Luxury sunglasses with UV protection and polarized lenses.",
        specs: {
            "Lens": "Polarized",
            "UV Protection": "100%",
            "Frame": "Acetate",
            "Color": "Black/Gold",
            "Case": "Included"
        },
        stock: "In Stock",
        stockQuantity: 45
    },
    {
        id: 19,
        name: "Leather Wallet",
        category: "Fashion",
        price: 4999,
        rating: 4.4,
        reviews: 890,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Genuine leather wallet with multiple card slots and coin pocket.",
        specs: {
            "Material": "Genuine Leather",
            "Card Slots": "8",
            "Coin Pocket": "Yes",
            "ID Window": "Yes",
            "Color": "Brown"
        },
        stock: "In Stock",
        stockQuantity: 60
    },
    {
        id: 20,
        name: "Smart Fitness Watch",
        category: "Fashion",
        price: 18999,
        originalPrice: 22999,
        rating: 4.5,
        reviews: 3200,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Advanced fitness tracking with heart rate monitoring and GPS.",
        specs: {
            "Display": "AMOLED Touchscreen",
            "Battery": "Up to 7 days",
            "Water Resistance": "5 ATM",
            "Sensors": "Heart Rate, GPS, SpO2",
            "Connectivity": "Bluetooth 5.0"
        },
        stock: "In Stock",
        stockQuantity: 55,
        onSale: true
    },
    {
        id: 21,
        name: "Modern Sofa Set (3+2+1)",
        category: "Home",
        price: 89999,
        originalPrice: 109999,
        rating: 4.7,
        reviews: 420,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Contemporary sofa set with premium fabric and comfortable cushions.",
        specs: {
            "Material": "Premium Fabric",
            "Configuration": "3+2+1 Seater",
            "Color": "Grey",
            "Assembly": "Required",
            "Warranty": "2 years"
        },
        stock: "In Stock",
        stockQuantity: 12,
        onSale: true
    },
    {
        id: 22,
        name: "King Size Bed with Storage",
        category: "Home",
        price: 54999,
        rating: 4.6,
        reviews: 380,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Solid wood bed with hydraulic storage and modern design.",
        specs: {
            "Material": "Solid Sheesham Wood",
            "Size": "King (78x84 inches)",
            "Storage": "Hydraulic Lift-up",
            "Color": "Walnut Finish",
            "Assembly": "Professional"
        },
        stock: "In Stock",
        stockQuantity: 8
    },
    {
        id: 23,
        name: "Dining Table Set (6 Seater)",
        category: "Home",
        price: 45999,
        rating: 4.5,
        reviews: 290,
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Elegant dining set with table and 6 upholstered chairs.",
        specs: {
            "Table Material": "Tempered Glass + Metal",
            "Chairs": "6 Upholstered",
            "Seating Capacity": "6 People",
            "Color": "Black & Beige",
            "Assembly": "Required"
        },
        stock: "In Stock",
        stockQuantity: 15
    },
    {
        id: 24,
        name: "Smart LED TV 65-inch",
        category: "Home",
        price: 84999,
        rating: 4.8,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "4K Ultra HD smart TV with Dolby Vision and built-in Alexa.",
        specs: {
            "Display": "65-inch 4K UHD",
            "Smart Features": "Android TV",
            "HDR": "Dolby Vision, HDR10+",
            "Sound": "Dolby Atmos",
            "Connectivity": "4 HDMI, 3 USB"
        },
        stock: "In Stock",
        stockQuantity: 22
    },
    {
        id: 25,
        name: "Premium Coffee Maker",
        category: "Home",
        price: 14999,
        rating: 4.4,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Programmable coffee maker with thermal carafe and strength control.",
        specs: {
            "Capacity": "12 Cups",
            "Features": "Programmable, Thermal Carafe",
            "Brew Time": "6-12 minutes",
            "Filter": "Permanent",
            "Warranty": "1 year"
        },
        stock: "In Stock",
        stockQuantity: 40
    },
    {
        id: 26,
        name: "Air Purifier with HEPA",
        category: "Home",
        price: 19999,
        rating: 4.3,
        reviews: 920,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "HEPA air purifier for large rooms with air quality indicator.",
        specs: {
            "Coverage": "Up to 500 sq ft",
            "Filter": "True HEPA + Activated Carbon",
            "Features": "Air Quality Sensor, Auto Mode",
            "Noise Level": "25-52 dB",
            "Warranty": "2 years"
        },
        stock: "In Stock",
        stockQuantity: 28
    },
    {
        id: 27,
        name: "Robot Vacuum Cleaner",
        category: "Home",
        price: 34999,
        originalPrice: 39999,
        rating: 4.5,
        reviews: 1450,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Smart robot vacuum with mapping technology and app control.",
        specs: {
            "Type": "Robot Vacuum",
            "Navigation": "LIDAR Mapping",
            "Battery": "Up to 150 minutes",
            "Connectivity": "Wi-Fi, App Control",
            "Features": "Auto Recharge, Scheduling"
        },
        stock: "In Stock",
        stockQuantity: 25,
        onSale: true
    },
    {
        id: 28,
        name: "Kitchen Mixer Grinder",
        category: "Home",
        price: 8999,
        rating: 4.2,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Powerful mixer grinder with multiple jars and stainless steel blades.",
        specs: {
            "Power": "750W Motor",
            "Jars": "3 Stainless Steel",
            "Speed Control": "3",
            "Warranty": "2 years",
            "Color": "Silver"
        },
        stock: "In Stock",
        stockQuantity: 65
    },
    {
        id: 29,
        name: "Designer Floor Lamp",
        category: "Home",
        price: 12999,
        rating: 4.6,
        reviews: 480,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Modern floor lamp with adjustable arm and dimmable LED.",
        specs: {
            "Height": "160 cm",
            "Light Source": "LED (included)",
            "Dimmable": "Yes",
            "Material": "Metal + Fabric",
            "Color": "Black"
        },
        stock: "In Stock",
        stockQuantity: 30
    },
    {
        id: 30,
        name: "Premium Backpack",
        category: "Accessories",
        price: 7499,
        rating: 4.5,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Water-resistant backpack with laptop compartment and multiple pockets.",
        specs: {
            "Material": "Water-resistant Polyester",
            "Laptop Compartment": "Up to 16 inches",
            "Pockets": "Multiple",
            "Color": "Black",
            "Warranty": "1 year"
        },
        stock: "In Stock",
        stockQuantity: 75
    },
    {
        id: 31,
        name: "Wireless Earbuds Pro",
        category: "Accessories",
        price: 18999,
        originalPrice: 22999,
        rating: 4.7,
        reviews: 3250,
        image: "https://images.unsplash.com/photo-1590658165737-15a047b8b5e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1590658165737-15a047b8b5e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Active noise cancellation with spatial audio and sweat resistance.",
        specs: {
            "Type": "True Wireless",
            "ANC": "Active Noise Cancellation",
            "Battery": "Up to 6 hours",
            "Case Battery": "24 hours",
            "Water Resistance": "IPX4"
        },
        stock: "In Stock",
        stockQuantity: 45,
        onSale: true
    },
    {
        id: 32,
        name: "Smartphone Gimbal Stabilizer",
        category: "Accessories",
        price: 12999,
        rating: 4.4,
        reviews: 980,
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "3-axis smartphone gimbal for smooth video and advanced features.",
        specs: {
            "Stabilization": "3-axis",
            "Compatibility": "iOS & Android",
            "Battery": "Up to 12 hours",
            "Weight": "500g",
            "Features": "Object Tracking, Time-lapse"
        },
        stock: "In Stock",
        stockQuantity: 32
    },
    {
        id: 33,
        name: "Power Bank 30000mAh",
        category: "Accessories",
        price: 4999,
        rating: 4.3,
        reviews: 2450,
        image: "https://images.unsplash.com/photo-1594736797933-d0c6e4d6d6c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1594736797933-d0c6e4d6d6c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "High-capacity power bank with fast charging and multiple ports.",
        specs: {
            "Capacity": "30000mAh",
            "Output Ports": "3 (USB-A, USB-C, Micro USB)",
            "Fast Charging": "Yes (18W)",
            "Input": "Type-C",
            "Weight": "580g"
        },
        stock: "In Stock",
        stockQuantity: 85
    },
    {
        id: 34,
        name: "Leather Laptop Sleeve",
        category: "Accessories",
        price: 3999,
        rating: 4.2,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Premium leather sleeve for laptops up to 16 inches.",
        specs: {
            "Material": "Genuine Leather",
            "Compatibility": "Up to 16-inch laptops",
            "Padding": "Shock-absorbent",
            "Color": "Brown",
            "Closure": "Magnetic"
        },
        stock: "In Stock",
        stockQuantity: 90
    },
    {
        id: 35,
        name: "Luxury Watch",
        category: "Accessories",
        price: 89999,
        rating: 4.9,
        reviews: 420,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Automatic luxury watch with sapphire crystal and stainless steel.",
        specs: {
            "Movement": "Automatic",
            "Crystal": "Sapphire",
            "Case Material": "Stainless Steel",
            "Water Resistance": "100m",
            "Strap": "Leather"
        },
        stock: "Limited Stock",
        stockQuantity: 5,
        isNew: true
    },
    {
        id: 36,
        name: "Portable Bluetooth Speaker",
        category: "Accessories",
        price: 8999,
        rating: 4.4,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Compact Bluetooth speaker with 360-degree sound and IP67 rating.",
        specs: {
            "Type": "Portable Bluetooth",
            "Battery": "Up to 15 hours",
            "Water Resistance": "IP67",
            "Connectivity": "Bluetooth 5.0",
            "Weight": "400g"
        },
        stock: "In Stock",
        stockQuantity: 55
    },
    {
        id: 37,
        name: "Camera Lens Kit",
        category: "Accessories",
        price: 75999,
        rating: 4.7,
        reviews: 280,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Professional lens kit with wide-angle, standard, and telephoto lenses.",
        specs: {
            "Lenses": "24-70mm f/2.8, 70-200mm f/4",
            "Mount": "Canon EF",
            "Stabilization": "Image Stabilization",
            "Filter Size": "77mm",
            "Case": "Included"
        },
        stock: "In Stock",
        stockQuantity: 12
    },
    {
        id: 38,
        name: "Travel Neck Pillow",
        category: "Accessories",
        price: 2499,
        rating: 4.1,
        reviews: 3200,
        image: "https://images.unsplash.com/photo-1589330694651-5fef0e6976f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1589330694651-5fef0e6976f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Memory foam neck pillow with removable cover for travel comfort.",
        specs: {
            "Material": "Memory Foam",
            "Cover": "Removable, Washable",
            "Closure": "Buckle",
            "Color": "Grey",
            "Carry Bag": "Included"
        },
        stock: "In Stock",
        stockQuantity: 120
    },
    {
        id: 39,
        name: "Wireless Charging Pad",
        category: "Accessories",
        price: 2999,
        rating: 4.3,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Fast wireless charging pad compatible with Qi-enabled devices.",
        specs: {
            "Output": "15W Fast Charging",
            "Compatibility": "Qi-enabled devices",
            "LED Indicator": "Yes",
            "Material": "Silicone + ABS",
            "Color": "White"
        },
        stock: "In Stock",
        stockQuantity: 95
    },
    {
        id: 40,
        name: "Premium Leather Belt",
        category: "Accessories",
        price: 4999,
        rating: 4.5,
        reviews: 980,
        image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        description: "Genuine leather belt with stainless steel buckle.",
        specs: {
            "Material": "Full-grain Leather",
            "Buckle": "Stainless Steel",
            "Size": "Adjustable",
            "Color": "Brown",
            "Care": "Condition periodically"
        },
        stock: "In Stock",
        stockQuantity: 70
    }
];

// Application State Management
class ECommerceApp {
    constructor() {
        this.state = {
            filteredProducts: [...products],
            activeFilters: {
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
            currentPage: 1,
            productsPerPage: 12,
            cart: this.loadFromStorage('cart') || [],
            wishlist: this.loadFromStorage('wishlist') || [],
            orders: this.loadFromStorage('orders') || []
        };

        this.currentProductDetail = null;
        this.init();
    }

    // Initialize application
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.renderProducts();
        this.updateCartCount();
        this.updateWishlistCount();
        this.updateCategoryCounts();
        this.updatePriceSlider();
        this.setupImageLazyLoading();
    }

    // Cache DOM elements
    cacheDOM() {
        // Main elements
        this.productsGrid = document.getElementById('productsGrid');
        this.productCount = document.getElementById('resultsCount');
        this.activeFiltersContainer = document.getElementById('activeFilters');
        this.emptyState = document.getElementById('emptyState');
        this.pagination = document.getElementById('pagination');
        this.prevPageBtn = document.getElementById('prevPage');
        this.nextPageBtn = document.getElementById('nextPage');
        this.paginationNumbers = document.getElementById('paginationNumbers');

        // Filters
        this.sortSelect = document.getElementById('sortSelect');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.minPriceInput = document.getElementById('minPrice');
        this.maxPriceInput = document.getElementById('maxPrice');
        this.priceRangeMin = document.getElementById('priceRangeMin');
        this.priceRangeMax = document.getElementById('priceRangeMax');
        this.ratingFilter = document.getElementById('ratingFilter');
        this.inStockCheckbox = document.getElementById('inStock');
        this.filterSearch = document.getElementById('filterSearch');
        this.searchInput = document.getElementById('searchInput');

        // Buttons
        this.resetFiltersBtn = document.getElementById('resetFilters');
        this.resetFiltersEmptyBtn = document.getElementById('resetFiltersEmpty');

        // Modals
        this.productModalOverlay = document.getElementById('productModalOverlay');
        this.productModal = document.getElementById('productModal');
        this.productModalContent = document.getElementById('productModalContent');
        this.closeProductModal = document.getElementById('closeProductModal');

        this.cartModalOverlay = document.getElementById('cartModalOverlay');
        this.cartModal = document.getElementById('cartModal');
        this.cartModalContent = document.getElementById('cartModalContent');
        this.closeCartModal = document.getElementById('closeCartModal');
        this.cartBtn = document.getElementById('cartBtn');
        this.continueShopping = document.getElementById('continueShopping');
        this.proceedCheckout = document.getElementById('proceedCheckout');

        this.wishlistModalOverlay = document.getElementById('wishlistModalOverlay');
        this.wishlistModal = document.getElementById('wishlistModal');
        this.wishlistModalContent = document.getElementById('wishlistModalContent');
        this.closeWishlistModal = document.getElementById('closeWishlistModal');
        this.wishlistBtn = document.getElementById('wishlistBtn');

        this.ordersModalOverlay = document.getElementById('ordersModalOverlay');
        this.ordersModal = document.getElementById('ordersModal');
        this.ordersModalContent = document.getElementById('ordersModalContent');
        this.closeOrdersModal = document.getElementById('closeOrdersModal');
        this.ordersBtn = document.getElementById('ordersBtn');

        // Mobile
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.mobileNav = document.getElementById('mobileNav');
        this.closeMobileNav = document.getElementById('closeMobileNav');
        this.mobileFilterToggle = document.getElementById('mobileFilterToggle');
        this.mobileFilterOverlay = document.getElementById('mobileFilterOverlay');
        this.closeMobileFilterModal = document.getElementById('closeMobileFilterModal');
        this.clearMobileFilters = document.getElementById('clearMobileFilters');
        this.applyMobileFilters = document.getElementById('applyMobileFilters');
        this.mobileFilterContent = document.getElementById('mobileFilterContent');

        // Checkout
        this.checkoutPage = document.getElementById('checkoutPage');
        this.backToShop = document.getElementById('backToShop');
        this.placeOrderBtn = document.getElementById('placeOrderBtn');

        // Order Success
        this.orderSuccessPage = document.getElementById('orderSuccessPage');
        this.continueShoppingSuccess = document.getElementById('continueShoppingSuccess');

        // Toast
        this.toastContainer = document.getElementById('toastContainer');
    }

    // Bind event listeners
    bindEvents() {
        // Sorting
        this.sortSelect.addEventListener('change', () => this.handleSortChange());

        // Category filters
        this.categoryFilter.addEventListener('change', () => this.handleCategoryFilter());

        // Price filters
        this.minPriceInput.addEventListener('input', () => this.handlePriceFilter());
        this.maxPriceInput.addEventListener('input', () => this.handlePriceFilter());
        this.priceRangeMin.addEventListener('input', () => this.handlePriceSlider());
        this.priceRangeMax.addEventListener('input', () => this.handlePriceSlider());

        // Rating filter
        this.ratingFilter.addEventListener('change', () => this.handleRatingFilter());

        // Stock filter
        this.inStockCheckbox.addEventListener('change', () => this.handleStockFilter());

        // Search
        this.filterSearch.addEventListener('input', () => this.handleSearch());
        this.searchInput.addEventListener('input', () => this.handleMainSearch());
        document.querySelector('.search-btn').addEventListener('click', () => this.handleSearchButton());

        // Reset filters
        this.resetFiltersBtn.addEventListener('click', () => this.resetFilters());
        this.resetFiltersEmptyBtn.addEventListener('click', () => this.resetFilters());

        // Pagination
        this.prevPageBtn.addEventListener('click', () => this.goToPrevPage());
        this.nextPageBtn.addEventListener('click', () => this.goToNextPage());

        // Modal close buttons
        this.closeProductModal.addEventListener('click', () => this.closeModal('product'));
        this.closeCartModal.addEventListener('click', () => this.closeModal('cart'));
        this.closeWishlistModal.addEventListener('click', () => this.closeModal('wishlist'));
        this.closeOrdersModal.addEventListener('click', () => this.closeModal('orders'));

        // Cart
        this.cartBtn.addEventListener('click', () => this.openCartModal());
        this.continueShopping.addEventListener('click', () => this.closeModal('cart'));
        this.proceedCheckout.addEventListener('click', () => this.openCheckoutPage());

        // Wishlist
        this.wishlistBtn.addEventListener('click', () => this.openWishlistModal());

        // Orders
        this.ordersBtn.addEventListener('click', () => this.openOrdersModal());

        // Mobile navigation
        this.mobileMenuToggle.addEventListener('click', () => this.toggleMobileNav());
        this.closeMobileNav.addEventListener('click', () => this.closeMobileNavHandler());
        this.mobileFilterToggle.addEventListener('click', () => this.openMobileFilters());
        this.closeMobileFilterModal.addEventListener('click', () => this.closeModal('mobileFilter'));
        this.clearMobileFilters.addEventListener('click', () => this.clearMobileFiltersHandler());
        this.applyMobileFilters.addEventListener('click', () => this.applyMobileFiltersHandler());

        // Checkout
        this.backToShop.addEventListener('click', () => this.closeCheckoutPage());
        this.placeOrderBtn.addEventListener('click', () => this.placeOrder());
        this.continueShoppingSuccess.addEventListener('click', () => this.closeOrderSuccess());

        // Payment method changes
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.handlePaymentMethodChange(e));
        });

        // Close modals on overlay click
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    const modalType = overlay.id.replace('ModalOverlay', '').replace('modal', '');
                    this.closeModal(modalType);
                }
            });
        });

        // Event delegation for product cards
        document.addEventListener('click', (e) => {
            const target = e.target;

            // Quick view button
            if (target.closest('.btn-quick-view')) {
                const productId = parseInt(target.closest('.btn-quick-view').dataset.id);
                this.openProductDetail(productId);
            }

            // Add to cart button
            if (target.closest('.btn-add-to-cart')) {
                const productId = parseInt(target.closest('.btn-add-to-cart').dataset.id);
                this.addToCart(productId);
            }

            // Wishlist button
            if (target.closest('.wishlist-btn')) {
                const productId = parseInt(target.closest('.wishlist-btn').dataset.id);
                this.toggleWishlist(productId);
            }

            // Remove from cart
            if (target.closest('.cart-item-remove')) {
                const productId = parseInt(target.closest('.cart-item-remove').dataset.id);
                this.removeFromCart(productId);
            }

            // Quantity controls
            if (target.closest('.cart-quantity-btn.decrease')) {
                const productId = parseInt(target.closest('.cart-quantity-btn').dataset.id);
                this.updateCartQuantity(productId, -1);
            }
            if (target.closest('.cart-quantity-btn.increase')) {
                const productId = parseInt(target.closest('.cart-quantity-btn').dataset.id);
                this.updateCartQuantity(productId, 1);
            }

            // Move to cart from wishlist
            if (target.closest('.btn-move-to-cart')) {
                const productId = parseInt(target.closest('.btn-move-to-cart').dataset.id);
                this.moveToCartFromWishlist(productId);
            }

            // Remove from wishlist
            if (target.closest('.btn-remove-wishlist')) {
                const productId = parseInt(target.closest('.btn-remove-wishlist').dataset.id);
                this.removeFromWishlist(productId);
            }
        });

        // Add to cart from product detail modal
        document.addEventListener('click', (e) => {
            if (e.target.closest('.btn-add-to-cart-large')) {
                const productId = this.currentProductDetail?.id;
                if (productId) {
                    const quantity = parseInt(document.querySelector('.quantity-input').value) || 1;
                    this.addToCart(productId, quantity);
                }
            }

            if (e.target.closest('.btn-buy-now')) {
                const productId = this.currentProductDetail?.id;
                if (productId) {
                    const quantity = parseInt(document.querySelector('.quantity-input').value) || 1;
                    this.addToCart(productId, quantity);
                    this.closeModal('product');
                    this.openCartModal();
                }
            }
        });
    }

    // Local storage helpers
    saveToStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    loadFromStorage(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    // Update cart count display
    updateCartCount() {
        const count = this.state.cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cartCount').textContent = count;
        document.getElementById('mobileCartCount').textContent = count;
        document.getElementById('cartModalCount').textContent = `${count} items`;
    }

    // Update wishlist count display
    updateWishlistCount() {
        const count = this.state.wishlist.length;
        document.getElementById('wishlistCount').textContent = count;
        document.getElementById('mobileWishlistCount').textContent = count;
        document.getElementById('wishlistModalCount').textContent = `${count} items`;
    }

    // Update category filter counts
    updateCategoryCounts() {
        const categories = ['Electronics', 'Fashion', 'Home', 'Accessories'];
        categories.forEach(category => {
            const count = products.filter(p => p.category === category).length;
            const element = document.querySelector(`#${category.toLowerCase()} .filter-count`);
            if (element) {
                element.textContent = `(${count})`;
            }
        });
    }

    // Update price slider visualization
    updatePriceSlider() {
        const minPrice = parseInt(this.minPriceInput.value) || 0;
        const maxPrice = parseInt(this.maxPriceInput.value) || 500000;

        this.priceRangeMin.value = minPrice;
        this.priceRangeMax.value = maxPrice;

        this.updateSliderTrack();
    }

    updateSliderTrack() {
        const min = parseInt(this.priceRangeMin.value);
        const max = parseInt(this.priceRangeMax.value);
        const minPercent = (min / 500000) * 100;
        const maxPercent = (max / 500000) * 100;

        const track = document.querySelector('.slider-track');
        track.style.left = `${minPercent}%`;
        track.style.width = `${maxPercent - minPercent}%`;
    }

    // Setup image lazy loading
    setupImageLazyLoading() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Apply all filters and sorting
    applyFilters() {
        let filtered = [...products];

        // Apply search filter
        if (this.state.activeFilters.searchQuery) {
            const query = this.state.activeFilters.searchQuery.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        }

        // Apply category filter
        if (this.state.activeFilters.categories.length > 0) {
            filtered = filtered.filter(product =>
                this.state.activeFilters.categories.includes(product.category)
            );
        }

        // Apply price filter
        filtered = filtered.filter(product =>
            product.price >= this.state.activeFilters.priceRange.min &&
            product.price <= this.state.activeFilters.priceRange.max
        );

        // Apply rating filter
        if (this.state.activeFilters.minRating > 0) {
            filtered = filtered.filter(product =>
                product.rating >= this.state.activeFilters.minRating
            );
        }

        // Apply stock filter
        if (this.state.activeFilters.inStockOnly) {
            filtered = filtered.filter(product =>
                product.stock === 'In Stock' || product.stock === 'Limited Stock'
            );
        }

        // Apply sorting
        filtered = this.sortProducts(filtered, this.state.activeFilters.sortBy);

        this.state.filteredProducts = filtered;
        this.state.currentPage = 1; // Reset to first page when filters change
        this.renderProducts();
        this.renderPagination();
    }

    // Sort products based on selected option
    sortProducts(productsArray, sortBy) {
        const sorted = [...productsArray];

        switch (sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'rating-high':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'name-asc':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return sorted.sort((a, b) => b.name.localeCompare(a.name));
            default:
                return sorted; // 'recommended' - maintain original order
        }
    }

    // Render products to grid
    renderProducts() {
        const startIndex = (this.state.currentPage - 1) * this.state.productsPerPage;
        const endIndex = startIndex + this.state.productsPerPage;
        const productsToShow = this.state.filteredProducts.slice(startIndex, endIndex);

        if (this.state.filteredProducts.length === 0) {
            this.productsGrid.style.display = 'none';
            this.emptyState.style.display = 'block';
            this.pagination.style.display = 'none';
            this.productCount.textContent = '0';
        } else {
            this.productsGrid.style.display = 'grid';
            this.emptyState.style.display = 'none';
            this.pagination.style.display = 'flex';
            this.productCount.textContent = this.state.filteredProducts.length;

            // Clear existing products
            this.productsGrid.innerHTML = '';

            // Render each product
            productsToShow.forEach(product => {
                const productCard = this.createProductCard(product);
                this.productsGrid.appendChild(productCard);
            });
        }

        this.updateActiveFiltersDisplay();
        this.updatePaginationButtons();
    }

    // Create product card HTML
    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Format price
        const formattedPrice = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(product.price);

        const formattedOriginalPrice = product.originalPrice ?
            new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(product.originalPrice) : '';

        const discount = product.originalPrice ?
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        // Generate stars
        const stars = this.generateStarRating(product.rating);

        // Check if in wishlist
        const inWishlist = this.state.wishlist.includes(product.id);

        card.innerHTML = `
            ${product.isNew ? '<div class="product-badge"><span class="badge badge-new">New</span></div>' : ''}
            ${product.onSale ? '<div class="product-badge"><span class="badge badge-sale">Sale</span></div>' : ''}
            ${product.stock === 'Limited Stock' ? '<div class="product-badge"><span class="badge badge-stock">Limited</span></div>' : ''}
            
            <div class="product-image">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23F0E6D2'/%3E%3C/svg%3E" 
                     data-src="${product.image}" 
                     alt="${product.name}" 
                     loading="lazy">
                <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-id="${product.id}">
                    <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="product-rating">
                    <div class="rating-stars">${stars}</div>
                    <div class="rating-value">${product.rating.toFixed(1)} (${product.reviews})</div>
                </div>
                
                <div class="product-price">
                    <span class="current-price">${formattedPrice}</span>
                    ${formattedOriginalPrice ? `<span class="original-price">${formattedOriginalPrice}</span>` : ''}
                    ${discount > 0 ? `<span class="discount">${discount}% OFF</span>` : ''}
                </div>
                
                <div class="product-stock">
                    <span class="stock-${product.stock.toLowerCase().replace(' ', '-')}">
                        <i class="fas fa-${product.stock === 'In Stock' ? 'check' : 'exclamation'}-circle"></i>
                        ${product.stock}
                    </span>
                </div>
                
                <div class="product-actions">
                    <button class="btn-add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn-quick-view" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        `;

        return card;
    }

    // Generate star rating HTML
    generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }

        return stars;
    }

    // Update active filters display
    updateActiveFiltersDisplay() {
        this.activeFiltersContainer.innerHTML = '';

        // Category filters
        this.state.activeFilters.categories.forEach(category => {
            const filterTag = this.createFilterTag(category, 'category', category);
            this.activeFiltersContainer.appendChild(filterTag);
        });

        // Price filter (if not default)
        if (this.state.activeFilters.priceRange.min > 0 || this.state.activeFilters.priceRange.max < 500000) {
            const priceText = `Price: ₹${this.state.activeFilters.priceRange.min.toLocaleString('en-IN')} - ₹${this.state.activeFilters.priceRange.max.toLocaleString('en-IN')}`;
            const filterTag = this.createFilterTag(priceText, 'price');
            this.activeFiltersContainer.appendChild(filterTag);
        }

        // Rating filter (if not default)
        if (this.state.activeFilters.minRating > 0) {
            const ratingText = `Rating: ${this.state.activeFilters.minRating}★ & above`;
            const filterTag = this.createFilterTag(ratingText, 'rating');
            this.activeFiltersContainer.appendChild(filterTag);
        }

        // Search query
        if (this.state.activeFilters.searchQuery) {
            const searchText = `Search: "${this.state.activeFilters.searchQuery}"`;
            const filterTag = this.createFilterTag(searchText, 'search');
            this.activeFiltersContainer.appendChild(filterTag);
        }

        // In stock only
        if (this.state.activeFilters.inStockOnly) {
            const filterTag = this.createFilterTag('In Stock Only', 'stock');
            this.activeFiltersContainer.appendChild(filterTag);
        }
    }

    // Create filter tag element
    createFilterTag(text, type, value = '') {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `
            ${text}
            <span class="remove" data-type="${type}" data-value="${value}">
                <i class="fas fa-times"></i>
            </span>
        `;

        tag.querySelector('.remove').addEventListener('click', (e) => {
            this.removeFilter(type, value);
        });

        return tag;
    }

    // Remove specific filter
    removeFilter(type, value) {
        switch (type) {
            case 'category':
                const checkbox = document.querySelector(`input[value="${value}"]`);
                if (checkbox) checkbox.checked = false;
                this.handleCategoryFilter();
                break;
            case 'price':
                this.resetPriceFilter();
                break;
            case 'rating':
                const radio = document.querySelector('input[name="rating"][value="0"]');
                if (radio) radio.checked = true;
                this.handleRatingFilter();
                break;
            case 'search':
                this.state.activeFilters.searchQuery = '';
                this.filterSearch.value = '';
                this.searchInput.value = '';
                this.applyFilters();
                break;
            case 'stock':
                this.inStockCheckbox.checked = false;
                this.handleStockFilter();
                break;
        }
    }

    // Reset all filters
    resetFilters() {
        // Reset category checkboxes
        document.querySelectorAll('#categoryFilter input:checked').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Reset price inputs
        this.minPriceInput.value = 0;
        this.maxPriceInput.value = 500000;

        // Reset rating radio
        document.querySelector('input[name="rating"][value="0"]').checked = true;

        // Reset stock checkbox
        this.inStockCheckbox.checked = true;

        // Reset search
        this.filterSearch.value = '';
        this.searchInput.value = '';

        // Reset sorting
        this.sortSelect.value = 'recommended';

        // Reset state
        this.state.activeFilters = {
            categories: [],
            priceRange: {
                min: 0,
                max: 500000
            },
            minRating: 0,
            inStockOnly: true,
            sortBy: 'recommended',
            searchQuery: ''
        };

        // Update UI and apply filters
        this.updatePriceSlider();
        this.applyFilters();
    }

    // Handle filter changes
    handleCategoryFilter() {
        const selectedCategories = [];
        document.querySelectorAll('#categoryFilter input:checked').forEach(checkbox => {
            selectedCategories.push(checkbox.value);
        });

        this.state.activeFilters.categories = selectedCategories;
        this.applyFilters();
    }

    handlePriceFilter() {
        const min = parseInt(this.minPriceInput.value) || 0;
        const max = parseInt(this.maxPriceInput.value) || 500000;

        // Ensure min <= max
        if (min > max) {
            this.minPriceInput.value = max;
            this.maxPriceInput.value = min;
            this.state.activeFilters.priceRange = {
                min: max,
                max: min
            };
        } else {
            this.state.activeFilters.priceRange = {
                min,
                max
            };
        }

        this.updatePriceSlider();
        this.applyFilters();
    }

    handlePriceSlider() {
        this.minPriceInput.value = this.priceRangeMin.value;
        this.maxPriceInput.value = this.priceRangeMax.value;
        this.handlePriceFilter();
    }

    handleRatingFilter() {
        const selectedRating = document.querySelector('input[name="rating"]:checked').value;
        this.state.activeFilters.minRating = parseFloat(selectedRating);
        this.applyFilters();
    }

    handleStockFilter() {
        this.state.activeFilters.inStockOnly = this.inStockCheckbox.checked;
        this.applyFilters();
    }

    handleSearch() {
        this.state.activeFilters.searchQuery = this.filterSearch.value.trim();
        this.applyFilters();
    }

    handleMainSearch() {
        this.state.activeFilters.searchQuery = this.searchInput.value.trim();
        this.applyFilters();
    }

    handleSearchButton() {
        this.state.activeFilters.searchQuery = this.searchInput.value.trim();
        this.applyFilters();
        this.showToast('Search applied', 'Search filters have been updated.');
    }

    handleSortChange() {
        this.state.activeFilters.sortBy = this.sortSelect.value;
        this.applyFilters();
    }

    resetPriceFilter() {
        this.minPriceInput.value = 0;
        this.maxPriceInput.value = 500000;
        this.handlePriceFilter();
    }

    // Pagination methods
    renderPagination() {
        const totalPages = Math.ceil(this.state.filteredProducts.length / this.state.productsPerPage);
        this.paginationNumbers.innerHTML = '';

        if (totalPages <= 1) {
            this.pagination.style.display = 'none';
            return;
        }

        // Always show first page
        this.addPageNumber(1);

        // Calculate range around current page
        let startPage = Math.max(2, this.state.currentPage - 1);
        let endPage = Math.min(totalPages - 1, this.state.currentPage + 1);

        // Add ellipsis if needed
        if (startPage > 2) {
            this.addEllipsis();
        }

        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
            this.addPageNumber(i);
        }

        // Add ellipsis if needed
        if (endPage < totalPages - 1) {
            this.addEllipsis();
        }

        // Always show last page if there's more than one page
        if (totalPages > 1) {
            this.addPageNumber(totalPages);
        }

        this.updatePaginationButtons();
    }

    addPageNumber(page) {
        const pageElement = document.createElement('button');
        pageElement.className = `page-number ${page === this.state.currentPage ? 'active' : ''}`;
        pageElement.textContent = page;
        pageElement.addEventListener('click', () => this.goToPage(page));
        this.paginationNumbers.appendChild(pageElement);
    }

    addEllipsis() {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'page-number dots';
        ellipsis.textContent = '...';
        this.paginationNumbers.appendChild(ellipsis);
    }

    updatePaginationButtons() {
        const totalPages = Math.ceil(this.state.filteredProducts.length / this.state.productsPerPage);

        this.prevPageBtn.disabled = this.state.currentPage === 1;
        this.nextPageBtn.disabled = this.state.currentPage === totalPages || totalPages === 0;
    }

    goToPage(page) {
        this.state.currentPage = page;
        this.renderProducts();
        this.renderPagination();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    goToPrevPage() {
        if (this.state.currentPage > 1) {
            this.goToPage(this.state.currentPage - 1);
        }
    }

    goToNextPage() {
        const totalPages = Math.ceil(this.state.filteredProducts.length / this.state.productsPerPage);
        if (this.state.currentPage < totalPages) {
            this.goToPage(this.state.currentPage + 1);
        }
    }

    // Product detail modal
    openProductDetail(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        this.currentProductDetail = product;

        const formattedPrice = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(product.price);

        const formattedOriginalPrice = product.originalPrice ?
            new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(product.originalPrice) : '';

        const discount = product.originalPrice ?
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        const stars = this.generateStarRating(product.rating);
        const inWishlist = this.state.wishlist.includes(product.id);

        // Generate specs HTML
        let specsHTML = '';
        for (const [key, value] of Object.entries(product.specs || {})) {
            specsHTML += `
                <li>
                    <span>${key}:</span>
                    <span>${value}</span>
                </li>
            `;
        }

        // Generate images HTML
        let imagesHTML = '';
        const images = product.images || [product.image];
        images.forEach((img, index) => {
            imagesHTML += `
                <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23F0E6D2'/%3E%3C/svg%3E" 
                         data-src="${img}" 
                         alt="${product.name} - View ${index + 1}">
                </div>
            `;
        });

        this.productModalContent.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-images">
                    <div class="main-image">
                        <img id="mainProductImage" src="${images[0]}" alt="${product.name}">
                    </div>
                    <div class="thumbnail-images">
                        ${imagesHTML}
                    </div>
                </div>
                
                <div class="product-detail-info">
                    <div class="product-detail-category">${product.category}</div>
                    <h2 class="product-detail-name">${product.name}</h2>
                    
                    <div class="product-detail-rating">
                        <div class="product-detail-stars">${stars}</div>
                        <div class="product-detail-rating-value">${product.rating.toFixed(1)}</div>
                        <div class="product-detail-reviews">(${product.reviews} reviews)</div>
                        <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-id="${product.id}" style="margin-left: auto;">
                            <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
                        </button>
                    </div>
                    
                    <div class="product-detail-price">
                        <span class="product-detail-current">${formattedPrice}</span>
                        ${formattedOriginalPrice ? `<span class="product-detail-original">${formattedOriginalPrice}</span>` : ''}
                        ${discount > 0 ? `<span class="product-detail-discount">${discount}% OFF</span>` : ''}
                    </div>
                    
                    <p class="product-detail-description">${product.description}</p>
                    
                    <div class="product-detail-specs">
                        <h4 class="specs-title">Specifications</h4>
                        <ul class="specs-list">
                            ${specsHTML}
                        </ul>
                    </div>
                    
                    <div class="product-detail-stock">
                        <strong>Availability:</strong> 
                        <span class="stock-${product.stock.toLowerCase().replace(' ', '-')}">
                            ${product.stock} ${product.stockQuantity ? `(${product.stockQuantity} units)` : ''}
                        </span>
                    </div>
                    
                    <div class="product-detail-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn decrease">-</button>
                            <input type="text" class="quantity-input" value="1" readonly>
                            <button class="quantity-btn increase">+</button>
                        </div>
                        
                        <button class="btn-add-to-cart-large" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        
                        <button class="btn-buy-now" data-id="${product.id}">
                            <i class="fas fa-bolt"></i> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Set up thumbnail click events
        const thumbnails = this.productModalContent.querySelectorAll('.thumbnail');
        const mainImage = this.productModalContent.getElementById('mainProductImage');

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const index = parseInt(thumb.dataset.index);
                mainImage.src = images[index];

                // Update active thumbnail
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });

        // Set up quantity controls
        const quantityInput = this.productModalContent.querySelector('.quantity-input');
        const decreaseBtn = this.productModalContent.querySelector('.quantity-btn.decrease');
        const increaseBtn = this.productModalContent.querySelector('.quantity-btn.increase');

        decreaseBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value) || 1;
            if (value > 1) {
                value--;
                quantityInput.value = value;
            }
        });

        increaseBtn.addEventListener('click', () => {
            let value = parseInt(quantityInput.value) || 1;
            const maxStock = product.stockQuantity || 10;
            if (value < maxStock) {
                value++;
                quantityInput.value = value;
            }
        });

        // Open modal
        this.productModalOverlay.style.display = 'flex';
        setTimeout(() => {
            this.productModalOverlay.style.opacity = '1';
            this.productModal.style.transform = 'translateY(0)';
        }, 10);

        // Setup lazy loading for thumbnails
        this.setupImageLazyLoading();
    }

    // Cart functionality
    addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.state.cart.find(item => item.id === productId);

        if (existingItem) {
            // Check stock availability
            const maxQuantity = product.stockQuantity || 10;
            if (existingItem.quantity + quantity <= maxQuantity) {
                existingItem.quantity += quantity;
                this.showToast('Cart updated', `${product.name} quantity updated.`);
            } else {
                this.showToast('Stock limit reached', `Only ${maxQuantity} units available in stock.`, 'warning');
                return;
            }
        } else {
            this.state.cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
            this.showToast('Added to cart', `${product.name} added to your cart.`);
        }

        // Update cart in storage and UI
        this.saveToStorage('cart', this.state.cart);
        this.updateCartCount();

        // Update add to cart button text temporarily
        const addButton = document.querySelector(`.btn-add-to-cart[data-id="${productId}"]`);
        if (addButton) {
            const originalHTML = addButton.innerHTML;
            addButton.innerHTML = '<i class="fas fa-check"></i> Added';
            addButton.classList.add('added');

            setTimeout(() => {
                addButton.innerHTML = originalHTML;
                addButton.classList.remove('added');
            }, 2000);
        }

        // If cart modal is open, update it
        if (this.cartModalOverlay.style.display === 'flex') {
            this.renderCartModal();
        }
    }

    removeFromCart(productId) {
        this.state.cart = this.state.cart.filter(item => item.id !== productId);
        this.saveToStorage('cart', this.state.cart);
        this.updateCartCount();
        this.renderCartModal();
        this.showToast('Item removed', 'Item has been removed from your cart.');
    }

    updateCartQuantity(productId, change) {
        const item = this.state.cart.find(item => item.id === productId);
        if (!item) return;

        const product = products.find(p => p.id === productId);
        const maxQuantity = product?.stockQuantity || 10;

        const newQuantity = item.quantity + change;

        if (newQuantity < 1) {
            this.removeFromCart(productId);
        } else if (newQuantity > maxQuantity) {
            this.showToast('Stock limit', `Maximum ${maxQuantity} units allowed.`, 'warning');
        } else {
            item.quantity = newQuantity;
            this.saveToStorage('cart', this.state.cart);
            this.updateCartCount();
            this.renderCartModal();
        }
    }

    renderCartModal() {
        if (this.state.cart.length === 0) {
            this.cartModalContent.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h4>Your cart is empty</h4>
                    <p>Add some products to your cart to see them here.</p>
                </div>
            `;

            document.getElementById('cartTotalAmount').textContent = '₹0';
            return;
        }

        let itemsHTML = '';
        let subtotal = 0;

        this.state.cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return;

            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const formattedPrice = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(item.price);

            const formattedTotal = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(itemTotal);

            itemsHTML += `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <div class="cart-item-price">${formattedPrice}</div>
                        <div class="cart-item-actions">
                            <div class="cart-item-quantity">
                                <button class="cart-quantity-btn decrease" data-id="${item.id}">-</button>
                                <span>${item.quantity}</span>
                                <button class="cart-quantity-btn increase" data-id="${item.id}">+</button>
                            </div>
                            <div class="cart-item-total">${formattedTotal}</div>
                            <button class="cart-item-remove" data-id="${item.id}">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        const tax = subtotal * 0.18; // 18% tax
        const shipping = 99;
        const total = subtotal + tax + shipping;

        const formattedSubtotal = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(subtotal);

        const formattedTax = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(tax);

        const formattedTotal = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(total);

        this.cartModalContent.innerHTML = `
            <div class="cart-items">
                ${itemsHTML}
            </div>
        `;

        document.getElementById('cartTotalAmount').textContent = formattedTotal;
    }

    // Wishlist functionality
    toggleWishlist(productId) {
        const index = this.state.wishlist.indexOf(productId);

        if (index === -1) {
            this.state.wishlist.push(productId);
            this.showToast('Added to wishlist', 'Product added to your wishlist.');
        } else {
            this.state.wishlist.splice(index, 1);
            this.showToast('Removed from wishlist', 'Product removed from your wishlist.');
        }

        this.saveToStorage('wishlist', this.state.wishlist);
        this.updateWishlistCount();

        // Update wishlist button state
        const wishlistBtn = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
        if (wishlistBtn) {
            const icon = wishlistBtn.querySelector('i');
            if (index === -1) {
                wishlistBtn.classList.add('active');
                icon.classList.replace('far', 'fas');
            } else {
                wishlistBtn.classList.remove('active');
                icon.classList.replace('fas', 'far');
            }
        }

        // If wishlist modal is open, update it
        if (this.wishlistModalOverlay.style.display === 'flex') {
            this.renderWishlistModal();
        }
    }

    removeFromWishlist(productId) {
        this.state.wishlist = this.state.wishlist.filter(id => id !== productId);
        this.saveToStorage('wishlist', this.state.wishlist);
        this.updateWishlistCount();
        this.renderWishlistModal();

        // Update wishlist button in product grid
        const wishlistBtn = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
        if (wishlistBtn) {
            wishlistBtn.classList.remove('active');
            wishlistBtn.querySelector('i').classList.replace('fas', 'far');
        }
    }

    moveToCartFromWishlist(productId) {
        this.addToCart(productId);
        this.removeFromWishlist(productId);
    }

    renderWishlistModal() {
        if (this.state.wishlist.length === 0) {
            this.wishlistModalContent.innerHTML = `
                <div class="empty-wishlist">
                    <i class="far fa-heart"></i>
                    <h4>Your wishlist is empty</h4>
                    <p>Add products to your wishlist to see them here.</p>
                </div>
            `;
            return;
        }

        let itemsHTML = '';

        this.state.wishlist.forEach(productId => {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const formattedPrice = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(product.price);

            itemsHTML += `
                <div class="wishlist-item">
                    <div class="wishlist-item-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="wishlist-item-info">
                        <h4 class="wishlist-item-name">${product.name}</h4>
                        <div class="wishlist-item-price">${formattedPrice}</div>
                        <div class="wishlist-item-actions">
                            <button class="btn-move-to-cart" data-id="${product.id}">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button class="btn-remove-wishlist" data-id="${product.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        this.wishlistModalContent.innerHTML = `
            <div class="wishlist-items">
                ${itemsHTML}
            </div>
        `;
    }

    // Orders functionality
    renderOrdersModal() {
        if (this.state.orders.length === 0) {
            this.ordersModalContent.innerHTML = `
                <div class="empty-orders">
                    <i class="fas fa-box-open"></i>
                    <h4>No orders yet</h4>
                    <p>Your order history will appear here.</p>
                </div>
            `;
            return;
        }

        let ordersHTML = '';

        this.state.orders.slice().reverse().forEach((order, index) => {
            const orderDate = new Date(order.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            });

            let itemsHTML = '';
            let orderTotal = 0;

            order.items.forEach(item => {
                const itemTotal = item.price * item.quantity;
                orderTotal += itemTotal;

                itemsHTML += `
                    <div class="order-item">
                        <span class="order-item-name">${item.name} × ${item.quantity}</span>
                        <span class="order-item-price">₹${itemTotal.toLocaleString('en-IN')}</span>
                    </div>
                `;
            });

            const formattedTotal = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(orderTotal);

            ordersHTML += `
                <div class="order-card">
                    <div class="order-header">
                        <div>
                            <div class="order-id">${order.id}</div>
                            <div class="order-date">${orderDate}</div>
                        </div>
                        <div class="order-status status-${order.status.toLowerCase()}">
                            ${order.status}
                        </div>
                    </div>
                    <div class="order-items">
                        ${itemsHTML}
                    </div>
                    <div class="order-total">
                        <span>Total:</span>
                        <span>${formattedTotal}</span>
                    </div>
                </div>
            `;
        });

        this.ordersModalContent.innerHTML = `
            <div class="orders-list">
                ${ordersHTML}
            </div>
        `;
    }

    // Modal controls
    openModal(type) {
        let overlay, modal;

        switch (type) {
            case 'product':
                overlay = this.productModalOverlay;
                modal = this.productModal;
                break;
            case 'cart':
                overlay = this.cartModalOverlay;
                modal = this.cartModal;
                this.renderCartModal();
                break;
            case 'wishlist':
                overlay = this.wishlistModalOverlay;
                modal = this.wishlistModal;
                this.renderWishlistModal();
                break;
            case 'orders':
                overlay = this.ordersModalOverlay;
                modal = this.ordersModal;
                this.renderOrdersModal();
                break;
            case 'mobileFilter':
                overlay = this.mobileFilterOverlay;
                modal = this.mobileFilterModal;
                this.setupMobileFilters();
                break;
        }

        if (overlay && modal) {
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.style.opacity = '1';
                modal.style.transform = 'translateY(0)';
            }, 10);
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(type) {
        let overlay, modal;

        switch (type) {
            case 'product':
                overlay = this.productModalOverlay;
                modal = this.productModal;
                break;
            case 'cart':
                overlay = this.cartModalOverlay;
                modal = this.cartModal;
                break;
            case 'wishlist':
                overlay = this.wishlistModalOverlay;
                modal = this.wishlistModal;
                break;
            case 'orders':
                overlay = this.ordersModalOverlay;
                modal = this.ordersModal;
                break;
            case 'mobileFilter':
                overlay = this.mobileFilterOverlay;
                modal = this.mobileFilterModal;
                break;
        }

        if (overlay && modal) {
            overlay.style.opacity = '0';
            modal.style.transform = 'translateY(20px)';

            setTimeout(() => {
                overlay.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        }
    }

    openCartModal() {
        this.openModal('cart');
    }

    openWishlistModal() {
        this.openModal('wishlist');
    }

    openOrdersModal() {
        this.openModal('orders');
    }

    // Mobile navigation
    toggleMobileNav() {
        this.mobileNav.classList.toggle('active');
        document.body.style.overflow = this.mobileNav.classList.contains('active') ? 'hidden' : '';
    }

    closeMobileNavHandler() {
        this.mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    }

    openMobileFilters() {
        this.openModal('mobileFilter');
    }

    setupMobileFilters() {
        const filtersSidebar = document.getElementById('filtersSidebar');
        const filtersClone = filtersSidebar.cloneNode(true);

        // Remove the header and make some adjustments
        const filtersHeader = filtersClone.querySelector('.filters-header');
        if (filtersHeader) filtersHeader.remove();

        this.mobileFilterContent.innerHTML = '';
        this.mobileFilterContent.appendChild(filtersClone);

        // Sync current filter values to mobile filters
        this.syncFiltersToMobile();

        // Add event listeners to mobile filter inputs
        this.setupMobileFilterEvents();
    }

    syncFiltersToMobile() {
        // Sync categories
        document.querySelectorAll('#mobileFilterContent input[type="checkbox"]').forEach(checkbox => {
            const value = checkbox.value;
            checkbox.checked = this.state.activeFilters.categories.includes(value);
        });

        // Sync price
        const mobileMinPrice = this.mobileFilterContent.querySelector('#minPrice');
        const mobileMaxPrice = this.mobileFilterContent.querySelector('#maxPrice');
        if (mobileMinPrice && mobileMaxPrice) {
            mobileMinPrice.value = this.state.activeFilters.priceRange.min;
            mobileMaxPrice.value = this.state.activeFilters.priceRange.max;
        }

        // Sync rating
        document.querySelectorAll('#mobileFilterContent input[name="rating"]').forEach(radio => {
            radio.checked = parseFloat(radio.value) === this.state.activeFilters.minRating;
        });

        // Sync stock
        const mobileInStock = this.mobileFilterContent.querySelector('#inStock');
        if (mobileInStock) {
            mobileInStock.checked = this.state.activeFilters.inStockOnly;
        }

        // Sync search
        const mobileSearch = this.mobileFilterContent.querySelector('#filterSearch');
        if (mobileSearch) {
            mobileSearch.value = this.state.activeFilters.searchQuery;
        }
    }

    setupMobileFilterEvents() {
        const mobileCategoryInputs = this.mobileFilterContent.querySelectorAll('input[type="checkbox"]');
        mobileCategoryInputs.forEach(input => {
            input.addEventListener('change', () => this.updateMobileFilters());
        });

        const mobileRatingInputs = this.mobileFilterContent.querySelectorAll('input[name="rating"]');
        mobileRatingInputs.forEach(input => {
            input.addEventListener('change', () => this.updateMobileFilters());
        });

        const mobileMinPrice = this.mobileFilterContent.querySelector('#minPrice');
        const mobileMaxPrice = this.mobileFilterContent.querySelector('#maxPrice');
        const mobilePriceRangeMin = this.mobileFilterContent.querySelector('#priceRangeMin');
        const mobilePriceRangeMax = this.mobileFilterContent.querySelector('#priceRangeMax');

        if (mobileMinPrice && mobileMaxPrice && mobilePriceRangeMin && mobilePriceRangeMax) {
            mobileMinPrice.addEventListener('input', () => this.updateMobileFilters());
            mobileMaxPrice.addEventListener('input', () => this.updateMobileFilters());
            mobilePriceRangeMin.addEventListener('input', function() {
                mobileMinPrice.value = this.value;
                this.updateMobileFilters();
            });
            mobilePriceRangeMax.addEventListener('input', function() {
                mobileMaxPrice.value = this.value;
                this.updateMobileFilters();
            });
        }

        const mobileInStock = this.mobileFilterContent.querySelector('#inStock');
        if (mobileInStock) {
            mobileInStock.addEventListener('change', () => this.updateMobileFilters());
        }

        const mobileSearch = this.mobileFilterContent.querySelector('#filterSearch');
        if (mobileSearch) {
            mobileSearch.addEventListener('input', () => this.updateMobileFilters());
        }
    }

    updateMobileFilters() {
        // Get values from mobile filters
        const mobileCategories = [];
        this.mobileFilterContent.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            if (checkbox.value !== 'on') { // Exclude inStock checkbox
                mobileCategories.push(checkbox.value);
            }
        });

        const mobileMinPrice = parseInt(this.mobileFilterContent.querySelector('#minPrice')?.value) || 0;
        const mobileMaxPrice = parseInt(this.mobileFilterContent.querySelector('#maxPrice')?.value) || 500000;
        const mobileRating = parseFloat(this.mobileFilterContent.querySelector('input[name="rating"]:checked')?.value) || 0;
        const mobileInStock = this.mobileFilterContent.querySelector('#inStock')?.checked || true;
        const mobileSearch = this.mobileFilterContent.querySelector('#filterSearch')?.value || '';

        // Update desktop filters to match
        document.querySelectorAll('#categoryFilter input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = mobileCategories.includes(checkbox.value);
        });

        this.minPriceInput.value = mobileMinPrice;
        this.maxPriceInput.value = mobileMaxPrice;

        document.querySelectorAll('input[name="rating"]').forEach(radio => {
            radio.checked = parseFloat(radio.value) === mobileRating;
        });

        this.inStockCheckbox.checked = mobileInStock;
        this.filterSearch.value = mobileSearch;

        // Update state and apply filters
        this.state.activeFilters.categories = mobileCategories;
        this.state.activeFilters.priceRange = {
            min: mobileMinPrice,
            max: mobileMaxPrice
        };
        this.state.activeFilters.minRating = mobileRating;
        this.state.activeFilters.inStockOnly = mobileInStock;
        this.state.activeFilters.searchQuery = mobileSearch;

        this.updatePriceSlider();
        this.applyFilters();
    }

    clearMobileFiltersHandler() {
        // Reset mobile filters
        this.mobileFilterContent.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        const mobileMinPrice = this.mobileFilterContent.querySelector('#minPrice');
        const mobileMaxPrice = this.mobileFilterContent.querySelector('#maxPrice');
        if (mobileMinPrice && mobileMaxPrice) {
            mobileMinPrice.value = 0;
            mobileMaxPrice.value = 500000;
        }

        const mobileRatingAll = this.mobileFilterContent.querySelector('input[name="rating"][value="0"]');
        if (mobileRatingAll) mobileRatingAll.checked = true;

        const mobileInStock = this.mobileFilterContent.querySelector('#inStock');
        if (mobileInStock) mobileInStock.checked = true;

        const mobileSearch = this.mobileFilterContent.querySelector('#filterSearch');
        if (mobileSearch) mobileSearch.value = '';

        this.updateMobileFilters();
    }

    applyMobileFiltersHandler() {
        this.closeModal('mobileFilter');
    }

    // Checkout functionality
    openCheckoutPage() {
        if (this.state.cart.length === 0) {
            this.showToast('Cart empty', 'Add items to your cart before checkout.', 'warning');
            return;
        }

        this.closeModal('cart');

        // Hide main content
        document.querySelector('main').style.display = 'none';
        document.querySelector('footer').style.display = 'none';

        // Show checkout page
        this.checkoutPage.style.display = 'block';

        // Render checkout items
        this.renderCheckoutItems();
    }

    closeCheckoutPage() {
        // Show main content
        document.querySelector('main').style.display = 'block';
        document.querySelector('footer').style.display = 'block';

        // Hide checkout page
        this.checkoutPage.style.display = 'none';
    }

    renderCheckoutItems() {
        const container = document.getElementById('checkoutSummaryItems');
        let itemsHTML = '';
        let subtotal = 0;

        this.state.cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return;

            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const formattedPrice = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(item.price);

            itemsHTML += `
                <div class="summary-item">
                    <div>
                        <div class="summary-item-name">${item.name}</div>
                        <div class="summary-item-quantity">${formattedPrice} × ${item.quantity}</div>
                    </div>
                    <div class="summary-item-price">₹${itemTotal.toLocaleString('en-IN')}</div>
                </div>
            `;
        });

        const tax = subtotal * 0.18;
        const shipping = 99;
        const total = subtotal + tax + shipping;

        document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
        document.getElementById('checkoutTax').textContent = `₹${tax.toLocaleString('en-IN')}`;
        document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString('en-IN')}`;

        container.innerHTML = itemsHTML;
    }

    handlePaymentMethodChange(e) {
        const method = e.target.value;

        // Hide all payment details
        document.querySelectorAll('.payment-details').forEach(el => {
            el.style.display = 'none';
        });

        // Show selected payment details
        const detailsId = `${method}Details`;
        const detailsEl = document.getElementById(detailsId);
        if (detailsEl) {
            detailsEl.style.display = 'block';
        }
    }

    placeOrder() {
        // Validate form
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim();
        const pincode = document.getElementById('pincode').value.trim();

        if (!fullName || !email || !phone || !address || !city || !state || !pincode) {
            this.showToast('Missing information', 'Please fill all required fields.', 'warning');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showToast('Invalid email', 'Please enter a valid email address.', 'warning');
            return;
        }

        // Validate phone
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            this.showToast('Invalid phone', 'Please enter a valid 10-digit phone number.', 'warning');
            return;
        }

        // Create order
        const orderId = `LC-${Date.now().toString().slice(-6)}`;
        const orderDate = new Date().toISOString();
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        const order = {
            id: orderId,
            date: orderDate,
            status: 'Processing',
            items: [...this.state.cart],
            shipping: {
                name: fullName,
                email: email,
                phone: phone,
                address: address,
                city: city,
                state: state,
                pincode: pincode
            },
            payment: paymentMethod
        };

        // Add to orders
        this.state.orders.push(order);
        this.saveToStorage('orders', this.state.orders);

        // Clear cart
        this.state.cart = [];
        this.saveToStorage('cart', this.state.cart);
        this.updateCartCount();

        // Show order success page
        this.showOrderSuccess(order);
    }

    showOrderSuccess(order) {
        // Hide checkout page
        this.checkoutPage.style.display = 'none';

        // Show success page
        this.orderSuccessPage.style.display = 'block';

        // Update order details
        const orderDate = new Date(order.date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });

        // Calculate order total
        let orderTotal = 0;
        order.items.forEach(item => {
            orderTotal += item.price * item.quantity;
        });

        const tax = orderTotal * 0.18;
        const shipping = 99;
        const total = orderTotal + tax + shipping;

        const formattedTotal = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(total);

        document.getElementById('successOrderId').textContent = order.id;
        document.getElementById('successOrderDate').textContent = orderDate;
        document.getElementById('successOrderAmount').textContent = formattedTotal;
        document.getElementById('successPaymentMethod').textContent =
            order.payment.toUpperCase();
    }

    closeOrderSuccess() {
        // Hide success page
        this.orderSuccessPage.style.display = 'none';

        // Show main content
        document.querySelector('main').style.display = 'block';
        document.querySelector('footer').style.display = 'block';

        // Reset checkout form
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('address').value = '';
        document.getElementById('city').value = '';
        document.getElementById('state').value = '';
        document.getElementById('pincode').value = '';

        this.showToast('Order placed', 'Your order has been placed successfully!', 'success');
    }

    // Toast notification
    showToast(title, message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = 'toast';

        let icon = 'info-circle';
        switch (type) {
            case 'success':
                icon = 'check-circle';
                toast.style.borderLeftColor = '#4CAF50';
                break;
            case 'warning':
                icon = 'exclamation-triangle';
                toast.style.borderLeftColor = '#FF9800';
                break;
            case 'error':
                icon = 'times-circle';
                toast.style.borderLeftColor = '#F44336';
                break;
            default:
                icon = 'info-circle';
                toast.style.borderLeftColor = '#2196F3';
        }

        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        this.toastContainer.appendChild(toast);

        // Auto remove after 5 seconds
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 5000);

        // Close button
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new ECommerceApp();
    window.ecommerceApp = app; // Make available globally for debugging
});