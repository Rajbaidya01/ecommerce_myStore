import axios from "axios";

const API = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const res = await axios.get(`${API}/products`);
  return res.data;
};

export const fetchCategories = async () => {
  const res = await axios.get(`${API}/products/categories`);
  return res.data;
};