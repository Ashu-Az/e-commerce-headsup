import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts, fetchFilterOptions } from '../features/products/productSlice';
import ProductGrid from '../assets/components/shop/ProductGrid';
import FilterPanel from '../assets/components/shop/FilterPanel';
import SearchBar from '../assets/components/common/SearchBar';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterOptions());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <SearchBar />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <FilterPanel />
        </div>
        <div className="w-full md:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Shop;