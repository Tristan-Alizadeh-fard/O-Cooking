import { createStore } from "redux";

import reducer from 'src/reducers';

const store = createStore(
  // reducer
  reducer,
);

export default store;
