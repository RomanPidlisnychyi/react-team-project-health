import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import notrecomendedproductsActions from './notrecomendedproductsActions';

const categoriesList = createReducer([], {
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
  categoriesList,
  dailyCalorieNormInteger,
});
