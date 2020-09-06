import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(date, option_id, td, cd, total_discount_D1, mrp,
    predicted_revenue,predicted_qty,predicted_gm, predicted_rgm,
    updated_qty,updated_revenue,optimal_disc,updated_gm) {
  return { date, option_id, td, cd, total_discount_D1, mrp,
    predicted_revenue,predicted_qty,predicted_gm, predicted_rgm,
    updated_qty,updated_revenue,optimal_disc,updated_gm };
}

const rows = [
  createData('2020-07-08', 450315644016, 400, 119.8, 519.8,999.0,999.0,1,0,0,0.0,0,'NA','NA'),
  createData('2020-07-08', 450315644016, 400, 119.8, 519.8,999.0,999.0,1,0,0,0.0,0,'NA','NA'),
  createData('2020-07-08', 450315644016, 400, 119.8, 519.8,999.0,999.0,1,0,0,0.0,0,'NA','NA'),
  createData('2020-07-08', 450315644016, 400, 119.8, 519.8,999.0,999.0,1,0,0,0.0,0,'NA','NA'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell >Option ID</TableCell>
            <TableCell >TD</TableCell>
            <TableCell>CD</TableCell>
            <TableCell >Total Discount (D1) </TableCell>
            <TableCell >MRP</TableCell>
            <TableCell >Predicted Revenue (R1) </TableCell>
            <TableCell >Predicted Qty (Q1) </TableCell>
            <TableCell >Predicted GM (G1) </TableCell>
            <TableCell >Predicted RGM (RG1)</TableCell>
            <TableCell >Updated Qty (Q2) </TableCell>
            <TableCell >Updated GM (R2) </TableCell>
            <TableCell >Optimal Discount(D2)</TableCell>
            <TableCell >Updated GM (G2) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell >{row.option_id}</TableCell>
              <TableCell >{row.td}</TableCell>
              <TableCell >{row.cd}</TableCell>
              <TableCell >{row.total_discount_D1}</TableCell>
              <TableCell >{row.mrp}</TableCell>
              <TableCell >{row.predicted_revenue}</TableCell>
              <TableCell >{row.predicted_qty}</TableCell>
              <TableCell >{row.predicted_gm}</TableCell>
              <TableCell >{row.predicted_rgm}</TableCell>

              <TableCell >{row.updated_qty}</TableCell>
              <TableCell >{row.updated_revenue}</TableCell>
              <TableCell >{row.optimal_disc}</TableCell>
              <TableCell >{row.updated_gm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}