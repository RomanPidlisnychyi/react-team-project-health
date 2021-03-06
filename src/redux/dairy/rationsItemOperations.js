import Axios from 'axios';
import rationsItemActions from './rationsItemActions';
import HEROKU from '../../services/apiURL';

const getInfoByDate = date => dispatch => {
    dispatch(rationsItemActions.getInfoByDateRequest());
    // Axios(`http://localhost:3001/users/infobyday?date=${date}&userId=60368fd954f3280015add2a0`)
    Axios(`${HEROKU}/users/infobyday/${date}`)
        .then(response => dispatch(rationsItemActions.getInfoByDateSuccess(response.data)))
        .catch(error => dispatch(rationsItemActions.getInfoByDateError(error.response.data)));
}

const rationsItemAdd = param => dispatch => {
    console.log('button Add action')
    console.log('param: ', param)
    dispatch(rationsItemActions.rationsItemAddRequest(param));

    Axios.post(`${HEROKU}/rations`, {
        date: param.date,
        productTitle: param.productTitle,
        weight: param.weight,
    })
        .then(response => dispatch(rationsItemActions.rationsItemAddSuccess(response.status)))
        .catch(error => dispatch(rationsItemActions.rationsItemAddError(error.response.data)))
}

const rationsItemDelete = (_id) => dispatch => {
    console.log('deleted _id: ', _id);
    dispatch(rationsItemActions.rationsItemDeleteRequest(_id))
    Axios(`${HEROKU}/rations/${_id}`)
        .then(response => dispatch(rationsItemActions.rationsItemDeleteSuccess(response.data)))
        .catch(error => dispatch(rationsItemActions.rationsItemDeleteError(error.response.data)))
}

const getTitles = param => dispatch => {
    dispatch(rationsItemActions.getTitlesRequest());
    Axios(`${HEROKU}/products/titles`)
        .then(response => dispatch(rationsItemActions.getTitlesSuccess(response.data)))
        .catch(error => dispatch(rationsItemActions.getTitlesError(error.response.data)));
}

const getProducts = spr => dispatch => {
    dispatch(rationsItemActions.getProductsRequest());
    if (spr === '' || spr.length === 1) {
        return;
    }
    Axios.get(`${HEROKU}/products?${spr}`)
        .then(response => dispatch(rationsItemActions.getProductsSuccess(response.data)))
        .catch(error => dispatch(rationsItemActions.getProductsError(error.response.data)));
}

// const getProducts = spr => async dispatch => {
//     try {
//         dispatch(rationsItemActions.getProductsRequest())
//         const failed = false;
//         if (spr === '' || spr.length === 1) {
//             return;
//         }
//         const response = await fetch(`https://health-fsoff2.herokuapp.com/products?${spr}`);
//         if (!response.ok) {
//             return console.log('You typing too mach fast, slowly :)');
//         }

//         const reee = await response.json();
//         // if (reee) { failed = false };
//         console.log('response new request: ', reee);

//         dispatch(rationsItemActions.getProductsSuccess(reee));

//     } catch (error) {
//         dispatch(rationsItemActions.getProductsError(error));
//     };
// }

const pushProductsToList = tmp => dispatch => {
    dispatch(rationsItemActions.getProductsSuccess(tmp));
}

const setVisibleList = tmp => dispatch => {
    dispatch(rationsItemActions.visibleListProductsTrue());
}

const unsetVisibleList = tmp => dispatch => {
    dispatch(rationsItemActions.visibleListProductsFalse());
}

const productSearchValueChange = tmp => dispatch => {
    dispatch(rationsItemActions.productSearchValueChange(tmp));
}

export default {
    getInfoByDate,
    rationsItemDelete,
    getProducts,
    setVisibleList,
    unsetVisibleList,
    productSearchValueChange,
    getTitles,
    pushProductsToList,
    rationsItemAdd,
}