import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

function Table ({ items = [] }) {
  return (
    <div className="data-table">
      <Grid
        data={items}
        columns={['Komoditas', 'Harga', 'Ukuran', 'Area', 'Tanggal']}
        search={true}
        sort={true}
        pagination={{
          enabled: true,
          limit: 10,
        }}
        language={{
          'search': {
            'placeholder': '🔍 Cari Komoditas Ikan...'
          },
        }}
      />
    </div>
  )
}

export default Table;
