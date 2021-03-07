import { createAction } from '@reduxjs/toolkit';

const getNotProductsRequest = createAction(
  '/notrecomendedproducts/getRequest',
);
const getNotProductsSuccess = createAction(
  '/notrecomendedproducts/getSuccess',
);
const getNotProductsError = createAction(
  '/notrecomendedproducts/getError',
);


export default {
  getNotProductsRequest,
  getNotProductsSuccess,
  getNotProductsError,
};
