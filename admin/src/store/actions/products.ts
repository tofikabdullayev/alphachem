import Axios from 'axios';
import { Product } from './../interfaces';
import {
  GET_PRODUCTS_COMPLETE,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCTS_COMPLETE,
  ADD_PRODUCTS_ERROR,
  ADD_PRODUCTS,
  DELETE_PRODUCTS_COMPLETE,
  DELETE_PRODUCTS_ERROR,
  GET_PRODUCTS,
  DELETE_PRODUCTS,
} from './actionTypes';

interface ActionCreator {
  type: string;
  products?: Product[];
  id?: string;
  message?: string;
}

export function getProducts() {
  return async (dispatch: (actionCreator: ActionCreator) => void) => {
    try {
      dispatch({ type: GET_PRODUCTS });
      const response = await Axios.get('/api/products');

      if (response.status < 400) {
        dispatch(getProductsSucces(response.data));
      } else {
        dispatch(errorAction(GET_PRODUCTS_ERROR, response.data));
      }
    } catch (error) {
      dispatch(errorAction(GET_PRODUCTS_ERROR, error.response.data.message));
    }
  };
}

export function addProduct(product: Product) {
  return async (dispatch: (actionCreator: ActionCreator) => void) => {
    try {
      dispatch({ type: ADD_PRODUCTS });
      const response = await Axios.post('/api/products', product);
      if (response.status < 400) {
        dispatch(addProductsSucces(response.data));
      } else {
        dispatch(errorAction(ADD_PRODUCTS_ERROR, response.data));
      }
    } catch (error) {
      dispatch(errorAction(ADD_PRODUCTS_ERROR, error.response.data.message));
    }
  };
}

export function deleteProduct(id: string) {
  return async (dispatch: (actionCreator: ActionCreator) => void) => {
    try {
      dispatch({ type: DELETE_PRODUCTS });
      const response = await Axios.delete(`/api/products/${id}`);
      if (response.status < 400) {
        dispatch(deleteProductSuccess(id));
      } else {
        dispatch(errorAction(DELETE_PRODUCTS_ERROR, response.data));
      }
    } catch (error) {
      dispatch(errorAction(DELETE_PRODUCTS_ERROR, error.response.data.message));
    }
  };
}

export function addProductsSucces(product: Product) {
  return {
    type: ADD_PRODUCTS_COMPLETE,
    payload: product,
  };
}

export function getProductsSucces(products: Product[]) {
  return {
    type: GET_PRODUCTS_COMPLETE,
    products,
  };
}

export function deleteProductSuccess(id: string) {
  return {
    type: DELETE_PRODUCTS_COMPLETE,
    deleteId: id,
  };
}

export function errorAction(type: string, message: string): ActionCreator {
  return { type, message };
}
