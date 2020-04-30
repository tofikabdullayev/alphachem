import React, { useState } from 'react';
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
import { Product, Slider } from './../../store/interfaces';
import { DeleteDialog, DeleteDialogData } from '../Dialogs';

export interface DataTableProps {
  data: Product[] | Slider[];
  tableHeader: string[];
  onDelete: (id: string, callBack: () => void) => void;
  onEdit: (product: Product) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  tableHeader,
  onDelete,
  onEdit,
}) => {
  const classes = useStyles();
  const [dialog, setdialog] = useState<DeleteDialogData>(
    {} as DeleteDialogData
  );

  const handleDelete = (item: Product) => {
    const dialogData: DeleteDialogData = {
      isOpen: true,
      title: `Are you sure you want to delete '${item.title.az}'?`,
      id: item._id as string,
    };
    setdialog(dialogData);
  };

  return (
    <>
      <DeleteDialog
        onDelete={() => {
          onDelete(dialog?.id as string, () => {
            setdialog({} as DeleteDialogData);
          });
        }}
        isOpen={dialog?.isOpen as boolean}
        title={dialog?.title as string}
        id={dialog.id as string}
        close={() => setdialog({} as DeleteDialogData)}
      />

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="data table" stickyHeader>
          <TableHead>
            <TableRow>
              {tableHeader.map((tableHeaderitem, i) => (
                <TableCell key={i}>{tableHeaderitem}</TableCell>
              ))}
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product) => (
              <TableRow key={product._id}>
                <TableCell component="th" scope="row">
                  <img
                    src={product.imageSrc}
                    alt={product.title.az}
                    className={classes.image}
                  />
                </TableCell>
                <TableCell>{product.title.az}</TableCell>
                <TableCell>{product.title.en}</TableCell>
                <TableCell>{product.title.ru}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    aria-label="Edit"
                    onClick={() => onEdit(product)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="Delete"
                    onClick={() => handleDelete(product)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
