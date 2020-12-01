import { combineReducers } from 'redux';
// import the different reducers
import userReducer from './user';
import recipeReducer from './recipe';

const originReducer = combineReducers({
  user: userReducer,
  recipe: recipeReducer,
  // add more down here
});

export default originReducer;
