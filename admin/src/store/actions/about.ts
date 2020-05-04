import Axios from 'axios';
import { About } from './../interfaces';
import {
  GET_ABOUT,
  GET_ABOUT_COMPLETE,
  GET_ABOUT_ERROR,
  //   UPDATE_ABOUT,
  UPDATE_ABOUT_COMPLETE,
  //   UPDATE_ABOUT_ERROR,
} from './actionTypes';

export interface ActionCreator {
  type: string;
  about?: About[];
  selectedAbout?: About;
  id?: string;
  error?: any;
}

export function getAbout() {
  return async (dispatch: (actionCreator: ActionCreator) => void) => {
    try {
      dispatch({ type: GET_ABOUT });
      const response = await Axios.get('/api/about');

      if (response.status < 400) {
        dispatch(getAboutSuccess(response.data));
      } else {
        dispatch(errorAction(GET_ABOUT_ERROR, response.data));
      }
    } catch (error) {
      console.trace(error);
      dispatch(errorAction(GET_ABOUT_ERROR, error));
    }
  };
}

export function getAboutSuccess(about: About[]): ActionCreator {
  return {
    type: GET_ABOUT_COMPLETE,
    about,
  };
}

export function updateAboutSuccess(selectedAbout: About): ActionCreator {
  return {
    type: UPDATE_ABOUT_COMPLETE,
    selectedAbout,
  };
}

export function errorAction(type: string, error: any): ActionCreator {
  return { type, error };
}
