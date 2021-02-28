import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserInfo from '../UserInfo/UserInfo';
import routes from '../../routes';

import styles from './Header.module.css';
// import { ReactReduxContext } from "react-redux";

export default function Header() {
  const currentPath = '/';
  return (
    <div className={styles.header}>
      <div className={styles.header_wrap}>
        <Logo />
        <Nav currentPath={currentPath} />
      </div>

      <UserInfo />
    </div>
  );
}
