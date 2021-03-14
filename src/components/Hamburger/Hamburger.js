import React from 'react';
import styles from './Hamburger.module.css';

export default function Hamburger({ onClick, isModal }) {
  return (
    <ul onClick={() => onClick(!isModal)} className={styles.hamburger}>
      {isModal ? (
        <li>&#10006;</li>
      ) : (
        <>
          <li className={styles.hamburger_item}></li>
          <li className={styles.hamburger_item}></li>
          <li className={styles.hamburger_item}></li>
        </>
      )}
    </ul>
  );
}
