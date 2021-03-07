import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import notrecomendedproductsActions from './notrecomendedproductsActions';
// import modalActions from '../modal/modalActions';

const categiriesList = createReducer([], {
  [notrecomendedproductsActions.getNotProductsSuccess]: (_, { payload }) =>
    payload.listNotProducts,
  [notrecomendedproductsActions.getNotProductsError]: () => [],
});

const dailyCalorieNormInteger = createReducer(0, {
  [notrecomendedproductsActions.getNotProductsSuccess]: (_, { payload }) =>
    payload.dailyCalorieNormInteger,
  [notrecomendedproductsActions.getNotProductsError]: () => 0,
});

export default combineReducers({
  categiriesList,
  dailyCalorieNormInteger,
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
