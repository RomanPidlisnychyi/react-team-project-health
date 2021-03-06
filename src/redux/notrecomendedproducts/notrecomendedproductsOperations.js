import axios from 'axios';
import notrecomendedproductsActions from './notrecomendedproductsActions';
import apiURL from '../../services/apiURL';

// axios.default.baseURL = 'https://health-fsoff2.herokuapp.com';
// console.log("apiURL", apiURL);

const getListNotRecomendedProductsAndCalories = userData => async dispatch => {
  dispatch(notrecomendedproductsActions.getNotProductsRequest());
  console.log('userDataNot:', userData);

  const options = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      height: 80,
      age: 14,
      currentWeight: 40,
      desiredWeight: 30,
      bloodGroup: 3,
    }),
    // body: JSON.stringify(userData),
  };

  console.log('body:', options.body);

  try {
    const response = await fetch(`${apiURL}/notrecomendedproducts`, options);
    console.log('response:', response);

    let respJson = await response.json();
    console.log('respJson:', respJson);

    let data = await response.data;
    // .then(data => {
    console.log('data:', data);
    // });
    // console.log('resultNot:', result);

    // const data = await response.json();
    // console.log('data:', data);
  } catch (error) {
    console.log(error);
  }
};
getListNotRecomendedProductsAndCalories();
// async fetchImages() {
//   const key = '?key=17627900-033e401422c15b0db6e889732';
//   const type = '&image_type=photo';
//   const orientation = '&orientation=horizontal';
//   const requestParams = `&q=${this.query}&page=${this.page}&per_page=12`;

//   try {
//     let response = await fetch(
//       baseUrl + key + type + orientation + requestParams,
//     );
//     let image = await response.json();
//     let hits = await image.hits;
//     this.incrementPage();

//     return hits;
//   } catch (error) {
//     return error;
//   }
// },

// const getListNotRecomendedProductsAndCalories = (
//   height,
//   age,
//   currentWeight,
//   desiredWeight,
//   bloodGroup,
// ) => dispatch => {
// const getListNotRecomendedProductsAndCalories = userData => dispatch => {
//   console.log('userDataNot:', userData);
//   const userParams = {
//     height: userData.height,
//     age: userData.age,
//     currentWeight: userData.currentWeight,
//     desiredWeight: userData.desiredWeight,
//     bloodGroup: userData.bloodGroup,
//   };
//   console.log('userParams:', userParams);

// console.log('height:', height);

// dispatch(notrecomendedproductsActions.getNotProductsRequest());

// return (
//   axios
//     // axios
//     .post(
//       'https://health-fsoff2.herokuapp.com/notrecomendedproducts',
//       userParams,
//     )
// .post(`${apiURL}/notrecomendedproducts`, {
//   height,
//   age,
//   currentWeight,
//   desiredWeight,
//   bloodGroup,
// })
// .then(({ data }) =>
//   dispatch(
//     userActions.getListNotRecomendedProductsAndCaloriesSuccess(data),
//   ),
// )
//       .then(response => {
//         console.log('responseNot:', response);
//         dispatch(
//           notrecomendedproductsActions.getNotProductsSuccess(response.data),
//         );
//         console.log('responseNot.data:', response.data);
//       })
//       .catch(error =>
//         dispatch(notrecomendedproductsActions.getNotProductsError(error)),
//       )
//   );
// };

export default {
  getListNotRecomendedProductsAndCalories,
  // fetchTasks,
};

// export const fetchNotes = () => dispatch => {
//     fetch('https://hn.algolia.com/api/v1/search?query=react')
//       .then(response => response.json())
//       .then(data => dispatch(fetchSuccess(data)))
//       .catch(error => console.log(error));
//   };

// return axios
//     .put('/login', user)
//     .then(response => {
//       token.set(response.data.token.accessToken);
//       dispatch(authActions.loginSuccess(response.data));
//       return response.data.token;
// })
