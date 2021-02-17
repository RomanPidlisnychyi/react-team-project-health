import React from 'react';
// import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { authSelectors } from '../../../redux/loading';

export default function PrivedRoute({ component: Component, ...rest }) {
  // const isAuthenticated = useSelector(authSelectors.getUserName);
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
