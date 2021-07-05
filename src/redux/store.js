import { combineReducers, createStore } from "redux";
import phonebookReducer from './phonebook/phonebook-reducer'

const RootReducer = combineReducers({
  phonebook: phonebookReducer
})

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// {
//   phonebook: {
//     contacts: [],
//     filter: ''
//   }
// }


export default store;