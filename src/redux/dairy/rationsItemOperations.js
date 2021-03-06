import Axios from 'axios';
import rationsItemActions from './rationsItemActions';
import { authActions } from '../auth';
import HEROKU from '../../services/apiURL';
import generateCurrentDate from '../../services/generateCurrentDate';

const getInfoByDate = date => dispatch => {
  dispatch(rationsItemActions.getInfoByDateRequest());

  return new Promise((res, rej) => {
    Axios(`${HEROKU}/users/infobyday/${date}`)
      .then(response =>
        res(dispatch(rationsItemActions.getInfoByDateSuccess(response.data))),
      )
      .catch(error =>
        rej(
          dispatch(rationsItemActions.getInfoByDateError(error.response.data)),
        ),
      );
  });
};

const rationsItemAdd = param => dispatch => {
  const date = param.date ? param.date : generateCurrentDate();

  const options = {
    date,
    productTitle: param.productTitle,
    weight: param.weight,
  };

  dispatch(rationsItemActions.rationsItemAddRequest(param));

  return new Promise((res, rej) => {
    Axios.post(`${HEROKU}/rations`, options)
      .then(response => {
        if (response.status === 401) {
          dispatch(authActions.logoutError());
          return;
        }

        return res(
          dispatch(rationsItemActions.rationsItemAddSuccess(response.data)),
        );
      })
      .catch(error => {
        if (error.response.status === 401) {
          dispatch(authActions.logoutError());
          return;
        }

        return rej(
          dispatch(rationsItemActions.rationsItemAddError(error.response.data)),
        );
      });
  });
};

const rationsItemUpdate = param => dispatch => {
  dispatch(rationsItemActions.rationsItemUpdate(param));
};

const dateToStore = param => dispatch => {
  dispatch(rationsItemActions.dateToStore(param));
};

const getProducts = spr => {
  if (spr === '' || spr.length === 1) {
    return;
  }

  return new Promise((res, rej) => {
    Axios.get(`${HEROKU}/products/query/?${spr}`)
      .then(response => res(response.data))
      .catch(error => rej(error.response.data));
  });
};

export default {
  getInfoByDate,
  getProducts,
  rationsItemAdd,
  rationsItemUpdate,
  dateToStore,
};
