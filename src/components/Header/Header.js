import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import UserInfo from '../UserInfo/UserInfo';
import Hamburger from '../Hamburger/Hamburger';
import Modal from '../Modal/Modal';
import ModalNav from '../Modal/ModalNav';
// import routes from '../../routes';
import { modalActions, modalSelectors } from '../../redux/modal';
import styles from './Header.module.css';

export default function Header() {
  const currentPath = '/';
  const dispatch = useDispatch();
  const isModal = useSelector(modalSelectors);
  return (
    <div className={styles.header}>
      <div className={styles.header_wrap}>
        <Logo />
        <Nav currentPath={currentPath} />
      </div>

      <UserInfo />

      <button onClick={() => dispatch(modalActions.onModal())}>
        <Hamburger />
      </button>
      {isModal && (
        <Modal>
          <ModalNav />
        </Modal>
      )}
    </div>
  );
}
