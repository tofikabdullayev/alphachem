import { Contacts } from './../interfaces';
import {
  GET_CONTACTS_COMPLETE,
  GET_CONTACTS_ERROR,
  UPDATE_CONTACTS_COMPLETE,
  UPDATE_CONTACTS_ERROR,
  GET_CONTACTS,
  UPDATE_CONTACTS,
} from '../actions/actionTypes';
import { ActionCreator } from '../actions/contacts';

export interface ContactsPageState {
  contacts: Contacts;
  isLoading: boolean;
  errorMessage?: string;
}

const initialState: ContactsPageState = {
  contacts: {
    adress: {
      az: '',
      en: '',
      ru: '',
    },
    phones: [],
    emails: [],
    location: { lat: '', long: '' },
  },
  isLoading: false,
};

export default function contactsReducer(
  state: ContactsPageState = initialState,
  action: ActionCreator
) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CONTACTS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        contacts: action.contacts,
      };
    case GET_CONTACTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_CONTACTS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        contacts: action.contacts,
      };
    case UPDATE_CONTACTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error,
      };

    default:
      return state;
  }
}
