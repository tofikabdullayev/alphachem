import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import AddItem from '../components/AddItem';
import DataTable from '../components/Table';
import Loading from '../components/loading';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addProduct } from './../store/actions/products';
import { Product } from '../store/interfaces';

export interface ProductsProps {}

const headRows = ['Image', '[AZ] Title', '[EN] Title', '[RU] Title'];

const ProductsPage: React.FC<ProductsProps> = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: { products: Product[] }) => state.products
  );
  const classes = useStyles();
  const [azTitle, setAzTitle] = useState<string>('');
  const [enTitle, setEnTitle] = useState<string>('');
  const [ruTitle, setRuTitle] = useState<string>('');
  const productImage: React.RefObject<any> = React.createRef();
  const onSubmit = async () => {
    const newProduct: Product = {
      title: {
        az: azTitle,
        en: enTitle,
        ru: ruTitle,
      },
      imageSrc: '/vaseline.jpg',
    };
    await dispatch(addProduct(newProduct));
    setOpen(false);
    setAzTitle('');
    setEnTitle('');
    setRuTitle('');
  };

  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
        <AddItem
          title="Add product"
          submitHandler={onSubmit}
          isOpen={open}
          openModal={openModal}
          closeModal={() => setOpen(false)}
        >
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
      {products.length > 0 ? (
        <DataTable data={products} tableHeader={headRows} />
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default ProductsPage;
