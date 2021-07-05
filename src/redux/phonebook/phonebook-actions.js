export const addContact = (value) => {
  return {
    type: "ADD_CONTACT",
    payload: value,
  }
};

export const deleteContact = (id) => ({
    type: "DELETE_CONTACT",
    payload: id,
});