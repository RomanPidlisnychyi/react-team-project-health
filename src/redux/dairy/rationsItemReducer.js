import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import rationsItemActions from './rationsItemActions';

// const onItemUpdate = (state, action) => {
//     const mm = state.filter(el => el.title !== action.payload.title);
//     const ar = [...mm, action.payload];
//     return ar;
// }

// const rationsReducer = createReducer({}, {
//     [rationsItemActions.getInfoByDateSuccess]: (state, action) => action.payload,
//     [rationsItemActions.getInfoByDateError]: (state, action) => ({}),
//     [rationsItemActions.rationsItemUpdate]: onItemUpdate,
// })

const errorReducer = createReducer(
  {},
  {
    [rationsItemActions.getProductsError]: (state, action) => action.payload,
    [rationsItemActions.getTitlesError]: (state, action) => action.payload,
    [rationsItemActions.getInfoByDateError]: (state, action) => action.payload,
  },
);

const rootReducer = combineReducers({
    error: errorReducer,
})

const objReducer = {
    error: errorReducer,
}

// export default rootReducer;
export default objReducer;
