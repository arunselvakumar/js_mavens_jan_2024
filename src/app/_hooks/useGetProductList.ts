import { useQuery } from "@tanstack/react-query";

export function useGetProductList(filter: string) {
  return useQuery({
    queryKey: ["productList", filter],
    queryFn: async () => {
      const response = await fetch(`/api/product?filter=${filter}`);
      return response.json();
    },
  });
}
