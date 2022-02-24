import { useQuery } from "react-query";
import { getList } from "../services/api";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

function Home () {
  const { data: lists, isLoading, error } = useQuery('lists', getList);

  if (isLoading) return "Loading....";
  if (error) return `${error.message}`;

  console.log("Lists", lists);

  return (
    <>
      <Header />
      <Wrapper>
        Daftar Hargra Komoditas Ikan di Indonesia
      </Wrapper>
    </>
  )
}

export default Home;