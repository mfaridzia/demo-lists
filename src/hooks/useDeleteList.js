import { useMutation, useQueryClient } from "react-query";
import { deleteList } from "services/api";

export default function useDeleteList () {
  const queryClient = useQueryClient();
  return useMutation((uuid) => deleteList(uuid), { 
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  })
}