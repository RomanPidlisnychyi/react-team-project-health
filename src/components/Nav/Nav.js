import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import routes from '../../routes';
import { getToken } from '../../redux/auth/authSelectors';
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
                    <NavLink to={route.path} className={styles.nav_link}>
                      {route.label}
                    </NavLink>
                  </li>
                );
              })
          : routes
              .filter(route => route.pablic && route.path !== '/')
              .map(route => {
                return (
                  <li key={route.path} className={styles.nav_item}>
                    <NavLink to={route.path} className={styles.nav_link}>
                      {route.label}
                    </NavLink>
                  </li>
                );
              })}
      </ul>
    </div>
  );
}

const mapStateToProp = state => ({ token: state.auth.token });

export default connect(mapStateToProp)(Nav);
