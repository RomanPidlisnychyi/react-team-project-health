import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './ModalNav.module.css';

export default function ModalNav({ setIsModal }) {
  return (
    <div className={styles.modalNavWrap}>
      <ul className={styles.modalNav_list}>
        {routes
          .filter(route => route.pablic === false)
          .map(route => {
            return (
              <li className={styles.modalNav_item} key={route.path}>
                <div>
                  <NavLink
                    className={styles.modalNav_link}
                    onClick={() => setIsModal(false)}
                    to={route.path}
                  >
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
