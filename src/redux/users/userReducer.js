import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import userActions from './userActions';

const initialState = {
  height: '',
  age: '',
  currentWeight: '',
  desiredWeight: '',
  bloodGroup: '',
};

const createUserParams = (state, action) => [...state, action.payload];


// const params = createReducer([], {
const listUserParams = createReducer(initialState, {
    [userActions.addUserParamsSuccess]: createUserParams,
    // [userActions.addUserParamsRequest]: (state, action) => action.payload.user,
//   [userActions.getCurrentUserSuccess]: (_, { payload }) => payload.user,
//   [userActions.getListNotRecomendedProductsAndCaloriesSuccess]: (
//     _,
//     { payload },
//   ) => payload,
});

// const error = createReducer({
//   [userActions.addUserParamsError]: (_, { payload }) => payload,
//   [userActions.getListNotRecomendedProductsAndCaloriesError]: (
//     _,
//     { payload },
//   ) => payload,
// });

export default combineReducers({
    listUserParams,
  //   error
});
