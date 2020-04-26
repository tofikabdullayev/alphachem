import {
  GET_PRODUCTS_COMPLETE,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCTS_COMPLETE,
  ADD_PRODUCTS_ERROR,
} from '../actions/actionTypes';
import { Product } from '../interfaces';

const initialState: Product[] = [];

export default function productsReducer(
  state: Product[] = initialState,
  action: { type: string; products: Product[]; payload?: any; message?: string }
) {
  switch (action.type) {
    case GET_PRODUCTS_COMPLETE:
      return [...action.products];
    case GET_PRODUCTS_ERROR:
      return {
        errorMessage: action.message,
      };
    case ADD_PRODUCTS_COMPLETE:
      return [...state, action.payload];
    case ADD_PRODUCTS_ERROR:
      return {
        errorMessage: action.message,
      };
    default:
      return state;
  }
}
