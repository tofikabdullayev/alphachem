import axios from 'axios';
import { Product } from './../interfaces';
import { GET_PRODUCTS_COMPLETE } from './actionTypes';

export function getProducts() {
  return async (
    dispatch: (actionCreator: { type: string; products?: Product[] }) => void
  ) => {
    let url = '/api/products';
    const response = await axios.get(url);

    dispatch(getProductsSucces(response.data.products));
    // switch (response.data.code) {
    //     case 200:
    //         dispatch(getProductsSucces(response.data.products))
    //         break;

    //     default:
    //         break;
    // }
  };
}

export function getProductsSucces(products: Product[]) {
  return {
    type: GET_PRODUCTS_COMPLETE,
    products,
  };
}
