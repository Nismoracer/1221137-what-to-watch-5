import {NO_FILTER} from "./const"

export const getFilteredList = (initialArray, filterType) => {
  if (filterType === NO_FILTER) {
    return initialArray;
  }
  return initialArray.filter((item) => item.genre === filterType);
};
