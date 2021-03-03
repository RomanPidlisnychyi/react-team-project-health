import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import styles from './ProductInputForm.module.css';
import ProductsList from '../ProductsList/ProductsList';
import WeightInput from '../WeightInput/WeightInput';
import ProductsInput from '../ProductsInput/ProductsInput.js';
import rationsItemOperations from '../../../redux/dairy/rationsItemOperations';
import Button from '../Button/Button';
// const debounce = require('lodash.debounce');

class ProductInputForm extends Component {
    componentDidMount() {
        console.log('didMount');
        this.props.onDidMount();
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleItemHover = e => {
        const keys = [];
        for (const [key, value] of Object.entries(e.target)) {
            keys.push(key);
        }
        // console.log('Cursor under: ', e.target[keys[1]].value);
        this.props.onHoverList(e.target[keys[1]].value);
    }

    render() {
        const { visibleListProducts, products, onUnsetVisibleList, productSearchValue, productsForFilter } = this.props;

        return <form id="form-products" className={styles.form} onSubmit={this.handleSubmit}>
            <ProductsInput />
            <WeightInput /> 
         <Button title="Добавить"/>


            {products && products.length > 0 && visibleListProducts &&
                <ProductsList
                    products={products}
                    onHover={this.handleItemHover}
                    onItemClick={onUnsetVisibleList}
                />}
        </form >
    }
}

const mapStateToProps = (state, ownProps) => ({
    products: state.products,
    productSearchValue: state.productSearchValue,
    productsForFilter: state.titles,
    visibleListProducts: state.visibleListProducts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onUnsetVisibleList: () => dispatch(rationsItemOperations.unsetVisibleList()),
    onHoverList: (param) => {
        dispatch(rationsItemOperations.productSearchValueChange(param));
    },
    onDidMount: () => dispatch(rationsItemOperations.getTitles()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductInputForm);