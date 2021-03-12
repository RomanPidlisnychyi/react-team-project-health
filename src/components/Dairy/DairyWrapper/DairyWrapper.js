import React, { Component } from 'react';
import ProductInputForm from '../ProductInputForm/ProductInputForm';
import RationItemsList from '../../RationItemsList/RationItemsList';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import styles from './DairyWrapper.module.css';

class DairyWrapper extends Component {
  state = {
    showModal: false,
    mode: 'usual',
  };

  handleClick = e => {
    this.setState({ showModal: true });
  };

  render() {
    const { mode } = this.state;

    return (
      <div className={styles.container}>
        <ProductInputForm mode="usual" />
        <RationItemsList />
        <ModalWrapper />
      </div>
    );
  }
}

export default DairyWrapper;
