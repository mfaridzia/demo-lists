import Header from "components/Header";
import Wrapper from "components/Wrapper";
import Table from "components/Table";
import useLists from "hooks/useLists";
import { dateConverterDataOrder } from "utils/dateConverter";
import { formatCurrency } from "utils/currency";

function Home () {
  const { data, isLoading, error } = useLists();

  if (isLoading) return "Loading....";
  if (error) return `${error.message}`;

  const lists = data.map(item => ({
    uuid: item.uuid,
    komoditas: item.komoditas,
    harga: formatCurrency(Number(item.price)),
    ukuran: Number(item.size),
    daerah: item.area_kota + ', ' + item.area_provinsi,
    tanggal: dateConverterDataOrder(item.tgl_parsed)
  }));

  const filteredLists = lists.filter(item => {
    return item.uuid && item.komoditas && item.harga && item.ukuran && item.daerah && item.tanggal
  });

  return (
    <>
      <Header />
      <Wrapper>
        <section className="content_header">
          <h3 className="content_title"> 
            Harga Komoditas Ikan di Indonesia 
          </h3>
        </section>
        <Table items={filteredLists} />
      </Wrapper>
    </>
  )
}

export default Home;