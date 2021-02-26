import React from "react";
import { NavLink, Route } from "react-router-dom";
import styles from "./Nav.module.css";
import routes from "../../routes";

export default function Nav({ currentPath }) {
  return (
    <div className={styles.nav_wrap}>
      <ul className={styles.nav_list}>
        {currentPath === "/" &&
          routes.map((route) => {
            if (route.path === "/login" || route.path === "/register") {
              return (
                <li key={route.path} className={styles.nav_item}>
                  <NavLink to={route.path} className={styles.nav_link}>
                    {route.label}
                  </NavLink>
                </li>
              );
            }
          })}

        {currentPath === "/login" &&
          routes.map((route) => {
            if (route.path === "/login" || route.path === "/register") {
              return (
                <li key={route.path} className={styles.nav_item}>
                  <NavLink to={route.path} className={styles.nav_link}>
                    {route.label}
                  </NavLink>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}
