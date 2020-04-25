import {
  GET_PRODUCTS_COMPLETE,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCTS_COMPLETE,
} from '../actions/actionTypes';
import { Product } from '../interfaces';

const initialState: Product[] = [];

export default function productsReducer(
  state: Product[] = initialState,
  action: { type: string; products: Product[]; payload?: any }
) {
  switch (action.type) {
    case GET_PRODUCTS_COMPLETE:
      return [...action.products];
    case GET_PRODUCTS_ERROR:
      return null;
    case ADD_PRODUCTS_COMPLETE:
      return [...state, action.payload];
    default:
      return state;
  }
}
