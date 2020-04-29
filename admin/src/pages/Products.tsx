import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DataTable from '../components/Table';
import Loading from '../components/loading';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
} from './../store/actions/products';
import { Product } from '../store/interfaces';
import { ProductsPageState } from '../store/reducers/products';
import { ItemDialog } from '../components/Dialogs';

export interface ProductsProps {}

const headRows = ['Image', '[AZ] Title', '[EN] Title', '[RU] Title'];

interface ItemTitle {
  value: string;
  touched?: boolean;
  isValid: boolean;
}

const initialitemTitle: ItemTitle = {
  value: '',
  touched: false,
  isValid: false,
};

const ProductsPage: React.FC<ProductsProps> = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: { productsPage: ProductsPageState }) => state.productsPage.products
  );
  const classes = useStyles();

  const [azTitle, setAzTitle] = useState<ItemTitle>(initialitemTitle);
  const [enTitle, setEnTitle] = useState<ItemTitle>(initialitemTitle);
  const [ruTitle, setRuTitle] = useState<ItemTitle>(initialitemTitle);
  const [editId, setEditId] = useState<string>('');
  const productImage: React.RefObject<any> = React.createRef();
  const titleChangehandler = (
    value: string,
    setter: (newData: ItemTitle) => void
  ) => {
    const currentState: ItemTitle = {
      value: value,
      touched: true,
      isValid: value.length > 0,
    };

    setter(currentState);
  };
  const onAddSubmit = async (stopLoading: () => void) => {
    const newProduct: Product = {
      title: {
        az: azTitle.value,
        en: enTitle.value,
        ru: ruTitle.value,
      },
      imageSrc: '/products/vaseline.jpg',
    };
    await dispatch(addProduct(newProduct));
    setOpenAddModal(false);
    stopLoading();
    setAzTitle(initialitemTitle);
    setEnTitle(initialitemTitle);
    setRuTitle(initialitemTitle);
  };

  const onEditSubmit = async (stopLoading: () => void) => {
    const editedProduct: Product = {
      title: {
        az: azTitle.value,
        en: enTitle.value,
        ru: ruTitle.value,
      },
      imageSrc: '/products/vaseline.jpg',
    };
    await dispatch(editProduct(editedProduct, editId));
    setOpenEditModal(false);
    stopLoading();
    setAzTitle(initialitemTitle);
    setEnTitle(initialitemTitle);
    setRuTitle(initialitemTitle);
  };

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const openAddModalAddModal = () => {
    setOpenAddModal(true);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onDelete = async (id: string, callBack: () => void) => {
    await dispatch(deleteProduct(id));
    callBack();
  };

  const onEdit = (product: Product): void => {
    titleChangehandler(product.title.az, setAzTitle);
    titleChangehandler(product.title.en, setEnTitle);
    titleChangehandler(product.title.ru, setRuTitle);
    setEditId(product._id as string);
    setOpenEditModal(true);
  };

  const Form = (
    <form className={classes.formRoot}>
      <TextField
        label="Product title [AZ]"
        value={azTitle.value}
        fullWidth
        onChange={(e) => titleChangehandler(e.target.value, setAzTitle)}
        error={!azTitle.isValid && azTitle.touched}
        required
      />
      <TextField
        label="Product title [EN]"
        fullWidth
        value={enTitle.value}
        onChange={(e) => titleChangehandler(e.target.value, setEnTitle)}
        error={!enTitle.isValid && enTitle.touched}
        required
      />
      <TextField
        label="Product title [RU]"
        fullWidth
        value={ruTitle.value}
        onChange={(e) => titleChangehandler(e.target.value, setRuTitle)}
        error={!ruTitle.isValid && ruTitle.touched}
        required
      />
      <Input placeholder="Product image" type="file" ref={productImage} />
    </form>
  );

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
        <Button
          variant="outlined"
          color="primary"
          onClick={openAddModalAddModal}
        >
          <AddIcon />
        </Button>
      </div>
      {products && products.length > 0 ? (
        <DataTable
          data={products}
          tableHeader={headRows}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ) : (
        <Loading />
      )}

      <ItemDialog
        title="Add product"
        submitHandler={onAddSubmit}
        isOpen={openAddModal}
        closeModal={() => {
          setAzTitle(initialitemTitle);
          setEnTitle(initialitemTitle);
          setRuTitle(initialitemTitle);
          setOpenAddModal(false);
        }}
        isFormValid={azTitle.isValid && enTitle.isValid && ruTitle.isValid}
        submitButtontext="Add"
      >
        {Form}
      </ItemDialog>

      <ItemDialog
        title="Edit product"
        submitHandler={onEditSubmit}
        isOpen={openEditModal}
        closeModal={() => {
          setAzTitle(initialitemTitle);
          setEnTitle(initialitemTitle);
          setRuTitle(initialitemTitle);
          setOpenEditModal(false);
        }}
        isFormValid={azTitle.isValid && enTitle.isValid && ruTitle.isValid}
        submitButtontext="Edit"
      >
        {Form}
      </ItemDialog>
    </Layout>
  );
};

export default ProductsPage;
