import { useQuery } from "react-query";
import { getList } from "services/api";
import Header from "components/Header";
import Wrapper from "components/Wrapper";
import Table from "components/Table";
import { dateConverter } from "utils/dateConverter";

function Home () {
  const { data, isLoading, error } = useQuery('lists', getList);

  if (isLoading) return "Loading....";
  if (error) return `${error.message}`;

  const lists = data.map(item => ({
    komoditas: item.komoditas,
    harga: item.price,
    ukuran: item.size,
    area: item.area_kota + ', ' + item.area_provinsi,
    tanggal: dateConverter(item.tgl_parsed)
  }));

  const filteredLists = lists.filter(item => {
    return item.komoditas && item.harga && item.ukuran && item.area && item.tanggal
  }).slice(0, 15);

  console.log("WKWKKW", filteredLists);

  return (
    <>
      <Header />
      <Wrapper>
        <h3 className="content_title"> 
          Harga Komoditas Ikan di Indonesia 
        </h3>
        <Table items={filteredLists} />
      </Wrapper>
    </>
  )
}

export default Home;