import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://url-shortener-server-indol.vercel.app/api/v_1",
  timeout: 10000,
});
