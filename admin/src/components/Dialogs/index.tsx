import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import Loading from '../loading';

export interface DeleteDialogData {
  isOpen: boolean;
  title: string;
  id: string;
}

export interface DeleteDialogProps extends DeleteDialogData {
  onDelete: (id: string, callBack: () => void) => void;
  close: () => void;
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
  onDelete,
  isOpen = false,
  title = '',
  id = '',
  close,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => close()}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogActions>
        <Button autoFocus onClick={() => close()} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onDelete(id, () => close());
          }}
          color="primary"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export interface ItemDialogProps {
  children: React.ReactNode;
  submitHandler: (stopLoading: () => void) => void;
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  submitButtontext?: string;
  isFormValid: boolean;
}

export const ItemDialog: React.FC<ItemDialogProps> = ({
  children,
  submitHandler,
  isOpen,
  closeModal,
  title,
  submitButtontext,
  isFormValid,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoading, setLoading] = useState<boolean>(false);
  return (
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
          onClick={() => submitHandler(() => setLoading(false))}
          color="primary"
          autoFocus
          disabled={!isFormValid}
        >
          {submitButtontext}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
