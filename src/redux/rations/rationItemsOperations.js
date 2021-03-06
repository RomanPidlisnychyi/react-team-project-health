import axios from 'axios';
import rationItemsActions from './rationItemsActions';
import HEROKU from '../../services/apiURL';

// axios.defaults.baseURL = 'https://health-fsoff2.herokuapp.com';

const fetchRationItems = date => dispatch => {
  dispatch(rationItemsActions.fetchRationItemsRequest());

  axios
    .get(`/users/infobyday/${date}`)
    .then(response =>
      dispatch(
        rationItemsActions.fetchRationItemsSuccess({
          rationItems: response.data,
          date,
        }),
      ),
    )
    .catch(error =>
      dispatch(rationItemsActions.fetchRationItemsError(error.response.data)),
    );
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
  .then(() => dispatch(rationItemsActions.deleteRationItemSuccess(id)))
  .catch(error => dispatch(rationItemsActions.deleteRationItemError(error)));
};

const rationItemsOperations = {
  fetchRationItems,
  deleteRationItem,
};

export default rationItemsOperations;