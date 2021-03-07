import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';
import modalActions from '../modal/modalActions';

const initialUserState = { name: null, email: null };
const initialTokenState = {
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
};

const initialStateParams = {
  height: null,
  age: null,
  currentWeight: null,
  desiredWeight: null,
  bloodGroup: null,
};

const user = createReducer(initialUserState, {
  [authActions.registerSucces]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.currentSuccess]: (_, { payload }) => payload.user,
  [authActions.currentError]: () => initialUserState,
  [authActions.refreshError]: () => initialUserState,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.logoutError]: () => initialUserState,
});

const token = createReducer(initialTokenState, {
  [authActions.registerSucces]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.currentSuccess]: (_, { payload }) => payload.token,
  [authActions.currentError]: () => initialTokenState,
  [authActions.refreshSuccess]: (state, { payload }) => ({
    ...state,
    refreshToken: payload,
  }),
  [authActions.refreshError]: () => initialTokenState,
  [authActions.logoutSuccess]: () => initialTokenState,
  [authActions.logoutError]: () => initialTokenState,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerSucces]: () => null,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginSuccess]: () => null,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => null,
  [authActions.currentError]: (_, { payload }) => payload,
  [authActions.currentSuccess]: () => null,
  [authActions.refreshError]: (_, { payload }) => payload,
  [authActions.refreshSuccess]: () => null,
});

// const createUserParams = (state, action) => {
//   return [...state, action.payload];
// };

const params = createReducer(initialStateParams, {
  //   [authActions.paramsSuccess]: createUserParams,
  [authActions.paramsSuccess]: (_, { payload }) => payload,
  // [modalActions.onModal]: () => true,
  // [modalActions.offModal]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  params,
});
