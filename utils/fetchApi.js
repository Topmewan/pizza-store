import axios from "axios";

export const baseUrl = 'http://localhost:3000/api/products';
export const orderUrl = 'http://localhost:3000/api/orders';

export const fetchApi = async (url) => {
  const {data} = await axios.get(url);
  return data;
}