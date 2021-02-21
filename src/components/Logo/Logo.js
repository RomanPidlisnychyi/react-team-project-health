import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../images/logo/logo .svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      {/* <img src={logo} alt="" /> */}
      <Link to="/" className="header_logo">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}
