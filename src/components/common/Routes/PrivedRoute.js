import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';

export default function PrivedRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(authSelectors.getToken);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
