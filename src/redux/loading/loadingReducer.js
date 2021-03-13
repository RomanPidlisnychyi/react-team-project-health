import { createReducer } from '@reduxjs/toolkit';
import { loadingActions } from './';
import { authActions } from '../auth';
import { notrecomendedproductsActions } from '../notrecomendedproducts';

const loading = createReducer(false, {
  [loadingActions.onLoading]: () => true,
  [loadingActions.offLoading]: () => false,
  [authActions.loginRequest]: () => true,
  [authActions.loginSuccess]: () => false,
  [authActions.loginError]: () => false,
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.currentRequest]: () => true,
  [authActions.currentSuccess]: () => false,
  [authActions.currentError]: () => false,
  [notrecomendedproductsActions.getNotProductsRequest]: () => true,
  [notrecomendedproductsActions.getNotProductsSuccess]: () => false,
  [notrecomendedproductsActions.getNotProductsError]: () => false,
});

export default loading;
