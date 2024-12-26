// server/src/seedData/products.js
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
      url: "https://example.com/headphones.jpg"
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
      url: "https://example.com/shoes.jpg"  
    }]
  },
  {
    name: "Cotton T-Shirt",
    description: "Comfortable 100% cotton t-shirt",
    price: 29.99,
    category: "Clothing",
    color: "White",
    size: "M",
    stock: 100,
    images: [{
      public_id: "tshirt_1",
      url: "https://example.com/tshirt.jpg"
    }]
  }
];

module.exports = products;