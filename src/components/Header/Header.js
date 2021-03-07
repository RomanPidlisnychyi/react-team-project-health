import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserInfo from '../UserInfo/UserInfo';

import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrap}>
        <Logo />
        <Nav />
      </div>

      <UserInfo />

      {/* {isModal ? (
        <NewModal onModalClose={setIsModal}>
          <ModalNav />
        </NewModal>
      ) : (
        <button onClick={() => setIsModal(true)}>
          <Hamburger />
        </button>
      )} */}
    </div>
  );
}
