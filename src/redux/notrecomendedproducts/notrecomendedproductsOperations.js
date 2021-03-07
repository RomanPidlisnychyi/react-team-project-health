import axios from 'axios';
import notrecomendedproductsActions from './notrecomendedproductsActions';
import apiURL from '../../services/apiURL';
import modalActions from '../modal/modalActions';

const getListNotRecomendedProductsAndCalories = userParams => async dispatch => {
  dispatch(notrecomendedproductsActions.getNotProductsRequest());
  dispatch(modalActions.offModal());

  await axios
    .post(`${apiURL}/notrecomendedproducts`, userParams)
    .then(response => {
      dispatch(
        notrecomendedproductsActions.getNotProductsSuccess(response.data),
      );
      dispatch(modalActions.onModal());
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
