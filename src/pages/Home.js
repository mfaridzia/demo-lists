import { useState } from "react";
import Header from "components/Header";
import Wrapper from "components/Wrapper";
import Table from "components/Table";
import Spinner from "components/Spinner";
import Error from "components/Error";
import Filter from "components/Filter";
import useLists from "hooks/useLists";
import { dateConverterDataOrder } from "utils/dateConverter";
import { formatCurrency } from "utils/currency";

function Home () {
  const [filterBy, setFilterBy] = useState('');
  const [filterInput, setFilterInput] = useState('');
  const { data, isLoading, error } = useLists();

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  const lists = data.map(item => ({
    uuid: item.uuid,
    komoditas: item.komoditas,
    harga: formatCurrency(Number(item.price)),
    ukuran: Number(item.size),
    daerah: item.area_kota + ', ' + item.area_provinsi,
    tanggal: dateConverterDataOrder(item.tgl_parsed)
  }));

  const filteredNullValue = lists.filter(item => {
    return item.uuid && item.komoditas && item.harga && item.ukuran && item.daerah && item.tanggal
  });

  const filteredBy = lists.filter(item => {
    if (filterBy === 'ukuran') {
      return item[filterBy] && item[filterBy] === Number(filterInput);
    } else {
      return item[filterBy] && item[filterBy].toLowerCase().includes(filterInput.toLowerCase());
    }
  });

  const filteredLists = filterBy && filterInput ? filteredBy : filteredNullValue;

  return (
    <>
      <Header />
      <Wrapper>
        <section className="content_header">
          <div className="content_box"> 
            <h3 className="content_title">
              Harga Komoditas Ikan di Indonesia
            </h3>
            <div className="content_filter">
              <Filter 
                onClickCategory={(value) => setFilterBy(value)}
                onInput={(e) => setFilterInput(e.target.value)}
                filterValue={filterInput}
              />
            </div>
          </div>
        </section>
        <Table items={filteredLists} />
      </Wrapper>
    </>
  )
}

export default Home;