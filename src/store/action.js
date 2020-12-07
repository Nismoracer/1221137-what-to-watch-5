export const ActionType = {
  INITIALIZE_MOVIES: `INITIALIZE_MOVIES`,
  UPDATE_MOVIES: `UPDATE_MOVIES`,
  INITIALIZE_MYLIST: `INITIALIZE_MYLIST`,
  INITIALIZE_PROMO: `INITIALIZE_PROMO`,
  FILTER_LIST: `FILTER_LIST`,
  GET_REVIEWS: `GET_REVIEWS`,
  SEND_REVIEW: `SEND_REVIEW`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REPEAT_PASSWORD: `REPEAT_PASSWORD`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const initializeMoviesList = (list) => {
  return ({
    type: ActionType.INITIALIZE_MOVIES,
    payload: list
  });
};

export const updateMoviesList = (movie) => {
  return ({
    type: ActionType.UPDATE_MOVIES,
    payload: movie
  });
};

export const initializeMyList = (movies) => {
  return ({
    type: ActionType.INITIALIZE_MYLIST,
    payload: movies
  });
};

export const initializePromoMovie = (movie) => {
  return ({
    type: ActionType.INITIALIZE_PROMO,
    payload: movie
  });
};

export const getReviews = (reviews) => {
  return ({
    type: ActionType.GET_REVIEWS,
    payload: reviews
  });
};

export const setTransmitState = (status) => {
  return ({
    type: ActionType.SEND_REVIEW,
    payload: status
  });
};

export const filterMoviesListAction = (filterType) => {
  return ({
    type: ActionType.FILTER_LIST,
    filter: filterType
  });
};

export const requireAuthorization = (status) => {
  return ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  });
};

export const raiseWrongPassword = (status) => {
  return ({
    type: ActionType.REPEAT_PASSWORD,
    payload: status,
  });
};

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
