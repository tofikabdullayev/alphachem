import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

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
