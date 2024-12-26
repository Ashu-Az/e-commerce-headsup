// src/services/productsApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1'
});

export const productsApi = {
  getProducts: async (filters = {}) => {
    const response = await api.get('/products', { params: filters });
    return response.data.data;
  }
};