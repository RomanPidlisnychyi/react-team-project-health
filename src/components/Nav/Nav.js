import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() { 
  return (
    <div className={styles.nav_wrap}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <NavLink to="/" className={styles.nav_link}>
            Вход
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink to="/" className={styles.nav_link}>
            Регистрация
          </NavLink>
        </li>
      </ul>

      <div className={styles.nav_gamburger}>
        <span className={styles.nav_gamburger_item}></span>
        <span className={styles.nav_gamburger_item}></span>
        <span className={styles.nav_gamburger_item}></span>
      </div>
    </div>
  );
}
