import { useQuery } from "react-query";
import { option } from "services/api";

export default function useArea ()  {
  return useQuery(['option_area'], option.getArea);
}