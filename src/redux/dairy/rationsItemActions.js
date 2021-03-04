import {createAction} from '@reduxjs/toolkit';

const getInfoByDateRequest = createAction('getInfoByDate/Request');
const getInfoByDateSuccess = createAction('getInfoByDate/Success');
const getInfoByDateError = createAction('getInfoByDate/Error');

const rationsItemAddRequest = createAction('rationsItemAdd/request');
const rationsItemAddSuccess = createAction('rationsItemAdd/success');
const rationsItemAddError = createAction('rationsItemAdd/error');

const rationsItemDeleteRequest = createAction('rationsItemDelete/request');
const rationsItemDeleteSuccess = createAction('rationItemDelete/success');
const rationsItemDeleteError = createAction('rationsItemDelete/error');

const getProductsRequest = createAction('getProducts/request');
const getProductsSuccess = createAction('getProducts/success');
const getProductsError = createAction('getProducts/error');
const getProductsFilter = createAction('getProducts/filter');

const visibleListProductsTrue = createAction('visibleListProducts/True');
const visibleListProductsFalse = createAction('visibleListProducts/False');
const visibleListProductsError = createAction('visibleListProducts/Error');

const getTitlesRequest = createAction('getTitles/Request');
const getTitlesSuccess = createAction('getTitles/Success');
const getTitlesError = createAction('getTitles/Error');



const productSearchValueChange = createAction('productSearchValue/Change')

export default {
    getInfoByDateRequest,
    getInfoByDateSuccess,     
    getInfoByDateError,
    rationsItemDeleteRequest,
    rationsItemDeleteSuccess,
    rationsItemDeleteError,
    getProductsRequest,
    getProductsSuccess,
    getProductsError,
    visibleListProductsTrue,
    visibleListProductsFalse,
    // visibleListProductsError,
    productSearchValueChange,
    getTitlesRequest,    
    getTitlesSuccess,
    getTitlesError,
    getProductsFilter,
    rationsItemAddRequest,
    rationsItemAddSuccess,
    rationsItemAddError,
}