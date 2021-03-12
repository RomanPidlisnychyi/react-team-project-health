import { createReducer } from '@reduxjs/toolkit';
import rationItemsActions from './rationItemsActions';
import authActions from '../auth/authActions';
import rationsItemActions from '../dairy/rationsItemActions';
import rationsItemActionsKolya from '../dairy/rationsItemActions';

//================ from Kolya =====================================
const onItemUpdate = (state, action) => {
  const rationItems = state.rationItems.filter(
    el => el.title !== action.payload.title,
  );
  const date = state.date;
  const ar = { rationItems: [...rationItems, action.payload], date };
  return ar;
};
//=================================================================

const initialState = { date: null, rationItems: [] };

const onDeleteRationItem = (state, action) => {
  const newRationItems = state.rationItems.filter(
    ({ _id }) => _id !== action.payload,
  );

  return { ...state, rationItems: newRationItems };
};

const ration = createReducer(initialState, {
  [rationItemsActions.fetchRationItemsSuccess]: (state, action) =>
    action.payload,
  [authActions.logoutSuccess]: (state, action) => initialState,
  [rationItemsActions.fetchRationItemsError]: (_, { payload }) => ({
    ...initialState,
    date: payload,
  }),
  [rationItemsActions.deleteRationItemSuccess]: onDeleteRationItem,
  [rationItemsActions.rationsItemUpdate]: onItemUpdate,
  // [rationsItemActionsKolya.dateToStore]: onDateToStor,
});

export default ration;
