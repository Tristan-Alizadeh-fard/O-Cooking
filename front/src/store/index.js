import user from 'src/middlewares/user';
import recipe from 'src/middlewares/recipe';
import OGreducer from 'src/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  stateReconciler: hardSet,
};

const reducer = persistReducer(persistConfig, OGreducer);

const store = configureStore({
  reducer,
  middleware: [user, recipe],
});

export const persistor = persistStore(store);

export default store;
