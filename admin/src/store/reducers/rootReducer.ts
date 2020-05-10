import { combineReducers } from 'redux';
import productsReducer from './products';
import contactsReducer from './contacts';
import aboutReducer from './about';
import sliderReducer from './slider';

export default combineReducers({
  productsPage: productsReducer,
  contactsPage: contactsReducer,
  aboutPage: aboutReducer,
  sliderPage: sliderReducer,
});
