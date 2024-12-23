import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from "../../../features/products/productSlice";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const { filterOptions, filters } = useSelector(state => state.products);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <select 
          value={filters.category}
          onChange={(e) => dispatch(setFilters({ category: e.target.value }))}
          className="w-full p-2 border rounded"
        >
          <option value="">All Categories</option>
          {filterOptions.categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Color</label>
        <select
          value={filters.color}
          onChange={(e) => dispatch(setFilters({ color: e.target.value }))}
          className="w-full p-2 border rounded"
        >
          <option value="">All Colors</option>
          {filterOptions.colors.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Size</label>
        <select
          value={filters.size}
          onChange={(e) => dispatch(setFilters({ size: e.target.value }))}
          className="w-full p-2 border rounded"
        >
          <option value="">All Sizes</option>
          {filterOptions.sizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;