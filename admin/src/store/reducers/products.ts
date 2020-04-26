import {
  GET_PRODUCTS_COMPLETE,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCTS_COMPLETE,
  ADD_PRODUCTS_ERROR,
  DELETE_PRODUCTS_COMPLETE,
  DELETE_PRODUCTS_ERROR,
} from '../actions/actionTypes';
import { Product } from '../interfaces';

export interface ProductsPageState {
  products: Product[];
  errorMessage?: string;
}

const initialState: ProductsPageState = {
  products: [],
};

export default function productsReducer(
  state: ProductsPageState = initialState,
  action: {
    type: string;
    products: Product[];
    payload?: any;
    message?: string;
    deleteId?: string;
  }
) {
  switch (action.type) {
    case GET_PRODUCTS_COMPLETE:
      return {
        ...state,
        products: action.products,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        errorMessage: action.message,
      };
    case ADD_PRODUCTS_COMPLETE:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCTS_ERROR:
      return {
        ...state,
        errorMessage: action.message,
      };
    case DELETE_PRODUCTS_COMPLETE:
      return {
        ...state,
        products: state.products.filter((el) => el._id !== action.deleteId),
      };
    case DELETE_PRODUCTS_ERROR:
      return {
        ...state,
        errorMessage: action.message,
      };
    default:
      return state;
  }
}
