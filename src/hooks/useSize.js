import { useQuery } from "react-query";
import { option } from "services/api";

export default function useSize ()  {
  return useQuery(['option_size'], option.getSize);
}