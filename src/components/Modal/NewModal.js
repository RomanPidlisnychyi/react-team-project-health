import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class NewModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlKeyDown);
    document.querySelector('body').classList.add(`${styles.onModal}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlKeyDown);
    document.querySelector('body').classList.remove(`${styles.onModal}`);
  }

  closeModal = e => {
    if (e.target === e.currentTarget) {
      const { onModalClose } = this.props;
      onModalClose();
    }
    return;
  };

  handlKeyDown = e => {
    if (e.code === 'Escape') {
      const { onModalClose } = this.props;
      onModalClose();
    }
  };

  render() {
    const { topMenuModal, closeButton, closeButtonNav } = this.props;
    return (
      <div
        className={
          topMenuModal
            ? `${styles.modal} ${styles.topMenuModal} `
            : styles.modal
        }
        onClick={this.closeModal}
      >
        <div
          className={
            topMenuModal
              ? `${styles.modalWrapper}${styles.topMenuModal}`
              : styles.modalWrapper
          }
        >
          <button
            className={
              topMenuModal ? `${styles.closeButtonNav}` : styles.closeButton
            }
            onClick={this.closeModal}
          >
            &#10006;
          </button>
          <div className={styles.buttonBackWrapper}>
            {/* не должно быть если не зареган */}
            <button
              className={
                topMenuModal ? `${styles.noneButtonBack}` : styles.buttonBack
              }
              onClick={this.closeModal}
            >
              &#8629;
            </button>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
