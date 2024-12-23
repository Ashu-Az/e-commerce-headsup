const Product = require('../models/Product');
const asyncHandler = require('../middleware/asyncHandler');

exports.getProducts = asyncHandler(async (req, res) => {
  const { search, category, color, size } = req.query;
  let query = {};

  if (search) {
    query = {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } }
      ]
    };
  }

  if (category) query.category = category;
  if (color) query.color = color;
  if (size) query.size = size;

  const products = await Product.find(query);
  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

exports.getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, data: product });
});

exports.createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, data: product });
});

exports.updateProduct = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: product });
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  await product.deleteOne();
  res.json({ success: true, message: 'Product deleted' });
});

exports.getFilterOptions = asyncHandler(async (req, res) => {
  const categories = await Product.distinct('category');
  const colors = await Product.distinct('color');
  const sizes = await Product.distinct('size');
  
  res.json({
    success: true,
    data: { categories, colors, sizes }
  });
});