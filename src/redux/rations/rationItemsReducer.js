import { createReducer } from '@reduxjs/toolkit';
import rationItemsActions from './rationItemsActions';

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
  [rationItemsActions.fetchRationItemsError]: (state, action) => initialState,
  [rationItemsActions.deleteRationItemSuccess]: onDeleteRationItem,
});

export default ration;
