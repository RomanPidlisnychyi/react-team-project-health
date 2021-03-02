import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import notrecomendedproductsActions from './notrecomendedproductsActions';

const notrecomendedproducts = createReducer(null, {
  [notrecomendedproductsActions.getListNotRecomendedProductsAndCaloriesSuccess]: (
    _,
    { payload },
  ) => payload,
});

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
