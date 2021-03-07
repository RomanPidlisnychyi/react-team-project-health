import React from 'react';
import styles from './Hamburger.module.css';

export default function Hamburger({ onClick }) {
  return (
    <ul onClick={() => onClick(true)} className={styles.hamburger}>
      <li className={styles.hamburger_item}></li>
      <li className={styles.hamburger_item}></li>
      <li className={styles.hamburger_item}></li>
    </ul>
  );
}
