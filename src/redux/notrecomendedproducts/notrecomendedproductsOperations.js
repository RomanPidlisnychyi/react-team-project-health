import axios from 'axios';
import notrecomendedproductsActions from './notrecomendedproductsActions';
import { authActions, authSelectors } from '../auth';
import apiURL from '../../services/apiURL';

const getListNotRecomendedProductsAndCalories = userParams => (
  dispatch,
  getState,
) => {
  const state = getState();
  const token = authSelectors.getToken(state);

  dispatch(notrecomendedproductsActions.getNotProductsRequest());

  return axios
    .post(`${apiURL}/notrecomendedproducts`, userParams)
    .then(response => {
      dispatch(
        notrecomendedproductsActions.getNotProductsSuccess(response.data),
      );

      if (!token) {
        dispatch(authActions.setNotAuthorizedParams(userParams));
      }

      return response.data;
    })
    .catch(error =>
      dispatch(
        notrecomendedproductsActions.getNotProductsError(error.response.data),
      ),
    );
};

const getNotRecommendedProductListByCategory = (category, bloodGroup) => {
  return fetch(
    `${apiURL}/notrecomendedproducts/${category}/${bloodGroup}`,
  ).then(response => response.json());
};

export default {
  getListNotRecomendedProductsAndCalories,
  getNotRecommendedProductListByCategory,
};
