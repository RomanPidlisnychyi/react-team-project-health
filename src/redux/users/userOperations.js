import axios from 'axios';
import userActions from './userActions';

// axios.default.baseURL = 'https://health-fsoff2.herokuapp.com/';

const addUserParams = userData => dispatch => {
    console.log('userData:', userData);

  //   const userParams = {
  //       height: userData.height,
  //       age: userData.age,
  //       currentWeight: userData.currentWeight,
  //       desiredWeight: userData.desiredWeight,
  //       bloodGroup: userData.bloodGroup,
  //     };
  //     console.log('userParams:', userParams);

  dispatch(userActions.addUserParamsRequest());

  axios
    .patch('https://health-fsoff2.herokuapp.com/users/params', userData)
    // .patch('users/params', userData)
    // .then(({ data }) => dispatch(userActions.addUserParamsSuccess(data)))
    .then(response => {
      console.log('responseUser:', response);
      dispatch(userActions.addUserParamsSuccess(response.data));
      console.log('responseUser.data:', response.data);
    })
    .catch(error => dispatch(userActions.addUserParamsError(error)));
};

// const getListNotRecomendedProductsAndCalories = userData => dispatch => {
//   dispatch(userActions.getListNotRecomendedProductsAndCaloriesRequest());

//   axios
//     // .post('notrecomendedproducts',  userData )
//     .post('https://health-fsoff2.herokuapp.com/notrecomendedproducts', userData)
//     // .then(({ data }) =>
//     //   dispatch(
//     //     userActions.getListNotRecomendedProductsAndCaloriesSuccess(data),
//     //   ),
//     // )
//     .then(response => {
//       console.log('responseNot:', response);
//       dispatch(userActions.getListNotRecomendedProductsAndCaloriesSuccess(response.data));
//       console.log('responseNot.data:', response.data);
//     })
//     .catch(error =>
//       dispatch(userActions.getListNotRecomendedProductsAndCaloriesError(error)),
//     );
// };

// export const currencyExchangeOperation = () => async (dispatch) => {
//     try {
//       const response = await fetch(CURRENCY_API_URL);
//       const currency = await response.json();

//       dispatch(setCurrencyExchange(currency));
//     } catch (error) {
//       console.log(error);
//     }
//   };

// const fetchContacts = () => (dispatch) => {
//     dispatch(contactsActions.fetchContactsRequest());

//     axios
//       .get("/contacts")
//       .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
//       .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
//   };

export default {
  addUserParams,
  //   getListNotRecomendedProductsAndCalories
};
