import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import NewModal from '../Modal/NewModal';
import ModalNav from '../Modal/ModalNav';
import styles from './Nav.module.css';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';

function Nav({ token }) {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={styles.nav_wrap}>
      {isModal && (
        <NewModal
          btnDisabled={true}
          onModalClose={setIsModal}
          topMenuModal={true}
        >
          <ModalNav setIsModal={setIsModal} />
        </NewModal>
      )}
      {token && <Hamburger isModal={isModal} onClick={setIsModal} />}
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
