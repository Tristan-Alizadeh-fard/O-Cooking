import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from 'src/middlewares/user';
import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    user,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  enhancers,
);

export default store;
