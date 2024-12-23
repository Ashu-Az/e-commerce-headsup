import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const productsApi = {
  getProducts: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await axios.get(`${API_URL}/products?${params}`);
    return response.data;
  },

  getFilterOptions: async () => {
    const response = await axios.get(`${API_URL}/products/filters`);
    return response.data;
  },

  getProduct: async (id) => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  }
};