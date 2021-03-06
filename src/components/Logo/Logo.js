import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logo from '../../images/logo/logo .svg';
import logoText from '../../images/logo/logo_text.svg';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.header_logo}>
        <img src={logo} alt="" className={styles.imgLogo} />
        <img src={logoText} alt="" className={styles.imgLogoName} />
      </Link>
    </div>
  );
}
