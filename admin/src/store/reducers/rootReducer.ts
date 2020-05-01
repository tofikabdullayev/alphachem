import { combineReducers } from 'redux';
import productsReducer from './products';
import contactsReducer from './contacts';

export default combineReducers({
  productsPage: productsReducer,
  contactsPage: contactsReducer,
});
