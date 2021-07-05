import { combineReducers } from "redux";

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload]
      case "DELETE_CONTACT":
        return state.filter((contact) => contact.id !==  action.payload)
    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  return state;
};

const phonebookReducer =  combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});
export default phonebookReducer;