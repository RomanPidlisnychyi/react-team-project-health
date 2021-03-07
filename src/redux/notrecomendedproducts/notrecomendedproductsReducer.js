import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import notrecomendedproductsActions from './notrecomendedproductsActions';
// import modalActions from '../modal/modalActions';

const initialNotRecomProductsState = [];

const notrecomendedproducts = createReducer(initialNotRecomProductsState, {
  [notrecomendedproductsActions.getNotProductsSuccess]: (_, { payload }) =>
    payload,
  // [modalActions.onModal]: () => true,
  [notrecomendedproductsActions.getNotProductsError]: () =>
    initialNotRecomProductsState,
});

export default combineReducers({
  notrecomendedproducts,
});

//* Action
// const onModal = createAction("ON_MODAL");
// const offModal = createAction("OFF_MODAL");

// export default {
//   onModal,
//   offModal,

//* Reducer
// import modalActions from "./modalActions";

// const modal = createReducer(false, {
//   [modalActions.onModal]: () => true,
//   [modalActions.offModal]: () => false,
// });
