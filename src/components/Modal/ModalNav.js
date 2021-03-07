import React from 'react';
import Nav from '../Nav/Nav';

import styles from './ModalNav.module.css';

export default function ModalNav() {
  return (
    <>
      <div className={styles.modalNavWrap}>
        <Nav />
      </div>
    </>
  );
}
