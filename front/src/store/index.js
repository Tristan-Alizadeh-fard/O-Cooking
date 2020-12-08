// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import user from 'src/middlewares/user';
import recipe from 'src/middlewares/recipe';
import reducer from 'src/reducers';
import { configureStore } from '@reduxjs/toolkit';

// const enhancers = composeWithDevTools(
//  applyMiddleware(
//   user,
//    ... d'autres middlewares
//  ),
// );

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(user),
  middleware: [user, recipe],
});

export default store;
