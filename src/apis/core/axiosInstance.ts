import axios from "axios";
import { getToken } from "../../utils/authToken";

const URL = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: URL,
  headers: { Authorization: getToken() },
});
