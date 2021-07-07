import * as actions from './phonebook_types';
export const addContact = contact => {
  return {
    type: actions.ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = id => ({
  type: actions.DELETE_CONTACT,
  payload: id,
});

export const handleFilter = filter => {
  return {
    type: actions.HANDLE_FILTER,
    payload: filter,
  };
};
