import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://localhost:5001', // local
  baseURL: 'https://54.252.149.91/', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;

