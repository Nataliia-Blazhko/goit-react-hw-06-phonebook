import { combineReducers } from 'redux';
import * as actions from './phonebook_types';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_CONTACT:
      return [...state, action.payload];
    case actions.DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  console.log(action.payload);
  switch (action.type) {
    case actions.HANDLE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
export default phonebookReducer;
