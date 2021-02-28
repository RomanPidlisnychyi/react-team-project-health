import React, { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivedRoute } from './common/Routes';
import { modalSelectors, modalActions } from '../redux/modal/index';
import Layout from './Layout/Layout';
import routes from '../routes';
import Modal from './Modal/Modal';
import ModalCalories from './Modal/ModalCalories';
import Header from './Header/Header';

function App() {
  const dispatch = useDispatch();
  const isModal = useSelector(modalSelectors);
  return (
    <Layout>
      <Header />
      <Suspense fallback={false}>
        <button onClick={() => dispatch(modalActions.onModal())}>
          Open modal
        </button>
        {isModal && (
          <Modal>
            <ModalCalories />
          </Modal>
        )}
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
