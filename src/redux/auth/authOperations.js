import axios from 'axios';
import { authActions, authSelectors } from '../auth';
import { notrecomendedproductsOperations } from '../notrecomendedproducts';
import { rationItemsOperations } from '../rations';
import { store } from 'react-notifications-component';
import apiURL from '../../services/apiURL';

axios.defaults.baseURL = `${apiURL}`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {
  const user = {
    name: credentials.name,
    email: credentials.email,
    password: credentials.password,
  };
  dispatch(authActions.registerRequest());

  return axios
    .post('/auth/register', user)
    .then(res => {
      store.addNotification({
        type: 'success',
        message:
          'На указанный Вами адрес почты выслано письмо для завершения регистрации.',
        container: 'center',
        animationIn: ['animate__animated animate__zoomIn'],
        animationOut: ['animate__animated animate__zoomOut'],
        dismiss: {
          duration: 10000,
          onScreen: true,
          showIcon: true,
        },
      });
    })
    .then(res => {
      store.addNotification({
        type: 'info',
        message:
          'Чтобы войти, пожалуйста подтвердите Вашу почту перейдя по ссылке в письме',
        container: 'top-full',
        animationIn: ['animate__animated animate__zoomIn'],
        animationOut: ['animate__animated animate__zoomOut'],
        dismiss: {
          duration: 0,
          onScreen: true,
          showIcon: true,
        },
      });
    })
    .catch(error => {
      store.addNotification({
        type: 'danger',
        message: error.response.data.message,
        container: 'center',
        animationIn: ['animate__animated animate__zoomIn'],
        animationOut: ['animate__animated animate__zoomOut'],
        dismiss: {
          duration: 10000,
          onScreen: true,
          showIcon: true,
        },
      });

      dispatch(authActions.registerError(error.message));
      return error;
    });
};

const logIn = credentials => dispatch => {
  const user = {
    email: credentials.email,
    password: credentials.password,
  };

  dispatch(authActions.loginRequest());

  axios
    .put('/auth/login', user)
    .then(response => {
      token.set(response.data.token.accessToken);
      dispatch(authActions.loginSuccess(response.data));
      if (response.data.user.params && response.data.user.params.age) {
        dispatch(
          notrecomendedproductsOperations.getListNotRecomendedProductsAndCalories(
            response.data.user.params,
          ),
        );
      }
      dispatch(rationItemsOperations.fetchRationItems());
      dispatch(refresh(response.data.token.expiresIn));
    })
    .catch(error => {
      store.addNotification({
        type: 'danger',
        message: error.response.data.message,
        container: 'center',
        animationIn: ['animate__animated animate__zoomIn'],
        animationOut: ['animate__animated animate__zoomOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });

      dispatch(authActions.loginError(error.message));
    });
};

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .patch('/auth/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })

    .catch(error => {
      store.addNotification({
        type: 'danger',
        message: error.response.data.message,
        container: 'center',
        animationIn: ['animate__animated animate__zoomIn'],
        animationOut: ['animate__animated animate__zoomOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });

      dispatch(authActions.logoutError(error));
    });
};

const current = accessToken => dispatch => {
  token.set(accessToken);

  dispatch(authActions.currentRequest());

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: null,
  };

  return fetch(`${apiURL}/users/current`, options)
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        dispatch(authActions.currentError('Пользователь не авторизован'));
        return;
      }

      dispatch(authActions.currentSuccess(data));
      if (data.user.params && data.user.params.age) {
        dispatch(
          notrecomendedproductsOperations.getListNotRecomendedProductsAndCalories(
            data.user.params,
          ),
        );
      }
      dispatch(rationItemsOperations.fetchRationItems());
      dispatch(refresh(data.token.expiresIn));
    })
    .catch(error => {
      dispatch(authActions.currentError(error));
    });
};

const refresh = expiresIn => (dispatch, getState) => {
  const setIntervalId = setInterval(() => {
    const state = getState();
    const { refreshToken } = authSelectors.getObjToken(state);
    if (!refreshToken) {
      clearInterval(setIntervalId);
      dispatch(authActions.refreshError());
      return;
    }

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        'Content-Type': 'application/json',
      },
      body: null,
    };

    return fetch(`${apiURL}/users/refresh`, options)
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          clearInterval(setIntervalId);
          dispatch(authActions.refreshError('Пользователь не авторизован'));
          return;
        }

        const newRefreshToken = data.refreshToken;
        dispatch(authActions.refreshSuccess(newRefreshToken));
      })
      .catch(error => {
        clearInterval(setIntervalId);
        dispatch(authActions.refreshError(error));
      });
  }, expiresIn * 900);

  // expiresIn - на API это значение жизни токена в секундах.
  // setInterval - работает в милисекундах потому делаем значение немного меньше
  // чем жизнь токена на сервере.
};

const params = userData => dispatch => {
  dispatch(authActions.paramsRequest());

  return axios
    .patch(`${apiURL}/users/params`, userData)
    .then(response => {
      dispatch(authActions.paramsSuccess(response.data));
      dispatch(
        notrecomendedproductsOperations.getListNotRecomendedProductsAndCalories(
          response.data,
        ),
      );

      return response.data;
    })
    .catch(error => dispatch(authActions.paramsError(error)));
};

export default { register, logIn, logOut, current, refresh, params };
