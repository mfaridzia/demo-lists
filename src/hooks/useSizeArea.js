import { useQuery } from "react-query";
import { option } from "services/api";

export default function useSizeArea () {
  const { 
    data: size, isLoading: isLoadingSize, error: errorSize
  } = useQuery(['option_size'], option.getSize);
  const { 
    data: area, isLoading: isLoadingArea, error: errorArea
  } = useQuery(['option_area'], option.getArea);

  return {
    size,
    area,
    isLoadingSize,
    isLoadingArea,
    errorSize,
    errorArea
  }
}