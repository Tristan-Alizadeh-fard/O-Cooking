// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import user from 'src/middlewares/user';
import recipe from 'src/middlewares/recipe';
import reducer from 'src/reducers';
import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle'
import { createStore, applyMiddleware } from 'redux';

// const enhancers = composeWithDevTools(
//  applyMiddleware(
//   user,
//    ... d'autres middlewares
//  ),
// );

export const saveStateLocal = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('state', serialState);
  }
  catch (e) {
    console.log(e);
  }
};

export const loadStateLocal = () => {
  try {
    const serialState = localStorage.getItem('state');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  }
  catch (e) {
    console.log(e);
    return undefined;
  }
};

const persistState = loadStateLocal();
const store = configureStore({
  persistState,
  reducer,
  
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(user),
  middleware: [user, recipe],
});

store.subscribe(() => saveStateLocal(store.getState()));

export default store;
