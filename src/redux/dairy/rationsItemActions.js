import {createAction} from '@reduxjs/toolkit';

const getInfoByDateRequest = createAction('getInfoByDate/Request');
const getInfoByDateSuccess = createAction('getInfoByDate/Success');
const getInfoByDateError = createAction('getInfoByDate/Error');

const rationsItemAddRequest = createAction('rationsItemAdd/request');
const rationsItemAddSuccess = createAction('rationsItemAdd/success');
const rationsItemAddError = createAction('rationsItemAdd/error');
const rationsItemUpdate = createAction('rationsItem/update');

const getProductsRequest = createAction('getProducts/request');
const getProductsSuccess = createAction('getProducts/success');
const getProductsError = createAction('getProducts/error');

const productSearchValueChange = createAction('productSearchValue/Change')

export default {
    getInfoByDateRequest,
    getInfoByDateSuccess,     
    getInfoByDateError,
    getProductsRequest,
    getProductsSuccess,
    getProductsError,
    productSearchValueChange,
    rationsItemAddRequest,
    rationsItemAddSuccess,
    rationsItemAddError,
    rationsItemUpdate,
}