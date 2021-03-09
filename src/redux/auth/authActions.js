import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const currentRequest = createAction('auth/currentRequest');
const currentSuccess = createAction('auth/currentSuccess');
const currentError = createAction('auth/currentError');

const refreshRequest = createAction('auth/refreshRequest');
const refreshSuccess = createAction('auth/refreshSuccess');
const refreshError = createAction('auth/refreshError');

const paramsRequest = createAction('users/paramsRequest');
const paramsSuccess = createAction('users/paramsSuccess');
const setNotAuthorizedParams = createAction('users/setNotAuthorizedParams');
const paramsError = createAction('users/paramsError');

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  currentRequest,
  currentSuccess,
  currentError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  paramsRequest,
  paramsSuccess,
  setNotAuthorizedParams,
  paramsError,
};
