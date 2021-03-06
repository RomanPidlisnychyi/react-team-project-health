import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ProductsInput.module.css';

const ProductsInput = ({ productSearchValue, onChangeInput, onInputClick , disabled}) => {
    return (
        <input name="product"
            type="text"
            placeholder="Введите название продукта"
            autoComplete="off"
            className={styles.input}
            value={productSearchValue}
            onChange={onChangeInput}
            disabled={disabled}
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({    
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInput);