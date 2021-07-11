import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './phonebook-actions';

export const contactsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer('', {
  [actions.handleFilter]: (state, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
export default phonebookReducer;
