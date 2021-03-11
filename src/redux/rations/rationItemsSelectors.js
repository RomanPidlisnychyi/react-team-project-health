import { createSelector } from '@reduxjs/toolkit';

const getRationItems = state => state.ration.rationItems;
const getReversedItems = state => {
  const newItems = [...state.ration.rationItems];
  return newItems.reverse();
};

const getRationDate = state => state.ration.date;

const getCurrentFormatDate = createSelector(getRationDate, date => {
  if (date) {
    return date.split('-').join('.');
  }
});

const rationItemsSelectors = {
  getRationItems,
  getRationDate,
  getReversedItems,
  getCurrentFormatDate,
};

export default rationItemsSelectors;
