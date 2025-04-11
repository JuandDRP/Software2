import axios from 'axios';
const API_URL = 'http://localhost:3002'; // microservicio de pedidos

export const realizarPedido = async (bebida) => {
  const res = await axios.post(`${API_URL}/pedido`, { bebida });
  return res.data;
};

export const consultarEstado = async (id) => {
  const res = await axios.get(`${API_URL}/estado/${id}`);
  return res.data;
};
