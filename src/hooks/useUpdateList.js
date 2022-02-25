import { useMutation, useQueryClient } from "react-query";
import { updateList } from "services/api";

export default function useUpdateList () {
  const queryClient = useQueryClient();
  return useMutation(({ uuid, payload }) => updateList(uuid, payload), { 
    onSuccess: () => {
      queryClient.invalidateQueries(['lists']);
    }
  })
}