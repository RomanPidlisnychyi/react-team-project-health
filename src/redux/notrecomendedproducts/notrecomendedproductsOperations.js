import axios from 'axios';
import notrecomendedproductsActions from './notrecomendedproductsActions';
import apiURL from '../../services/apiURL';

const getListNotRecomendedProductsAndCalories = userParams => async dispatch => {
  dispatch(notrecomendedproductsActions.getNotProductsRequest());

  return await axios
    .post(`${apiURL}/notrecomendedproducts`, userParams)
    .then(response => {
      dispatch(
        notrecomendedproductsActions.getNotProductsSuccess(response.data),
      );
      return response.data;
    })
    .catch(error =>
      dispatch(
        notrecomendedproductsActions.getNotProductsError(error.response.data),
      ),
    );
};

export default {
  getListNotRecomendedProductsAndCalories,
};
