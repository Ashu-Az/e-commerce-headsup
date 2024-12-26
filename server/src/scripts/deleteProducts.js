// scripts/deleteProducts.js
const axios = require('axios');

const deleteProductsByImageUrl = async () => {
  try {
    const response = await axios.get('https://e-commerce-headsup.onrender.com/api/products');
    const products = response.data.data;
    const productsToDelete = products.filter(product => 
      product.images.some(image => image.url.includes('example.com'))
    );

    for (const product of productsToDelete) {
      await axios.delete(`https://e-commerce-headsup.onrender.com/api/products/${product._id}`);
      console.log(`Deleted product: ${product.name}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

deleteProductsByImageUrl();