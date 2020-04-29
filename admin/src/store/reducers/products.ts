import {
  GET_PRODUCTS_COMPLETE,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCTS_COMPLETE,
  ADD_PRODUCTS_ERROR,
  DELETE_PRODUCTS_COMPLETE,
  DELETE_PRODUCTS_ERROR,
  UPDATE_PRODUCTS_COMPLETE,
  UPDATE_PRODUCTS_ERROR,
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
    product: Product;
    error?: any;
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
        errorMessage: action.error,
      };
    case ADD_PRODUCTS_COMPLETE:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case ADD_PRODUCTS_ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };
    case UPDATE_PRODUCTS_COMPLETE:
      return {
        ...state,
        products: [
          ...state.products.filter((el) => el._id !== action.product._id),
          action.product,
        ],
      };
    case UPDATE_PRODUCTS_ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };
    case DELETE_PRODUCTS_COMPLETE:
      return {
        ...state,
        products: state.products.filter((el) => el._id !== action.deleteId),
      };
    case DELETE_PRODUCTS_ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };
    default:
      return state;
  }
}
