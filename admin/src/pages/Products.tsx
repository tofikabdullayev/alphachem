import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import AddItem from '../components/AddItem';
import DataTable from '../components/Table';
import useStyles from './styles';
// import { useDispatch } from 'react-redux'
import { getProducts } from './../store/actions/products';

export interface ProductsProps {}

const data = [
  {
    title: {
      az: '[AZ]product - 1',
      en: '[EN]product - 1',
      ru: '[RU]product - 1',
    },
    _id: '5ea08427bf6faf65247bd4b4',
    imageSrc: '/products/1.jpg',
    __v: 0,
  },
  {
    title: {
      az: '[AZ]product - 2',
      en: '[EN]product - 2',
      ru: '[RU]product - 2',
    },
    _id: '5ea0b013f774454d211ac05d',
    imageSrc: '/products/2.jpg',
    __v: 0,
  },
  {
    title: {
      az: '[AZ]product - 3',
      en: '[EN]product - 3',
      ru: '[RU]product - 3',
    },
    _id: '5ea0b021f774454d211ac05e',
    imageSrc: '/products/3.jpg',
    __v: 0,
  },
  {
    title: {
      az: '[AZ]product - 4',
      en: '[EN]product - 4',
      ru: '[RU]product - 4',
    },
    _id: '5ea0b02bf774454d211ac05f',
    imageSrc: '/products/4.jpg',
    __v: 0,
  },
  {
    title: {
      az: '[AZ]product - 6',
      en: '[EN]product - 6',
      ru: '[RU]product - 6',
    },
    _id: '5ea0b032f774454d211ac060',
    imageSrc: '/products/6.jpg',
    __v: 0,
  },
  {
    title: {
      az: '[AZ]product - 7',
      en: '[EN]product - 7',
      ru: '[RU]product - 7',
    },
    _id: '5ea0b03af774454d211ac061',
    imageSrc: '/products/7.png',
    __v: 0,
  },
  {
    title: {
      az: '[AZ]product - 8',
      en: '[EN]product - 8',
      ru: '[RU]product - 8',
    },
    _id: '5ea0b041f774454d211ac062',
    imageSrc: '/products/8.jpg',
    __v: 0,
  },
  {
    title: {
      az: '[AZ]product - 9',
      en: '[EN]product - 9',
      ru: '[RU]product - 9',
    },
    _id: '5ea0b046f774454d211ac063',
    imageSrc: '/products/9.jpg',
    __v: 0,
  },
  {
    title: {
      az: '[AZ]vaseline',
      en: '[EN]vaseline',
      ru: '[RU]vaseline',
    },
    _id: '5ea0b056f774454d211ac064',
    imageSrc: '/products/vaseline.jpg',
    __v: 0,
  },
];

const headRows = ['Image', '[AZ] Title', '[EN] Title', '[RU] Title'];

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

  useEffect(() => {
    getProducts()();
  }, []);

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
      <DataTable data={data} tableHeader={headRows} />
    </Layout>
  );
};

export default ProductsPage;
