import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ProductInputForm.module.css';
import ProductsList from '../ProductsList/ProductsList';
import WeightInput from '../WeightInput/WeightInput';
import ProductsInput from '../ProductsInput/ProductsInput.js';
import objectRequestValidator from './objectRequestValidator';
import rationsItemOperations from '../../../redux/dairy/rationsItemOperations';
import Button from '../../Button/Button';
import Picker from '../Picker/Picker';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import sendNotification from './notification';
import rationsItemOperationsVit from '../../../redux/rations/rationItemsOperations';
// import debounce from 'lodash.debounce';

class ProductInputForm extends Component {
    constructor(props) {
        super(props);
        const nowDate = new Date();
        const year = nowDate.getFullYear().toString();
        const month = (nowDate.getMonth() + 1).toString();
        const day = (nowDate.getDay() === 0 ? 7 : nowDate.getDay()).toString();

        const trDay = day.length === 2 ? day : '0' + day;
        const trMonth = month.length === 2 ? month : '0' + month;
        this.state.date = year + '-' + trMonth + '-' + trDay;
        console.log('date: ', year + '-' + trMonth + '-' + trDay)
    }

    state = {
        date: '',
        weight: '',
        productTitle: '',
        productSearchValue: '',
        visibleListProducts: false,
        visibleNotification: false,
        notificationMessage: '',
        products: [],
        productInFocusId: 0,
        buttonAddDisabled: false,
        productInputDisabled: false,
        WeightInputDisabled: false,
        buttonText: 'Добавить'
    }

    componentDidMount() {
        document.addEventListener('click', this.addBodyClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.addBodyClick);
    }

    addBodyClick = e => {
        //if click under productList then ignore click
        if (!e.target.parentElement.id === 'productList') {
            return
        }

        this.setState({ visibleListProducts: false });
    }

    handleItemHover = e => {
        const keys = [];
        for (const [key, value] of Object.entries(e.target)) {
            keys.push(key);
        }
        this.setState({ productInFocusId: e.target[keys[1]].value })
    }

    handleChangeWeight = e => {
        this.setState({ weight: e.target.value });
    }

    handleChangeProducts = async e => {
        this.setState({
            productSearchValue: e.target.value,
            visibleListProducts: true
        })

        try {
            const products = await rationsItemOperations.getProducts(e.target.value);
            this.setState({ products });
        }
        catch (error) {
            console.log(error);
            sendNotification(error.message);
            this.setState({ visibleListProducts: false });
        }
    }

    handlerChangeDate = async e => {
        const date = e.target.value.split('-');
        const transformedDate = [date[2], date[1], date[0]].join('-');

        this.setState({
            date: e.target.value,
            transformedDate
        });

        try {
            const result = await this.props.onGetInfo(transformedDate);
        } catch (error) {
            sendNotification(error.payload.message || 'По указанной дате нет записей');
        }
    }

    handleProductInputClick = () => {
        this.setState({
            productSearchValue: this.state.productInFocusId,
            visibleListProducts: false
        })
    }

    // handleAddProductClick
    handleSubmit = async e => {
        e.preventDefault();
        const { transformedDate, weight, productSearchValue, buttonAddDisabled } = this.state;
        const { onRationsItemAdd, onGetInfo, onRationsItemUpdate } = this.props;

        const ration = {
            date: transformedDate,
            productTitle: productSearchValue,
            weight: Number(weight)
        }
        const fail = objectRequestValidator(ration);

        if (fail) {
            const failMessage = fail.details[0].message;
            console.log('failMessage: ', failMessage);

            this.setState({
                visibleNotification: true,
                notificationMessage: failMessage
            });

            sendNotification(failMessage, 'danger');
            return;
        }

        try {
            this.setState({
                buttonAddDisabled: true,
                productInputDisabled: true,
                WeightInputDisabled: true,
                buttonText: 'Добавление',
            })

            const rr = await onRationsItemAdd(ration);
            console.log('rr: ', rr.payload)
            onRationsItemUpdate(rr.payload);
            sendNotification(`Продукт ${rr.payload.title} удачно добавлен` || 'ок!');

            this.setState({
                productSearchValue: '',
                weight: ''
            })
        }
        catch (error) {
            console.log('add or updated fail :(',  error);
            sendNotification(error.payload.message || 'error');
        }
        finally {
            this.setState({
                buttonAddDisabled: false,
                productInputDisabled: false,
                WeightInputDisabled: false,
                buttonText: 'Добавить',
            });
        }
    }

    handleProductsListMouseOut = e => {
        // this.setState({visibleListProducts: false})
    }

    render() {
        const {
            weight, date, visibleListProducts, productSearchValue,
            products, buttonAddDisabled, visibleNotification,
            productInputDisabled, WeightInputDisabled, buttonText,
        } = this.state

        return <form id="form-products" className={styles.form} onSubmit={this.handleSubmit}>
            <Picker date={date} onChangeData={this.handlerChangeDate} />

            <ProductsInput
                productSearchValue={productSearchValue}
                onChangeInput={this.handleChangeProducts}
                disabled={productInputDisabled}
            />

            <WeightInput
                weight={weight}
                onChangeWeight={this.handleChangeWeight}
                disabled={WeightInputDisabled}
            />
            <Button type="submit" title={buttonText} onClick={this.handleAddProductClick} disabled={buttonAddDisabled} />

            {products && products.length > 0 && visibleListProducts &&
                <ProductsList
                    products={products}
                    onHover={this.handleItemHover}
                    onInputClick={this.handleProductInputClick}
                    onMouseOut={this.handleProductsListMouseOut}
                />
            }

            {visibleNotification && <ReactNotification />}
        </form >
    }
  };

  // render() {
  //   const { transformedDate, weight, date, productTitle } = this.state;
  //   const {
  //     visibleListProducts,
  //     products,
  //     onUnsetVisibleList,
  //     productSearchValue,
  //   } = this.props;

  //   const rtt = {
  //     date: transformedDate,
  //     productTitle: productSearchValue,
  //     weight: Number(weight),
  //   };

  //   return (
  //     <form
  //       id="form-products"
  //       className={styles.form}
  //       onSubmit={this.handleSubmit}
  //     >
  //       <Picker date={date} onChangeData={this.handlerChangeDate} />
  //       <ProductsInput />
  //       <WeightInput weight={weight} onChangeWeight={this.handleChangeWeight} />
  //       <Button title="Добавить" onClick={this.handleClick} />

  //       {products && products.length > 0 && visibleListProducts && (
  //         <ProductsList
  //           products={products}
  //           onHover={this.handleItemHover}
  //           onItemClick={onUnsetVisibleList}
  //         />
  //       )}
  //     </form>
  //   );
  // }
// }

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRationsItemAdd: (param) => dispatch(rationsItemOperations.rationsItemAdd(param)),
    // onGetInfo: (param) => dispatch(rationsItemOperations.getInfoByDate(param)),
    onGetInfo: (param) => dispatch (rationsItemOperationsVit.fetchRationItems(param)),
    // onGetInfo: (param) => dispatch(rationsItemOperations.getInfoByDate(param)),
    onRationsItemUpdate: (param) => dispatch(rationsItemOperationsVit.rationsItemUpdate(param)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductInputForm);
