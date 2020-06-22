import Axios from '../../utils/auth.interceptor';
import { Slider } from './../interfaces';
import {
  GET_SLIDER,
  GET_SLIDER_COMPLETE,
  GET_SLIDER_ERROR,
  UPDATE_SLIDER,
  UPDATE_SLIDER_COMPLETE,
  UPDATE_SLIDER_ERROR,
} from './actionTypes';

export interface ActionCreator {
  type: string;
  slides?: Slider[];
  selectedSlider?: Slider;
  id?: string;
  error?: any;
}

export function getSlider() {
  return async (dispatch: (actionCreator: ActionCreator) => void) => {
    try {
      dispatch({ type: GET_SLIDER });
      const response = await Axios.get('/api/slider');

      if (response.status < 400) {
        dispatch(getSliderSuccess(response.data));
      } else {
        dispatch(errorAction(GET_SLIDER_ERROR, response.data));
      }
    } catch (error) {
      console.trace(error);
      dispatch(errorAction(GET_SLIDER_ERROR, error));
    }
  };
}

export function updateSlider(slider: Slider, id: string) {
  return async (dispatch: (actionCreator: ActionCreator) => void) => {
    try {
      dispatch({ type: UPDATE_SLIDER });
      const response = await Axios.put(`/api/slider/${id}`, slider);

      if (response.status < 400) {
        dispatch(updateSliderSuccess(response.data));
      } else {
        dispatch(errorAction(UPDATE_SLIDER_ERROR, response.data));
      }
    } catch (error) {
      console.trace(error);
      dispatch(errorAction(UPDATE_SLIDER_ERROR, error));
    }
  };
}

export function getSliderSuccess(slides: Slider[]): ActionCreator {
  return {
    type: GET_SLIDER_COMPLETE,
    slides,
  };
}

export function updateSliderSuccess(selectedSlider: Slider): ActionCreator {
  return {
    type: UPDATE_SLIDER_COMPLETE,
    selectedSlider,
  };
}

export function errorAction(type: string, error: any): ActionCreator {
  return { type, error };
}
