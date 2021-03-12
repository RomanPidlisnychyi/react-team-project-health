import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivedRoute } from './common/Routes';
import { authOperations, authSelectors } from '../redux/auth';
import Layout from './Layout/Layout';
import routes from '../routes';
import Header from './Header/Header';

function App() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (!name && token) {
      dispatch(authOperations.current(token));
    }
  }, []);
  return (
    <Layout>
      <Header />
      <Suspense fallback={false}>
        <Switch>
          {routes.map(route =>
            route.pablic ? (
              <PublicRoute key={route.label} {...route} />
            ) : (
              <PrivedRoute key={route.label} {...route} />
            ),
          )}
        </Switch>
      </Suspense>
    </Layout>
  );
}
export default App;
