import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://backendgomti.vercel.app/api",
  withCredentials: false,
});

export default instance;
