import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';

export default function PablicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const isAuthenticated = useSelector(authSelectors.getToken);
  return (
    <Route
      {...rest}
      render={props =>
        restricted && isAuthenticated ? (
          <Redirect to="/calculator" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
