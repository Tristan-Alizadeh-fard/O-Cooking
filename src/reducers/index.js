import { combineReducers } from "redux";
// import the different reducers
import useReducer from './user';

const originReducer = combineReducers({
  user: useReducer,
  // add more down here
});

export default originReducer;
