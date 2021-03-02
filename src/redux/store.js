import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadingReducer } from './loading';
import { modalReducer } from './modal';
import { userReducer } from './users';
import { notrecomendedproductsReducer } from './notrecomendedproducts';

import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
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

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
    users: userReducer,
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
