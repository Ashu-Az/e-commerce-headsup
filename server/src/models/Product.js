// seedData/products.js
const products = [
  {
    name: "Wireless Headphones",
    description: "Premium noise cancelling wireless headphones with extended battery life",
    price: 199.99,
    category: "Electronics",
    color: "Black", 
    size: "NA",
    stock: 50,
    images: [{
      public_id: "headphones_1",
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070"
    }]
  },
  {
    name: "Running Shoes",
    description: "Professional running shoes with enhanced cushioning",
    price: 89.99,
    category: "Sports",
    color: "Blue",
    size: "42",
    stock: 30,
    images: [{
      public_id: "shoes_1", 
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070"
    }]
  },
  {
    name: "Cotton T-Shirt",
    description: "Premium cotton t-shirt with comfort fit",
    price: 29.99,
    category: "Clothing", 
    color: "White",
    size: "M",
    stock: 100,
    images: [{
      public_id: "tshirt_1",
      url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780"
    }]
  },
  {
    name: "Smart Watch",
    description: "Advanced smartwatch with health tracking",
    price: 299.99,
    category: "Electronics",
    color: "Black",
    size: "NA",
    stock: 25,
    images: [{
      public_id: "watch_1",
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999"
    }]
  },
  {
    name: "Gaming Laptop",
    description: "High-performance gaming laptop",
    price: 1299.99,
    category: "Electronics",
    color: "Black",
    size: "NA", 
    stock: 10,
    images: [{
      public_id: "laptop_1",
      url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068"
    }]
  }
  ];
   
   module.exports = products;