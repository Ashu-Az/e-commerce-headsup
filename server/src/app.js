const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const productRoutes = require('./routes/productRoutes');

// Load env vars
dotenv.config();

// Connect to database
connectDatabase();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Mount routers
app.use('/api/products', productRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

// At the end of app.js
module.exports = app;