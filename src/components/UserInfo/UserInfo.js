import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserInfo.module.css';
import vectorHeader from '../../images/vector_header.svg';
import { authOperations, authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';

function UserInfo({ showName, logOut }) {
  return (
    <div className={styles.userInfo}>
      <Link to="/" className={styles.userInfo_vector}>
        <img className={styles.userInfo_img} src={vectorHeader} alt="" />
      </Link>

      <ul className={styles.userInfo_list}>
        <li className={styles.userInfo_item}>
          <span>{showName}</span>
        </li>
        <li className={styles.userInfo_item}>
          <button onClick={() => logOut()}>Выйти</button>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  showName: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  logOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
