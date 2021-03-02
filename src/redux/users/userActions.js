import { createAction } from '@reduxjs/toolkit';

const addUserParamsRequest = createAction('users/paramsRequest');
const addUserParamsSuccess = createAction('users/paramsSuccess');
const addUserParamsError = createAction('users/paramsError');

// const getCurrentUserRequest = createAction('users/currentRequest');
// const getCurrentUserSuccess = createAction('users/currentSuccess');
// const getCurrentUserError = createAction('users/currentError');

// const getListNotRecomendedProductsAndCaloriesRequest = createAction(
//   'notrecomendedproductsRequest',
// );
// const getListNotRecomendedProductsAndCaloriesSuccess = createAction(
//   'notrecomendedproductsSuccess',
// );
// const getListNotRecomendedProductsAndCaloriesError = createAction(
//   'notrecomendedproductsError',
// );

export default {
  addUserParamsRequest,
  addUserParamsSuccess,
  addUserParamsError,
//   getCurrentUserRequest,
//   getCurrentUserSuccess,
//   getCurrentUserError,
//   getListNotRecomendedProductsAndCaloriesRequest,
//   getListNotRecomendedProductsAndCaloriesSuccess,
//   getListNotRecomendedProductsAndCaloriesError,
};
