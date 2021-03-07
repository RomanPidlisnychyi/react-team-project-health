import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class NewModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlKeyDown);
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
    return (
      <div className={styles.modal} onClick={this.closeModal}>
        <div className={styles.modalWrapper}>
          <button className={styles.closeButton} onClick={this.closeModal}>
            &#10006;
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}
