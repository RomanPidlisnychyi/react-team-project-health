import { createAction } from '@reduxjs/toolkit';

// const getListNotRecomendedProductsAndCaloriesRequest = createAction(
//   'notrecomendedproductsRequest',
// );
// const getListNotRecomendedProductsAndCaloriesSuccess = createAction(
//   'notrecomendedproductsSuccess',
// );
// const getListNotRecomendedProductsAndCaloriesError = createAction(
//   'notrecomendedproductsError',
// );

// export default {
//   getListNotRecomendedProductsAndCaloriesRequest,
//   getListNotRecomendedProductsAndCaloriesSuccess,
//   getListNotRecomendedProductsAndCaloriesError,
// };

const getNotProductsRequest = createAction(
  '/notrecomendedproducts/getnotproductsRequest',
);
const getNotProductsSuccess = createAction(
  '/notrecomendedproducts/getnotproductsSuccess',
);
const getNotProductsError = createAction(
  '/notrecomendedproducts/getnotproductsError',
);


export default {
  getNotProductsRequest,
  getNotProductsSuccess,
  getNotProductsError,
};
