import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    
function createData(date, option_id, td, cd, total_discount_D1, mrp,
    predicted_revenue,predicted_qty,predicted_gm, predicted_rgm,
    updated_qty,updated_revenue,optimal_disc,updated_gm) {
  return { date, option_id, td, cd, total_discount_D1, mrp,
    predicted_revenue,predicted_qty,predicted_gm, predicted_rgm,
    updated_qty,updated_revenue,optimal_disc,updated_gm };
}

  const [state, setState] = React.useState({
    columns: [
      { title: 'Date', field: 'date' },
      { title: 'Option ID', field: 'option_id' },
      { title: 'TD', field: 'td'},
      { title: 'CD', field: 'cd'},
      { title: 'Total Discount (D1)', field: 'total_discount_D1'},
      { title: 'MRP', field: 'mrp'},
      { title: 'Predicted Revenue (R1)', field: 'predicted_revenue'},
      { title: 'Predicted Qty (Q1)', field: 'predicted_qty'},
      { title: 'Predicted GM (G1) ', field: 'predicted_gm'},
      { title: 'Predicted RGM (RG1)', field: 'predicted_rgm'},
      { title: 'Updated Qty (Q2)', field: 'updated_qty'},
      { title: 'Updated GM (R2) ', field: 'updated_revenue'},
      { title: 'Optimal Discount(D2)', field: 'optimal_disc'},
      { title: 'Updated GM (G2)', field: 'updated_gm'},
    ],
    data: [
        createData('2020-07-08', 450315644016, 400, 119.8, 519.8,999.0,999.0,1,0,0,0.0,0,'NA','NA'),
        createData('2020-07-09', 450315644017, 400, 119.8, 519.8,999.0,999.0,1,0,0,0.0,0,'NA','NA'),
        createData('2020-07-08', 450315644018, 400, 119.8, 519.8,999.0,999.0,1,0,0,0.0,0,'NA','NA'),
        createData('2020-07-08', 450315644019, 400, 119.8, 519.8,999.0,999.0,1,0,0,0.0,0,'NA','NA'),
        createData('2020-07-08', 450315644020, 400, 119.8, 519.8,999.0,999.0,1,0,0,0.0,0,'NA','NA'),

    ],
  });

  return (
    <MaterialTable
    actions={[]}
      title="AJIO"
      columns={state.columns}
      data={state.data}

    />
  );
}