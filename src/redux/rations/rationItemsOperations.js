import axios from 'axios';
import rationItemsActions from './rationItemsActions';
import { authActions } from '../auth';
import HEROKU from '../../services/apiURL';
import generateCurrentDate from '../../services/generateCurrentDate';

const fetchRationItems = someDate => dispatch => {
  dispatch(rationItemsActions.fetchRationItemsRequest());

  const date = someDate ? someDate : generateCurrentDate();

  return axios
    .get(`/users/infobyday/${date}`)
    .then(response => {
      dispatch(
        rationItemsActions.fetchRationItemsSuccess({
          rationItems: response.data,
          date,
        }),
      );
      return response;
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(authActions.logoutError());
        return;
      }
      dispatch(rationItemsActions.fetchRationItemsError(date));
    });
};

const deleteRationItem = (id, date) => dispatch => {
  dispatch(rationItemsActions.deleteRationItemRequest());

  const options = {
    method: 'DELETE',
    headers: {
      Authorization: axios.defaults.headers.common.Authorization,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date }),
  };

  fetch(`${HEROKU}/rations/${id}`, options)
    .then(response => {
      if (response.status === 401) {
        dispatch(authActions.logoutError());
        return;
      }

      dispatch(rationItemsActions.deleteRationItemSuccess(id));
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch(authActions.logoutError());
        return;
      }
      dispatch(rationItemsActions.deleteRationItemError(error));
    });
};

const rationsItemUpdate = param => dispatch => {
  dispatch(rationItemsActions.rationsItemUpdate(param));
};

const rationItemsOperations = {
  fetchRationItems,
  deleteRationItem,
  rationsItemUpdate,
};

export default rationItemsOperations;
