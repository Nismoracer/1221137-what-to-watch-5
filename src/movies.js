import {NO_FILTER} from "./const";

export const getFilteredList = (initialArray, filterType) => {
  if (filterType === NO_FILTER) {
    return initialArray;
  }
  return initialArray.filter((item) => item.genre === filterType);
};

export const updateMovies = (initialArray, update) => {
  const index = initialArray.findIndex((movie) => movie.id === update.id);
  if (index === -1) {
    throw new Error(`Can't update unexisting movie`);
  }
  initialArray[index] = update;
  return initialArray;
};
