import { h } from "gridjs";
import { compare } from "utils/compare";

export function columnConfig (history) {
  const columns = [{
    name: 'uuid',
    hidden: true
  },{
    name: 'Komoditas',
  },{
    name: 'Harga',
    sort: {
      compare: compare()
    }
  },{
    name: 'Ukuran',
    sort: {
      compare: compare()
    }
  },{
    name: 'Daerah',
  },{
    name: 'Tanggal',
  }, {
    name: 'Aksi',
    sort: false,
    formatter: (_, row) => {
      return h('button', {
        className: 'btn-edit',
        onClick: () => history.push(`update/${row.cells[0].data}`)
      }, 'Edit');
    }
  }];

  return columns;
}