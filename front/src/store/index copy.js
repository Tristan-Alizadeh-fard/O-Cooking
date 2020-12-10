import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from 'src/middlewares/user';
import reducer from 'src/reducers';

function saveStateLocal(state) {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('state', serialState);
  }
  catch (e) {
    console.log(e);
  }
}

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

store.subscribe(() => saveStateLocal(store.getState().user));

export default store;
