import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetToDoList() {
  return useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      const response = await fetch(`/api/todo`);
      return response.json();
    },
  });
}

export function useSaveToDoList() {
  return useMutation({
    mutationKey: ["todo"],
    mutationFn: async (payload: any) => {
      const response = await fetch(`/api/todo`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      return response.json();
    },
  });
}
