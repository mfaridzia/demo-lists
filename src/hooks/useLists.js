import { useQuery } from "react-query";
import { getList } from "services/api";

export default function useLists ()  {
  return useQuery(['lists'], getList);
}