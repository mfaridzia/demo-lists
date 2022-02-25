import { useQuery } from "react-query";
import { getByID } from "services/api";

export default function useGetListById (uuid)  {
  return useQuery(['get_list_by_id', uuid], () => getByID(uuid), {
    enabled: !!uuid
  });
}