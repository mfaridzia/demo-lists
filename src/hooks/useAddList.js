import { useMutation, useQueryClient } from "react-query";
import { createList } from "services/api";

export default function useAddList () {
  const queryClient = useQueryClient();
  return useMutation((newList) => createList(newList), { 
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  })
}