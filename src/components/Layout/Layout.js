import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const token = useSelector(authSelectors.getToken);

  return (
    <div
      className={token ? styles.container : `${styles.container} ${styles.bg}`}
    >
      {children}
    </div>
  );
}
