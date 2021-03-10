import React from 'react';
import styles from './UserInfo.module.css';
import { authOperations, authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';

function UserInfo({ showName, logOut }) {
  if (showName !== null) {
    return (
      <div className={styles.userInfo}>
        <ul className={styles.userInfo_list}>
          <li className={styles.userInfo_item}>
            <span>{showName}</span>
          </li>
          <li className={styles.userInfo_item}>
            <button onClick={() => logOut()} className={styles.button}>
              Выйти
            </button>
          </li>
        </ul>
      </div>
    );
  }
  return <></>;
}

const mapStateToProps = state => ({
  showName: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  logOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
