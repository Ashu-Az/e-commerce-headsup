const products = [
    {
        name: "Wireless Headphones",
        description: "Noise cancelling wireless headphones",
        price: 199.99,
        category: "Electronics",
        color: "Black",
        size: "NA",
        stock: 50,
        images: [{
            public_id: "headphones_1",
            url: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117"
        }]
    },
    {
        name: "Running Shoes",
        description: "Professional running shoes",
        price: 89.99,
        category: "Sports",
        color: "Blue",
        size: "42",
        stock: 30,
        images: [{
            public_id: "shoes_1",
            url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        }]
    },
    {
        name: "Cotton T-Shirt",
        description: "Premium cotton t-shirt",
        price: 29.99,
        category: "Clothing",
        color: "White",
        size: "M",
        stock: 100,
        images: [{
            public_id: "tshirt_1",
            url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        }]
    },
    {
        name: "Leather Wallet",
        description: "Genuine leather wallet for men",
        price: 49.99,
        category: "Accessories",
        color: "Brown",
        size: "NA",
        stock: 200,
        images: [{
            public_id: "wallet_1",
            url: "https://images.unsplash.com/photo-1600767628584-4c982015b51c"
        }]
    },
    {
        name: "Smartphone",
        description: "Latest model with high performance",
        price: 799.99,
        category: "Electronics",
        color: "Silver",
        size: "NA",
        stock: 120,
        images: [{
            public_id: "smartphone_1",
            url: "https://images.unsplash.com/photo-1606787211323-d6a4d0562e6b"
        }]
    },
    {
        name: "Wrist Watch",
        description: "Elegant wristwatch with stainless steel",
        price: 150.00,
        category: "Accessories",
        color: "Silver",
        size: "NA",
        stock: 60,
        images: [{
            public_id: "watch_1",
            url: "https://images.unsplash.com/photo-1512393104413-d2c0c6d1b78b"
        }]
    },
    {
        name: "Sunglasses",
        description: "UV protection sunglasses for all seasons",
        price: 69.99,
        category: "Accessories",
        color: "Black",
        size: "NA",
        stock: 80,
        images: [{
            public_id: "sunglasses_1",
            url: "https://images.unsplash.com/photo-1586746682061-7e2d52463e83"
        }]
    },
    {
        name: "Yoga Mat",
        description: "Durable and non-slip yoga mat",
        price: 25.99,
        category: "Sports",
        color: "Purple",
        size: "NA",
        stock: 150,
        images: [{
            public_id: "yogamat_1",
            url: "https://images.unsplash.com/photo-1585781071120-5b220de5e8e1"
        }]
    },
    {
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with powerful sound",
        price: 129.99,
        category: "Electronics",
        color: "Black",
        size: "NA",
        stock: 200,
        images: [{
            public_id: "speaker_1",
            url: "https://images.unsplash.com/photo-1618287218257-3bfa74a63dbe"
        }]
    },
    {
        name: "Laptop Bag",
        description: "Spacious laptop bag with multiple compartments",
        price: 39.99,
        category: "Accessories",
        color: "Grey",
        size: "NA",
        stock: 70,
        images: [{
            public_id: "laptopbag_1",
            url: "https://images.unsplash.com/photo-1605209229880-6f62b6a14476"
        }]
    },
    {
        name: "Air Conditioner",
        description: "Energy-efficient air conditioner for small rooms",
        price: 399.99,
        category: "Home",
        color: "White",
        size: "NA",
        stock: 30,
        images: [{
            public_id: "airconditioner_1",
            url: "https://images.unsplash.com/photo-1606075244604-4f755b5b3833"
        }]
    },
    {
        name: "Dining Table",
        description: "Elegant dining table with four chairs",
        price: 299.99,
        category: "Furniture",
        color: "Wood",
        size: "NA",
        stock: 50,
        images: [{
            public_id: "diningtable_1",
            url: "https://images.unsplash.com/photo-1575083807445-b98a49e6f04b"
        }]
    },
    {
        name: "Kitchen Blender",
        description: "High-power blender for smoothies and more",
        price: 89.99,
        category: "Home",
        color: "Red",
        size: "NA",
        stock: 100,
        images: [{
            public_id: "blender_1",
            url: "https://images.unsplash.com/photo-1586207800750-36b13427940e"
        }]
    },
    {
        name: "Coffee Maker",
        description: "Automatic coffee maker with multiple settings",
        price: 119.99,
        category: "Home",
        color: "Black",
        size: "NA",
        stock: 50,
        images: [{
            public_id: "coffeemaker_1",
            url: "https://images.unsplash.com/photo-1600357174695-c9907a87c640"
        }]
    },
    {
        name: "Smart Watch",
        description: "Fitness-focused smartwatch with health tracking",
        price: 179.99,
        category: "Electronics",
        color: "Black",
        size: "NA",
        stock: 60,
        images: [{
            public_id: "smartwatch_1",
            url: "https://images.unsplash.com/photo-1581093582144-87c7b3b7a634"
        }]
    },
    {
        name: "Electric Toothbrush",
        description: "Rechargeable electric toothbrush with multiple settings",
        price: 49.99,
        category: "Health",
        color: "White",
        size: "NA",
        stock: 150,
        images: [{
            public_id: "toothbrush_1",
            url: "https://images.unsplash.com/photo-1575683327651-9e54137245fb"
        }]
    },
    {
        name: "Bookshelf",
        description: "Wooden bookshelf with adjustable shelves",
        price: 129.99,
        category: "Furniture",
        color: "Brown",
        size: "NA",
        stock: 80,
        images: [{
            public_id: "bookshelf_1",
            url: "https://images.unsplash.com/photo-1582622554177-8aaf6d4e2060"
        }]
    },
    {
        name: "Camera Tripod",
        description: "Adjustable tripod for cameras and smartphones",
        price: 59.99,
        category: "Electronics",
        color: "Black",
        size: "NA",
        stock: 100,
        images: [{
            public_id: "tripod_1",
            url: "https://images.unsplash.com/photo-1600152360501-2069e50b6e4a"
        }]
    },
    {
        name: "Fitness Tracker",
        description: "Fitness tracker with heart rate monitoring",
        price: 49.99,
        category: "Health",
        color: "Blue",
        size: "NA",
        stock: 90,
        images: [{
            public_id: "fitnesstracker_1",
            url: "https://images.unsplash.com/photo-1580634603122-1f87c50b93ad"
        }]
    },
    {
        name: "Backpack",
        description: "Durable backpack for hiking and travel",
        price: 69.99,
        category: "Accessories",
        color: "Green",
        size: "NA",
        stock: 150,
        images: [{
            public_id: "backpack_1",
            url: "https://images.unsplash.com/photo-1599847348754-9d497f28a505"
        }]
    }
];

module.exports = products;
