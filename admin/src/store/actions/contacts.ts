import Axios from '../../utils/auth.interceptor';
import { Contacts } from './../interfaces';
import {
  GET_CONTACTS,
  GET_CONTACTS_COMPLETE,
  GET_CONTACTS_ERROR,
  UPDATE_CONTACTS,
  UPDATE_CONTACTS_COMPLETE,
  UPDATE_CONTACTS_ERROR,
} from './actionTypes';

export interface ActionCreator {
  type: string;
  contacts?: Contacts;
  id?: string;
  error?: any;
}

export function getContacts() {
  return async (dispatch: (actionCreator: ActionCreator) => void) => {
    try {
      dispatch({ type: GET_CONTACTS });
      const response = await Axios.get('/api/contact');

      if (response.status < 400) {
        dispatch(getContactsSuccess(response.data));
      } else {
        dispatch(errorAction(GET_CONTACTS_ERROR, response.data));
      }
    } catch (error) {
      console.trace(error);
      dispatch(errorAction(GET_CONTACTS_ERROR, error));
    }
  };
}

export function updateContacts(contacts: Contacts) {
  return async (dispatch: (actionCreator: ActionCreator) => void) => {
    try {
      dispatch({ type: UPDATE_CONTACTS });
      const response = await Axios.put('/api/contact', contacts);
      if (response.status < 400) {
        dispatch(updateContactsSuccess(response.data));
      } else {
        dispatch(errorAction(UPDATE_CONTACTS_ERROR, response.data));
      }
    } catch (error) {
      console.trace(error);
      dispatch(errorAction(UPDATE_CONTACTS_ERROR, error));
    }
  };
}

export function getContactsSuccess(contacts: Contacts): ActionCreator {
  return {
    type: GET_CONTACTS_COMPLETE,
    contacts,
  };
}

export function updateContactsSuccess(contacts: Contacts): ActionCreator {
  return {
    type: UPDATE_CONTACTS_COMPLETE,
    contacts,
  };
}

export function errorAction(type: string, error: any): ActionCreator {
  return { type, error };
}
