import { axiosInstance } from "@/api/axiosInstance";
import { createAndGetShortenUrl } from "./endPoints";

export const createShortenUrl = async (originalUrl: string) => {
  const response = await axiosInstance.post(createAndGetShortenUrl, {
    originalUrl,
  });
  return response.data;
};
