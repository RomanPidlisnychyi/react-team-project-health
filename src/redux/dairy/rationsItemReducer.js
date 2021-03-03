
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import rationsItemActions from './rationsItemActions';

const rationsReducer = createReducer({}, {
    [rationsItemActions.getInfoByDateRequest]: (state, action) => action.payload,
    [rationsItemActions.getInfoByDateSuccess]: (state, action) => action.payload,    
})

const rationsItemDeleteReducer = createReducer(false, {
    [rationsItemActions.rationsItemDeleteRequest]: (state, action) => true,
    [rationsItemActions.rationsItemDeleteSuccess]: (state, action) => false
})

const getProductsReducer = createReducer([], {
    [rationsItemActions.getProductsSuccess]: (state, action) => action.payload,
    // [rationsItemActions.getProductsFilter]: (state, action) => state.filter(el => el.includes(action.payload)),
    [rationsItemActions.getProductsError]: (state, action) => []
})

const visibleListProductsReducer = createReducer (false, {
    [rationsItemActions.visibleListProductsTrue]: () => true,
    [rationsItemActions.visibleListProductsFalse]: () => false,
})

const productSearchValueReducer = createReducer('', {
    [rationsItemActions.productSearchValueChange]: (state, action) => action.payload  
})

const getTitlesReducer = createReducer([], {
    [rationsItemActions.getTitlesSuccess]: (state, action) => action.payload,
    [rationsItemActions.getTitlesError]: (state, action) => [],
})

const errorReducer = createReducer({}, {
    [rationsItemActions.getProductsError]: (state, action) => action.payload,
    [rationsItemActions.getTitlesError]: (state, action) => action.payload,
})

const rootReducer = combineReducers({
    error: errorReducer,
    rations: rationsReducer,
    rationsItemDeleting: rationsItemDeleteReducer,
    products: getProductsReducer, 
    visibleListProducts: visibleListProductsReducer,
    productSearchValue: productSearchValueReducer,
    titles: getTitlesReducer,
})

const objReducer = {
    error: errorReducer,
    rations: rationsReducer,
    rationsItemDeleting: rationsItemDeleteReducer,
    products: getProductsReducer, 
    visibleListProducts: visibleListProductsReducer,
    productSearchValue: productSearchValueReducer,
    titles: getTitlesReducer,
}

// export default rootReducer;
export default objReducer;