import Axios from 'axios';
import rationsItemActions from './rationsItemActions';
import HEROKU from '../../services/apiURL';

const getInfoByDate = date => dispatch => {
    dispatch(rationsItemActions.getInfoByDateRequest());

    return new Promise ((res, rej) => {
        Axios(`${HEROKU}/users/infobyday/${date}`)
        .then(response => res(dispatch(rationsItemActions.getInfoByDateSuccess(response.data))))
        .catch(error => rej(dispatch(rationsItemActions.getInfoByDateError(error.response.data))));
    })    
}

const rationsItemAdd = param => dispatch => {
    const options = {
        date: param.date,
        productTitle: param.productTitle,
        weight: param.weight,
    }
    dispatch(rationsItemActions.rationsItemAddRequest(param));

    return new Promise ((res, rej) => {
        Axios.post(`${HEROKU}/rations`, options)
        .then(response => res(dispatch(rationsItemActions.rationsItemAddSuccess(response.data))))
        .catch(error => rej(dispatch(rationsItemActions.rationsItemAddError(error.response.data))))
    })
}

const rationsItemUpdate = param => dispatch => {
    dispatch(rationsItemActions.rationsItemUpdate(param));
}

const getProducts = spr => {
    if (spr === '' || spr.length === 1) {
        return;
    }

    return new Promise((res, rej) => {
        Axios.get(`${HEROKU}/products?${spr}`)
            .then(response => res(response.data))
            .catch(error => rej(error.response.data))
    })
}

export default {
    getInfoByDate,
    getProducts,
    rationsItemAdd,
    rationsItemUpdate,
}