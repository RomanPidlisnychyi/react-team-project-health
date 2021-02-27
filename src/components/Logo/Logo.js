import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../images/logo/logo .svg";
import logoText from "../../images/logo/logo_text.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      {/* <img src={logo} alt="" /> */}
      {/* {routes.map((route) => {
        if (route.label === "Вход") {
          return <Route key={route.path} exact={route.exact} {...route} />;
        }
        return false;
      })} */}
      <Link to="/" className="header_logo">
        <img src={logo} alt="" />
        <img src={logoText} alt="" />
      </Link>
    </div>
  );
}
