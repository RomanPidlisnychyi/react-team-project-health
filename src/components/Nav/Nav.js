import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import NewModal from '../Modal/NewModal';
import ModalNav from '../Modal/ModalNav';
import styles from './Nav.module.css';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';

function Nav({ token }) {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={styles.nav_wrap}>
      {isModal && (
        <NewModal onModalClose={setIsModal}>
          <ModalNav setIsModal={setIsModal} />
        </NewModal>
      )}
      {token && !isModal && <Hamburger onClick={setIsModal} />}
      <ul className={token ? styles.nav_hamburger : styles.nav_list}>
        {token
          ? routes
              .filter(route => route.pablic === false)
              .map(route => {
                return (
                  <li key={route.path} className={styles.nav_item}>
                    <div className={styles.offRegist}>
                      <NavLink to={route.path} className={styles.nav_link}>
                        {route.label}
                      </NavLink>
                    </div>
                  </li>
                );
              })
          : routes
              .filter(route => route.pablic && route.path !== '/')
              .map(route => {
                return (
                  <li key={route.path} className={styles.nav_item}>
                    <div className={styles.onRegist}>
                      <NavLink to={route.path} className={styles.nav_link}>
                        {route.label}
                      </NavLink>
                    </div>
                  </li>
                );
              })}
      </ul>
    </div>
  );
}

const mapStateToProp = state => ({ token: authSelectors.getToken(state) });

export default connect(mapStateToProp)(Nav);
