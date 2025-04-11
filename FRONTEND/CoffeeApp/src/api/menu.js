import axios from 'axios';
const API_URL = 'http://localhost:3001'; // microservicio de menú

export const obtenerMenu = async () => {
  const res = await axios.get(`${API_URL}/menu`);
  return res.data;
};
