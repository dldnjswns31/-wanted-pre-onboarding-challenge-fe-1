import axios from "axios";

const URL = "http://localhost:8080";

export const axiosInstance = axios.create({ baseURL: URL });
