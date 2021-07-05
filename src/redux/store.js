import { createStore } from "redux";
const reducer = (state = [], action) => {
  return state;
};
const reducer1 = (state = "", action) => {
  return state;
};
const store = createStore(reducer);
export default store;
