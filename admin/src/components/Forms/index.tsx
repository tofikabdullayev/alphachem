import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import useStyles from './styles';

interface ProductFormProps {}

interface ItemTitle {
  value: string;
  touched?: boolean;
  isValid: () => boolean;
}

const initialitemTitle: ItemTitle = {
  value: '',
  touched: false,
  isValid() {
    return false;
  },
};

export const ProductForm: React.FC<ProductFormProps> = () => {
  const classes = useStyles();

  const [azTitle, setAzTitle] = useState<ItemTitle>(initialitemTitle);
  const [enTitle, setEnTitle] = useState<ItemTitle>(initialitemTitle);
  const [ruTitle, setRuTitle] = useState<ItemTitle>(initialitemTitle);
  const productImage: React.RefObject<any> = React.createRef();
  const titleChangehandler = (
    value: string,
    setter: (newData: ItemTitle) => void
  ) => {
    const currentState: ItemTitle = {
      value: value,
      touched: true,
      isValid() {
        return value.length > 0;
      },
    };

    setter(currentState);
  };
  return (
    <form className={classes.formRoot}>
      <TextField
        label="Product title [AZ]"
        value={azTitle.value}
        fullWidth
        onChange={(e) => titleChangehandler(e.target.value, setAzTitle)}
        error={!azTitle.isValid() && azTitle.touched}
        required
      />
      <TextField
        label="Product title [EN]"
        fullWidth
        value={enTitle.value}
        onChange={(e) => titleChangehandler(e.target.value, setEnTitle)}
        error={!enTitle.isValid() && enTitle.touched}
        required
      />
      <TextField
        label="Product title [RU]"
        fullWidth
        value={ruTitle.value}
        onChange={(e) => titleChangehandler(e.target.value, setRuTitle)}
        error={!ruTitle.isValid() && ruTitle.touched}
        required
      />
      <Input placeholder="Product image" type="file" ref={productImage} />
    </form>
  );
};
