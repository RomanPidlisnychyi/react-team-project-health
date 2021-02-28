import { createAction } from '@reduxjs/toolkit';

const onLoading = createAction('ON_LOADING');
const offLoading = createAction('OFF_LOADING');

export default {
  onLoading,
  offLoading,
};
