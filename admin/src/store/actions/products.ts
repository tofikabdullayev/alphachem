import Axios from 'axios';
import { Product } from './../interfaces';
import {
  GET_PRODUCTS_COMPLETE,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCTS_COMPLETE,
  ADD_PRODUCTS_ERROR,
  ADD_PRODUCTS,
} from './actionTypes';

export function getProducts() {
  return async (
    dispatch: (actionCreator: { type: string; products?: Product[] }) => void
  ) => {
    try {
      const response = await Axios.get('/api/products');

      if (response.status < 400) {
        dispatch(getProductsSucces(response.data));
      } else {
        dispatch(getProductsError(response.data));
      }
    } catch (error) {
      dispatch(getProductsError(error.response.data.message));
    }
  };
}

export function addProduct(product: Product) {
  return async (
    dispatch: (actionCreator: { type: string; products?: Product[] }) => void
  ) => {
    try {
      dispatch({ type: ADD_PRODUCTS });
      const response = await Axios.post('/api/products', product);
      if (response.status < 400) {
        dispatch(addProductsSucces(response.data));
      } else {
        dispatch(addProductsError(response.data));
      }
    } catch (error) {
      dispatch(addProductsError(error.response.data.message));
    }
  };
}

export function getProductsSucces(products: Product[]) {
  return {
    type: GET_PRODUCTS_COMPLETE,
    products,
  };
}

export function getProductsError(error: string) {
  return {
    type: GET_PRODUCTS_ERROR,
    message: error,
  };
}

export function addProductsSucces(product: Product) {
  return {
    type: ADD_PRODUCTS_COMPLETE,
    payload: product,
  };
}

export function addProductsError(error: string) {
  return {
    type: ADD_PRODUCTS_ERROR,
    message: error,
  };
}
