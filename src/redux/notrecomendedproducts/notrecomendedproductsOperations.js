import axios from 'axios';
import notrecomendedproductsActions from './notrecomendedproductsActions';


axios.default.baseURL = 'https://health-fsoff2.herokuapp.com/';


const getListNotRecomendedProductsAndCalories = userData => dispatch => {

console.log("userData:", userData);

  dispatch(
    notrecomendedproductsActions.getListNotRecomendedProductsAndCaloriesRequest(),
  );



  axios
    .post('notrecomendedproducts',  userData )
    // .post('https://health-fsoff2.herokuapp.com', {userData})
    // .post('https://health-fsoff2.herokuapp.com/notrecomendedproducts', {userData})
    // .then(({ data }) =>
    //   dispatch(
    //     userActions.getListNotRecomendedProductsAndCaloriesSuccess(data),
    //   ),
    // )
    .then(response => {
      console.log('responseNot:', response);
      dispatch(
        notrecomendedproductsActions.getListNotRecomendedProductsAndCaloriesSuccess(
          response.data,
        ),
      );
      console.log('responseNot.data:', response.data);
    })
    .catch(error =>
      dispatch(
        notrecomendedproductsActions.getListNotRecomendedProductsAndCaloriesError(
          error,
        ),
      ),
    );
};

export default { getListNotRecomendedProductsAndCalories };


// export const fetchNotes = () => dispatch => {
//     fetch('https://hn.algolia.com/api/v1/search?query=react')
//       .then(response => response.json())
//       .then(data => dispatch(fetchSuccess(data)))
//       .catch(error => console.log(error));
//   };