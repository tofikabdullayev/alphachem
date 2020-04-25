import Axios from 'axios';
import { Product } from './../interfaces';
import { GET_PRODUCTS_COMPLETE, GET_PRODUCTS_ERROR } from './actionTypes';

export function getProducts() {
  return async (
    dispatch: (actionCreator: { type: string; products?: Product[] }) => void
  ) => {
    const response = await Axios.get('/api/products');

    switch (response.statusText) {
      case 'OK':
        dispatch(getProductsSucces(response.data));
        break;
      case 'ERROR':
        dispatch(getProductsError());
        break;

      default:
        break;
    }
  };
}

export function getProductsSucces(products: Product[]) {
  return {
    type: GET_PRODUCTS_COMPLETE,
    products,
  };
}

export function getProductsError() {
  return {
    type: GET_PRODUCTS_ERROR,
  };
}
