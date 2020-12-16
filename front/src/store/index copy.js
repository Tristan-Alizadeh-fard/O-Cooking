import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from 'src/middlewares/user';
import reducer from 'src/reducers';

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
const enhancers = composeWithDevTools(
  applyMiddleware(
    user,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  persistState,
  enhancers,
);

store.subscribe(() => saveStateLocal(store.getState()));

export default store;
