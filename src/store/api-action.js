import {initializeMoviesList, initializeMyList, initializePromoMovie,
  getReviews, requireAuthorization, redirectToRoute, updateMoviesList,
  raiseWrongPassword, setTransmitState} from "./action";
import {AuthorizationStatus, TransmitState} from "../const";
import {adaptToClient} from "../services/api";

export const fetchInitialMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => data.map(adaptToClient))
    .then((result) => dispatch(initializeMoviesList(result)))
);

export const fetchMyList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => data.map(adaptToClient))
    .then((result) => dispatch(initializeMyList(result)))
);

export const postFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${isFavorite}`)
    .then(({data}) => adaptToClient(data))
    .then((movie) => dispatch(updateMoviesList(movie)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => adaptToClient(data))
    .then((movie) => dispatch(initializePromoMovie(movie)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(getReviews(data)))
);

export const sendReview = (rating, comment, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => dispatch(setTransmitState(TransmitState.IDLE)))
    .then(() => dispatch(redirectToRoute(`/films/${id}`)))
    .catch(() => dispatch(setTransmitState(TransmitState.ERROR)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(raiseWrongPassword(false)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch(() => dispatch(raiseWrongPassword(true)))
);
