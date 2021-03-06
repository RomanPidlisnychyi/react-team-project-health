import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';

function Nav({ currentPath, token }) {
  return (
    <div className={styles.nav_wrap}>
      <ul className={styles.nav_list}>
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
