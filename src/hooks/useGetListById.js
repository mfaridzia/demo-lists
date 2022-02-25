import { useQuery } from "react-query";
import { getByID } from "services/api";

export default function useGetListById (id)  {
  return useQuery(['get_list_by_id', { id }], (id) => getByID(id));
}