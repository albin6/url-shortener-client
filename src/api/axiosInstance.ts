import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://url-shortener-server-amy4.onrender.com/api/v_1",
  timeout: 10000,
});
