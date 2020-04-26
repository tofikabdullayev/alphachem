import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Loading from '../loading';

interface AddItemProps {
  title: string;
  children: React.ReactNode;
  submitHandler: (stopLoading: () => void) => void;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isFormValid?: boolean;
}

const AddItem: React.FC<AddItemProps> = ({
  title,
  children,
  submitHandler,
  isOpen,
  openModal,
  closeModal,
  isFormValid,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleClose = () => {
    submitHandler(() => setLoading(false));
    setLoading(true);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={openModal}>
        <AddIcon />
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {isLoading && <Loading isDialog={true} />}

          {children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
            disabled={!isFormValid}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddItem;
