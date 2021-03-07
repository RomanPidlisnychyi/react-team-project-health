import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalActions } from '../../redux/modal/index';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlKeyDown);
  }

  closeModal = e => {
    if (e.target === e.currentTarget) {
      const { isModal } = this.props;
      isModal();
    }
    return;
  };

  handlKeyDown = e => {
    if (e.code === 'Escape') {
      const { isModal } = this.props;
      isModal();
    }
  };

  render() {
    return (
      <div className={styles.modal} onClick={this.closeModal}>
        <div className={styles.modalWrapper}>
          <button className={styles.closeButton} onClick={this.closeModal}>
            X
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.modal,
});

const mapDispatchToProps = {
  isModal: modalActions.offModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
