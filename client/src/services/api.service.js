import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", // your backend URL
  withCredentials: false,
  timeout: 10000
});

export default api;
