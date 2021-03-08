import { createSelector } from '@reduxjs/toolkit';
import { rationItemsSelectors } from '../rations';

const getDailyCalorieNormInteger = state =>
  state.notrecomendedproducts.dailyCalorieNormInteger;

const getListNotProducts = state => state.notrecomendedproducts.categiriesList;

const getComboInfo = createSelector(
  [rationItemsSelectors.getRationItems, getDailyCalorieNormInteger],
  (items, calories) => {
    const caloriesByDay = items.reduce((acc, product) => {
      acc += product.calories;
      return acc;
    }, 0);

    return {
      left: calories - caloriesByDay,
      used: caloriesByDay,
      norma: calories,
      fromTheNorm: calories ? (100 / calories) * caloriesByDay : calories,
    };
  },
);

export default {
  getDailyCalorieNormInteger,
  getListNotProducts,
  getComboInfo,
};
