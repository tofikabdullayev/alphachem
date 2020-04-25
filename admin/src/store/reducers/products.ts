import {
  GET_PRODUCTS_COMPLETE,
  GET_PRODUCTS_ERROR,
} from '../actions/actionTypes';
import { Product } from '../interfaces';

const initialState: Product[] | null = [];

export default function productsReducer(
  state: Product[] | null = initialState,
  action: { type: string; products: Product[] }
) {
  switch (action.type) {
    case GET_PRODUCTS_COMPLETE:
      return [...(state as Product[]), ...action.products];
    case GET_PRODUCTS_ERROR:
      return null;
    default:
      return state;
  }
}
