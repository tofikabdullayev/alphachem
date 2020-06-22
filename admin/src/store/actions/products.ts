import Axios from '../../utils/auth.interceptor';
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
  UPDATE_PRODUCTS_COMPLETE,
  UPDATE_PRODUCTS,
  UPDATE_PRODUCTS_ERROR,
} from './actionTypes';

interface ActionCreator {
  type: string;
  products?: Product[];
  id?: string;
  error?: any;
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
      console.trace(error);
      dispatch(errorAction(GET_PRODUCTS_ERROR, error));
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
      console.trace(error);
      dispatch(errorAction(ADD_PRODUCTS_ERROR, error));
    }
  };
}

export function editProduct(product: Product, id: string) {
  return async (dispatch: (actionCreator: ActionCreator) => void) => {
    try {
      dispatch({ type: UPDATE_PRODUCTS });
      const response = await Axios.put(`/api/products/${id}`, product);
      if (response.status < 400) {
        dispatch(editProductsSucces(response.data));
      } else {
        dispatch(errorAction(UPDATE_PRODUCTS_ERROR, response.data));
      }
    } catch (error) {
      console.trace(error);
      dispatch(errorAction(UPDATE_PRODUCTS_ERROR, error));
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
      console.trace(error);
      dispatch(errorAction(DELETE_PRODUCTS_ERROR, error));
    }
  };
}

export function addProductsSucces(product: Product) {
  return {
    type: ADD_PRODUCTS_COMPLETE,
    product,
  };
}

export function editProductsSucces(product: Product) {
  return {
    type: UPDATE_PRODUCTS_COMPLETE,
    product,
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

export function errorAction(type: string, error: any): ActionCreator {
  return { type, error };
}
