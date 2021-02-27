import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/HomeView.js' /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./view/RegisterView.js')),
    pablic: true,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./view/LoginView.js')),
    pablic: true,
    restricted: true,
  },
];
