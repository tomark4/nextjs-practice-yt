import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.API_NEXT_URL || "http://localhost:3000/api",
});
