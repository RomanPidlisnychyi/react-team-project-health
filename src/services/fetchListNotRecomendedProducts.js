import axios from 'axios';
import apiURL from './apiURL';

console.log('apiURL', apiURL);

const getListNotRecomendedProductsAndCalories = async userParams => {
  return await axios
    .post(`${apiURL}/notrecomendedproducts`, userParams)
    .then(response => response.data)
    .then(data => data)
    // .then(data => {
    // console.log('data:', data);
    //   return data;
    // })
    .catch(error => {
      return error;
    });
};

// const getListNotRecomendedProductsAndCalories = userParams => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userParams),
//   };
//   fetch(`${apiURL}/notrecomendedproducts`, options)
//     .then(response => response.json())
//     .then(data => {
//       console.log('data:', data);
//         console.log("data.listNotProducts:", data.listNotProducts);
//         console.log("data.dailyCalorieNormInteger:", data.dailyCalorieNormInteger);
//     });
// };

export default { getListNotRecomendedProductsAndCalories };
