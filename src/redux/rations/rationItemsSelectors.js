const getRationItems = state => state.ration.rationItems;
const getReversedItems = state => {
  const newItems = [...state.ration.rationItems];
  return newItems.reverse();
};

const getRationDate = state => state.ration.date;

const rationItemsSelectors = {
  getRationItems,
  getRationDate,
  getReversedItems,
};

export default rationItemsSelectors;
