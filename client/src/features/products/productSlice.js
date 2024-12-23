// src/store/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productsApi } from '../../services/productsApi';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters) => {
    try {
      const response = await productsApi.getProducts(filters);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchFilterOptions = createAsyncThunk(
  'products/fetchFilterOptions',
  async () => {
    try {
      const response = await productsApi.getFilterOptions();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filterOptions: {
      categories: [],
      colors: [],
      sizes: []
    },
    filters: {
      category: '',
      color: '',
      size: '',
      search: ''
    },
    loading: false,
    error: null
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = {
        category: '',
        color: '',
        size: '',
        search: ''
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchFilterOptions.fulfilled, (state, action) => {
        state.filterOptions = action.payload;
      });
  }
});

export const { setFilters, resetFilters } = productSlice.actions;
export default productSlice.reducer;