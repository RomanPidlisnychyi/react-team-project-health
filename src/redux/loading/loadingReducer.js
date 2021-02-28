import { createReducer } from '@reduxjs/toolkit';
import { loadingActions } from './';

const loading = createReducer(false, {
  [loadingActions.onLoading]: () => true,
  [loadingActions.offLoading]: () => false,
});

export default loading;
