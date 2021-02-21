import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserInfo.module.css";
import vectorHeader from "../../images/vector_header.svg";

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <Link to="/" className="userInfo_vector">
        <img src={vectorHeader} alt="" />
      </Link>

      <ul className={styles.userInfo_list}>
        <li className={styles.userInfo_item}>
          <Link to="/" className={styles.userInfo_link}>
            Nic
          </Link>
        </li>
        <li className={styles.userInfo_item}>
          <Link to="/" className={styles.userInfo_link}>
            Выйти
          </Link>
        </li>
      </ul>
    </div>
  );
}
