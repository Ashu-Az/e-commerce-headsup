// server/src/utils/seeder.js
const mongoose = require('mongoose');
const products = require('../seedData/products');
require('dotenv').config();

const productSchema = new mongoose.Schema({
 name: {
   type: String,
   required: [true, 'Please enter product name'],
   trim: true,
   maxLength: [100, 'Product name cannot exceed 100 characters']
 },
 description: {
   type: String, 
   required: [true, 'Please enter product description'],
   maxLength: [2000, 'Description cannot exceed 2000 characters']
 },
 price: {
   type: Number,
   required: [true, 'Please enter product price'],
   maxLength: [8, 'Price cannot exceed 8 characters'],
   default: 0.0
 },
 category: {
   type: String,
   required: [true, 'Please select category for this product'],
   enum: {
     values: [
       'Electronics',
       'Clothing', 
       'Furniture',
       'Books',
       'Sports',
       'Beauty',
       'Health',
       'Toys',
       'Automotive',
       'Home'
     ],
     message: 'Please select correct category'
   }
 },
 color: {
   type: String,
   required: [true, 'Please enter product color']
 },
 size: {
   type: String,
   required: [true, 'Please select size'],
   enum: {
     values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'NA', '38', '39', '40', '41', '42', '43', '44', '45'],
     message: 'Please select correct size'
   }
 },
 ratings: {
   type: Number,
   default: 0
 },
 images: [
   {
     public_id: {
       type: String,
       required: true
     },
     url: {
       type: String,
       required: true
     }
   }
 ],
 stock: {
   type: Number,
   required: [true, 'Please enter product stock'],
   maxLength: [5, 'Stock cannot exceed 5 characters'],
   default: 0
 },
 numOfReviews: {
   type: Number,
   default: 0
 },
 reviews: [
   {
     user: {
       type: mongoose.Schema.ObjectId,
       ref: 'User',
       required: true
     },
     name: {
       type: String,
       required: true
     },
     rating: {
       type: Number,
       required: true
     },
     comment: {
       type: String,
       required: true  
     }
   }
 ],
 createdAt: {
   type: Date,
   default: Date.now
 }
});

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    const Product = mongoose.model('Product', productSchema);
    await Product.deleteMany();
    console.log('Products deleted');
    
    await Product.insertMany(products);
    console.log('Products added');

    const storedProducts = await Product.find();
    console.log(`Found ${storedProducts.length} products:`);
    console.log(JSON.stringify(storedProducts, null, 2));
    
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};





seedProducts();