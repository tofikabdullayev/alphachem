import React, { useState } from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import AddItem from '../components/AddItem';
import useStyles from './styles';

export interface ProductsProps {}

const ProductsPage: React.FC<ProductsProps> = () => {
  const classes = useStyles();
  const [azTitle, setAzTitle] = useState<string>('');
  const [enTitle, setEnTitle] = useState<string>('');
  const [ruTitle, setRuTitle] = useState<string>('');
  const productImage: React.RefObject<any> = React.createRef();
  const onSubmit = () =>
    console.log({
      azTitle,
      enTitle,
      ruTitle,
      image: productImage.current.children[0].value,
    });

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" component="h3">
          Products
        </Typography>
        <AddItem title="Add product" submitHandler={onSubmit}>
          <form className={classes.root}>
            <TextField
              label="Product title [AZ]"
              value={azTitle}
              fullWidth
              onChange={(e) => setAzTitle(e.target.value)}
            />
            <TextField
              label="Product title [EN]"
              fullWidth
              value={enTitle}
              onChange={(e) => setEnTitle(e.target.value)}
            />
            <TextField
              label="Product title [RU]"
              fullWidth
              value={ruTitle}
              onChange={(e) => setRuTitle(e.target.value)}
            />
            <Input placeholder="Product image" type="file" ref={productImage} />
          </form>
        </AddItem>
      </div>
    </Layout>
  );
};

export default ProductsPage;
