import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface AddItemProps {
  title: string;
  children: React.ReactNode;
  submitHandler: () => void;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const AddItem: React.FC<AddItemProps> = ({
  title,
  children,
  submitHandler,
  isOpen,
  openModal,
  closeModal,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    submitHandler();
    closeModal();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={openModal}>
        <AddIcon />
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItem;
