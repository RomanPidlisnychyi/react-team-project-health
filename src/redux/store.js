import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadingReducer } from './loading';
import { modalReducer } from './modal';

import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import rationsItemReducer from './dairy/rationsItemReducer';
import { notrecomendedproductsReducer } from './notrecomendedproducts';

import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  FLUSH,
} from 'redux-persist';
import ration from '../redux/rations/rationItemsReducer';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

console.log('REDUCER: ', rationsItemReducer);

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
    ...rationsItemReducer,
    ration,
    notrecomendedproducts: notrecomendedproductsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
export const persistor = persistStore(store);
