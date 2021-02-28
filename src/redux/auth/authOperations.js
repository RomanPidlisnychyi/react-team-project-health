import axios from 'axios';
import authActions from './authActions';
import { store } from 'react-notifications-component';

axios.defaults.baseURL = 'https://health-fsoff2.herokuapp.com/auth';

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

  axios
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
    });
};

const logIn = credentials => dispatch => {
  const user = {
    email: credentials.email,
    password: credentials.password,
  };

  dispatch(authActions.loginRequest());

  axios
    .put('/login', user)
    .then(response => {
      token.set(response.data.token.accessToken);
      dispatch(authActions.loginSuccess(response.data));
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
  console.log('token', token);
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

export default { register, logIn, logOut };
