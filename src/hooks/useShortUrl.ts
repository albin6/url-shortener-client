import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import { createShortUrl, getShortUrl } from "../api/tanstack/url";

export const useShortenUrl = (url: string) => {
  return useQuery({
    queryKey: ["shortenUrl", url],
    queryFn: () => getShortUrl(url),
  });
};

export const useCreateShortUrl = () => {
  const query = new QueryClient();
  return useMutation({
    mutationFn: createShortUrl,
    onSuccess: () => {
      query.invalidateQueries(["shortenUrl"]);
    },
  });
};
