import { Slider } from './../interfaces';
import {
  GET_SLIDER,
  GET_SLIDER_COMPLETE,
  GET_SLIDER_ERROR,
  UPDATE_SLIDER,
  UPDATE_SLIDER_COMPLETE,
  UPDATE_SLIDER_ERROR,
} from '../actions/actionTypes';
import { ActionCreator } from '../actions/slider';

export interface SliderPageState {
  slides: Slider[];
  isLoading: boolean;
  errorMessage?: string;
}

const initialState: SliderPageState = {
  slides: [],
  isLoading: false,
};

export default function sliderReducer(
  state: SliderPageState = initialState,
  action: ActionCreator
) {
  switch (action.type) {
    case GET_SLIDER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SLIDER_COMPLETE:
      return {
        ...state,
        isLoading: false,
        slides: action.slides?.sort(sortById),
      };
    case GET_SLIDER_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      };
    case UPDATE_SLIDER:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_SLIDER_COMPLETE:
      return {
        ...state,
        isLoading: false,
        slides: [
          ...state.slides.filter((el) => el._id !== action.selectedSlider?._id),
          action.selectedSlider,
        ].sort(sortById),
      };
    case UPDATE_SLIDER_ERROR:
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
