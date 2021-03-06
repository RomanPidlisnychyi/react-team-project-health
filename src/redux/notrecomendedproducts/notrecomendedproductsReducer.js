import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import notrecomendedproductsActions from './notrecomendedproductsActions';

const initialNotRecomProductsState = [];

const notrecomendedproducts = createReducer(initialNotRecomProductsState, {
  [notrecomendedproductsActions.getNotProductsSuccess]: (_, { payload }) =>
    // payload.data,
    payload,
  [notrecomendedproductsActions.getNotProductsError]: () =>
    initialNotRecomProductsState,
});
// [authActions.currentError]: () => initialUserState,
// const error = createReducer({
//   [notrecomendedproductsActions.getListNotRecomendedProductsAndCaloriesError]: (
//     _,
//     { payload },
//   ) => payload,
// });

export default combineReducers({
  notrecomendedproducts,
  //   error
});
