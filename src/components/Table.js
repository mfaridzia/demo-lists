import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { columns } from "constant/data-table";

function Table ({ items = [] }) {
  return (
    <div className="data-table">
      <Grid
        data={items}
        columns={columns}
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
