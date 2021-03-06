import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import styles from './ProductInputForm.module.css';
import ProductsList from '../ProductsList/ProductsList';
import WeightInput from '../WeightInput/WeightInput';
import ProductsInput from '../ProductsInput/ProductsInput.js';
import rationsItemOperations from '../../../redux/dairy/rationsItemOperations';
import Button from '../Button/Button';
import Picker from '../Picker/Picker';
import rationsItemActions from '../../../redux/dairy/rationsItemActions';
// const debounce = require('lodash.debounce');
import rationItemsOperations from '../../../redux/rations/rationItemsOperations';

class ProductInputForm extends Component {
  state = {
    date: '',
    weight: '',
    productTitle: '',
    addTitlesSucces: false,
  };

  componentDidMount() {
    this.props.onDidMount();
    this.props.getRation(this.state.date);
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleItemHover = e => {
    const keys = [];
    for (const [key, value] of Object.entries(e.target)) {
      keys.push(key);
    }
    // console.log('Cursor under: ', e.target[keys[1]].value);
    this.props.onHoverList(e.target[keys[1]].value);
  };

  handleChangeWeight = e => {
    this.setState({ weight: e.target.value });
  };

  handlerChangeDate = e => {
    // console.log('e: ', e.target.value)
    const date = e.target.value.split('-');
    const transformedDate = [date[2], date[1], date[0]].join('-');
    // console.log('transformedDate: ', transformedDate);

    this.setState({
      date: e.target.value,
      transformedDate,
    });

    // this.props.onGetInfo(transformedDate);
    this.props.getRation(transformedDate);
  };

  handleClick = async e => {
    // try {
    this.setState({ addTitlesSucces: false });
    const { transformedDate, weight, productTitle } = this.state;
    const { productSearchValue, onRationsItemAdd, onGetInfo } = this.props;

    const rtt = {
      date: transformedDate,
      productTitle: productSearchValue,
      weight: Number(weight),
    };

    onRationsItemAdd(rtt);
    //   onGetInfo(transformedDate);

    // // await = this.props.addItemSucces;
    // console.log('addDidSuccess: ', addDidSuccess);
    // // const addDidSuccess = await this.state.rationsItemAddSuccess;
    // if (!addDidSuccess) {
    //     console.log('Error by trying to add Item, try again')
    // }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  render() {
    const { transformedDate, weight, date, productTitle } = this.state;
    const {
      visibleListProducts,
      products,
      onUnsetVisibleList,
      productSearchValue,
    } = this.props;

    const rtt = {
      date: transformedDate,
      productTitle: productSearchValue,
      weight: Number(weight),
    };

    return (
      <form
        id="form-products"
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <Picker date={date} onChangeData={this.handlerChangeDate} />
        <ProductsInput />
        <WeightInput weight={weight} onChangeWeight={this.handleChangeWeight} />
        <Button title="Добавить" onClick={this.handleClick} />

        {products && products.length > 0 && visibleListProducts && (
          <ProductsList
            products={products}
            onHover={this.handleItemHover}
            onItemClick={onUnsetVisibleList}
          />
        )}
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.products,
  productSearchValue: state.productSearchValue,
  productsForFilter: state.titles,
  visibleListProducts: state.visibleListProducts,
  addItemSucces: state.rationsItemAddSuccess,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUnsetVisibleList: () => dispatch(rationsItemOperations.unsetVisibleList()),
  onHoverList: param => {
    dispatch(rationsItemOperations.productSearchValueChange(param));
  },
  onDidMount: () => dispatch(rationsItemOperations.getTitles()),
  onRationsItemAdd: param =>
    dispatch(rationsItemOperations.rationsItemAdd(param)),
  onAddSuccess: param => dispatch(rationsItemOperations.getInfoByDate(param)),
  onGetInfo: param => dispatch(rationsItemOperations.getInfoByDate(param)),

  getRation: param => dispatch(rationItemsOperations.fetchRationItems(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductInputForm);
