const Product = require('../models/Product');
const products = require('../seedData/products');
const connectDatabase = require('../config/database');
require('dotenv').config();

const seedProducts = async () => {
  try {
    await connectDatabase();
    await Product.deleteMany();
    console.log('Products deleted');
    
    await Product.insertMany(products);
    console.log('Products added');
    
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedProducts();