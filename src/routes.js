import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/HomeView' /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: '/login',
    label: 'Вход',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/LoginView' /* webpackChunkName: "login-view" */)
    ),
  },
  {
    path: '/register',
    label: 'Регистрация',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/RegisterVeiw' /* webpackChunkName: "register-view" */)
    ),
  },
  {
    path: '/dairy',
    label: 'Дневник',
    exact: true,
    pablic: false,
    restricted: false,
    component: lazy(() =>
      import('./view/DiaryView' /* webpackChunkName: "dairy-view" */)
    ),
  },
  {
    path: '/calculator',
    label: 'Калькулятор',
    exact: true,
    pablic: false,
    restricted: false,
    component: lazy(() =>
      import('./view/СalculatorView' /* webpackChunkName: "home-view" */)
    ),
  },
];
