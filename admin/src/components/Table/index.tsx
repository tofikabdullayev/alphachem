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
import { Product } from './../../store/interfaces';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface DataTableProps {
  data: Product[];
  tableHeader: string[];
  onDelete: (id: string) => void;
}

interface DeleteDialog {
  isOpen: boolean;
  title: string;
  id?: string;
}

const initialDeleteDialogState: DeleteDialog = {
  isOpen: false,
  title: '',
};

const DataTable: React.FC<DataTableProps> = ({
  data,
  tableHeader,
  onDelete,
}) => {
  const classes = useStyles();
  const [dialog, setdialog] = useState<DeleteDialog>(initialDeleteDialogState);

  const handleDelete = (item: Product) => {
    const dialogData = {
      isOpen: true,
      title: `Are you sure you want to delete ${item.title.az}`,
      id: item._id,
    };
    setdialog(dialogData);
  };

  return (
    <>
      <Dialog
        open={dialog.isOpen}
        onClose={() => setdialog({ isOpen: false, title: '' })}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{dialog.title}</DialogTitle>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setdialog({ isOpen: false, title: '' })}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              console.log(dialog.id);
              onDelete(dialog.id as string);
              setdialog(initialDeleteDialogState);
            }}
            color="primary"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

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
                  <IconButton
                    color="primary"
                    aria-label="Delete"
                    onClick={() => handleDelete(row)}
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
