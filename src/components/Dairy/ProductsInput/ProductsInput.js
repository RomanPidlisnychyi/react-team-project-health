import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ProductsInput.module.css';
import rationsItemOperations from '../../../redux/dairy/rationsItemOperations';
// const debounce = require('lodash.debounce');

const ProductsInput = ({ productSearchValue, onChangeInput, onInputClick }) => {
    return (
        <input name="product"
            type="text"
            placeholder="Введите название продукта"
            autoComplete="off"
            className={styles.input}
            value={productSearchValue}
            onChange={onChangeInput}
            onClick={onInputClick}
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
    visibleListProducts: state.visibleListProducts,
    productSearchValue: state.productSearchValue,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onInputClick: () => dispatch(rationsItemOperations.unsetVisibleList()),
    onChangeInput: (e) => {
        // debounce(dispatch, 300)
        // const debouncedDispatch = debounce(dispatch, 3000, {
        //     leading: false,
        //     trailing: true
        // });
        // const timer = setTimeout(dispatch(rationsItemOperations.getProducts(e)), 300);
        // dispatch(clearTimeout(timer));

        dispatch(rationsItemOperations.getProducts(e.target.value));
        dispatch(rationsItemOperations.productSearchValueChange(e.target.value));    
        dispatch(rationsItemOperations.setVisibleList());
        // dispatch(rationsItemOperations.getProducts(e.target.value));
    },    
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInput);