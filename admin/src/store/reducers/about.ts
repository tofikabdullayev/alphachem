import { About } from './../interfaces';
import {
  GET_ABOUT,
  GET_ABOUT_COMPLETE,
  GET_ABOUT_ERROR,
  UPDATE_ABOUT,
  UPDATE_ABOUT_COMPLETE,
  UPDATE_ABOUT_ERROR,
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
        about: action.about?.sort(sortById),
      };
    case GET_ABOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      };
    case UPDATE_ABOUT:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_ABOUT_COMPLETE:
      return {
        ...state,
        isLoading: false,
        about: [
          ...state.about.filter((el) => el._id !== action.selectedAbout?._id),
          action.selectedAbout,
        ].sort(sortById),
      };
    case UPDATE_ABOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      };

    default:
      return state;
  }
}

function sortById(a: any, b: any): number {
  if (a._id < b._id) {
    return -1;
  } else if (a._id > b._id) {
    return 1;
  } else {
    return 0;
  }
}
