import { createAction } from '@reduxjs/toolkit';

const fetchRationItemsRequest = createAction('rationItems/fetchRequest');
const fetchRationItemsSuccess = createAction('rationItems/fetchSuccess');
const fetchRationItemsError = createAction('rationItems/fetchError');

const deleteRationItemRequest = createAction('rationItems/deleteRequest');
const deleteRationItemSuccess = createAction('rationItems/deleteSuccess');
const deleteRationItemError = createAction('rationItems/deleteError');

const rationItemsActions = {
  fetchRationItemsRequest,
  fetchRationItemsSuccess,
  fetchRationItemsError,
  deleteRationItemRequest,
  deleteRationItemSuccess,
  deleteRationItemError,
};

export default rationItemsActions;
