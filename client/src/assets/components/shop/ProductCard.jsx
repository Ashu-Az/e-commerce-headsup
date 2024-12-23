import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <Link to={`/product/${product._id}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <div className="mt-2 flex items-center gap-2">
            <span>{product.category}</span>
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: product.color }}
            />
            <span>{product.size}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;