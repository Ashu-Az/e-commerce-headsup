const mongoose = require('mongoose');

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
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Adding index for search functionality
productSchema.index({ 
  name: 'text', 
  description: 'text',
  category: 'text'
});

module.exports = mongoose.model('Product', productSchema);