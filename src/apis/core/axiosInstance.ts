import axios from "axios";
import { getToken } from "../../utils/authToken";

const URL = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: { Authorization: getToken() },
});

axiosInstance.interceptors.response.use((config) => {
  if (config.data.token) {
    axiosInstance.defaults.headers.Authorization = config.data.token;
  }
  return config;
});
