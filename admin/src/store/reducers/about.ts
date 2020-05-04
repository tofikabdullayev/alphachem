import { About } from './../interfaces';
import {
  GET_ABOUT,
  GET_ABOUT_COMPLETE,
  GET_ABOUT_ERROR,
} from '../actions/actionTypes';
import { ActionCreator } from '../actions/about';

export interface AboutPageState {
  about: About[];
  isLoading: boolean;
  errorMessage?: string;
}

const initialState: AboutPageState = {
  about: [],
  isLoading: false,
};

export default function aboutReducer(
  state: AboutPageState = initialState,
  action: ActionCreator
) {
  switch (action.type) {
    case GET_ABOUT:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ABOUT_COMPLETE:
      return {
        ...state,
        isLoading: false,
        about: action.about,
      };
    case GET_ABOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      };

    default:
      return state;
  }
}
