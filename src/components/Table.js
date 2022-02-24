import { useHistory } from "react-router-dom";
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import { columnConfig } from "constant/data-table";

function Table ({ items = [] }) {
  let history = useHistory();
  return (
    <div className="data-table">
      <Grid
        data={items}
        columns={columnConfig(history)}
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
        style={{
          table: {
            'font-size': '13px'
          }
        }}
      />
    </div>
  )
}

export default Table;