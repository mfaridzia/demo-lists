import { useQuery } from "react-query";
import { getList } from "../services/api";

function Home () {
  const { data: lists, isLoading, error } = useQuery('lists', getList);

  if (isLoading) return "Loading....";
  if (error) return `${error.message}`;

  console.log("Lists", lists);

  return (
    <>
      Hallo
    </>
  )
}

export default Home;