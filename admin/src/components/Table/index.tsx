import React from 'react';
import useStyles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Product } from './../../store/interfaces';

export interface DataTableProps {
  data: Product[];
  tableHeader: string[];
}

const DataTable: React.FC<DataTableProps> = ({ data, tableHeader }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="data table" stickyHeader>
        <TableHead>
          <TableRow>
            {tableHeader.map((row, i) => (
              <TableCell key={i}>{row}</TableCell>
            ))}
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                <img
                  src={row.imageSrc}
                  alt={row.title.az}
                  className={classes.image}
                />
              </TableCell>
              <TableCell>{row.title.az}</TableCell>
              <TableCell>{row.title.en}</TableCell>
              <TableCell>{row.title.ru}</TableCell>
              <TableCell align="right">
                <IconButton color="primary" aria-label="Edit">
                  <EditIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
