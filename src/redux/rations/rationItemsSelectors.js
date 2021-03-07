// import { createSelector } from '@reduxjs/toolkit';

const getRationItems = state => state.ration.rationItems;
// const getRationItems = state => state.ration.rations;

const getRationDate = state => state.ration.date;

const rationItemsSelectors = {
  getRationItems,
  getRationDate,
};

export default rationItemsSelectors;
