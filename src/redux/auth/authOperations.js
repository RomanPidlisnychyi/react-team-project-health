import axios from 'axios';
import { authActions, authSelectors } from '../auth';
import { store } from 'react-notifications-component';
import apiURL from '../../services/apiURL';

axios.defaults.baseURL = `${apiURL}/auth`;

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
    .post('/register', user)
    .then(res => {
      store.addNotification({
        type: 'success',
        message: 'Поздравляем! Регистрация прошла успешно =)',
        container: 'center',
        animationIn: ['animate__animated animate__zoomIn'],
        animationOut: ['animate__animated animate__zoomOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
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
          duration: 5000,
          onScreen: true,
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

  return axios
    .put('/login', user)
    .then(response => {
      token.set(response.data.token.accessToken);
      dispatch(authActions.loginSuccess(response.data));
      return response.data.token;
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

      dispatch(authActions.logoutError(error.message));
    });
};

const logOut = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .patch('/logout')
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
      return data;
    })
    .catch(error => {
      dispatch(authActions.currentError(error));
    });
};

const refresh = expiresIn => (dispatch, getState) => {
  const intervalId = setInterval(() => {
    const state = getState();
    const { refreshToken } = authSelectors.getObjToken(state);

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
          clearInterval(intervalId);
          dispatch(authActions.refreshError('Пользователь не авторизован'));
          return;
        }

        const newRefreshToken = data.refreshToken;
        dispatch(authActions.refreshSuccess(newRefreshToken));
      })
      .catch(error => {
        clearInterval(intervalId);
        dispatch(authActions.refreshError(error));
      });
  }, expiresIn * 900);

  // expiresIn - на API это значение жизни токена в секундах.
  // setInterval - работает в милисекундах потому делаем значение немного меньше
  // чем жизнь токена на сервере.
};

export default { register, logIn, logOut, current, refresh };
