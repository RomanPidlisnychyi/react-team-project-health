import React from 'react';
import { connect } from 'react-redux';
import styles from './ProductsInput.module.css';

const ProductsInput = ({
  productSearchValue,
  onChangeInput,
  onInputClick,
  disabled,
  isNotRecommended,
}) => {
  return (
    <input
      name="product"
      type="text"
      placeholder="Введите название продукта"
      autoComplete="off"
      className={
        isNotRecommended
          ? `${styles.input} ${styles.notRecommended}`
          : styles.input
      }
      value={productSearchValue}
      onChange={onChangeInput}
      disabled={disabled}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInput);
