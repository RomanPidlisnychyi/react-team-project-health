import { createAction } from '@reduxjs/toolkit';

const getListNotRecomendedProductsAndCaloriesRequest = createAction(
  'notrecomendedproductsRequest',
);
const getListNotRecomendedProductsAndCaloriesSuccess = createAction(
  'notrecomendedproductsSuccess',
);
const getListNotRecomendedProductsAndCaloriesError = createAction(
  'notrecomendedproductsError',
);

export default {
  getListNotRecomendedProductsAndCaloriesRequest,
  getListNotRecomendedProductsAndCaloriesSuccess,
  getListNotRecomendedProductsAndCaloriesError,
};
