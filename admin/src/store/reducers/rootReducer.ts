import { combineReducers } from 'redux';
import productsReducer from './products';
import contactsReducer from './contacts';
import aboutReducer from './about';

export default combineReducers({
  productsPage: productsReducer,
  contactsPage: contactsReducer,
  aboutPage: aboutReducer,
});
