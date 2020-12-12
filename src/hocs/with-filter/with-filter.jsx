import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getFilteredList} from "../../movies";
import {fetchReviews, postFavorite} from "../../store/api-action";

const getSameMovies = (films, id, genre) => {
  const SAME_MOVIES_LIMIT = 4;
  const sameGenre = getFilteredList(films, genre);
  const sameMovies = sameGenre.filter((film) => film.id !== id);
  if (sameMovies.length > SAME_MOVIES_LIMIT) {
    return sameMovies.slice(0, SAME_MOVIES_LIMIT);
  }
  return sameMovies;
};

const withFilter = (Component) => (props) => {
  const {films, movieId, requestReviews, changeFavorites} = props;

  const [film, setFilm] = useState(null);
  const currentFilm = films.find((item) => item.id === parseInt(movieId, 10));

  useEffect(() => {
    setFilm(currentFilm);
    requestReviews(movieId);
  }, [currentFilm]);

  if (!film) {
    return <p>No such page...</p>;
  }

  const handleAddFavorite = (evt) => {
    evt.preventDefault();
    if (currentFilm.isFavorite) {
      changeFavorites(currentFilm.id, 0);
    } else {
      changeFavorites(currentFilm.id, 1);
    }
  };

  return (
    <Component
      {...props}
      film={film}
      onSameMovies={getSameMovies}
      onFavoriteClick={handleAddFavorite}
    />
  );
};

const mapStateToProps = (state) => ({
  authInfo: state.USER.authorizationStatus,
  films: state.MOVIES.initialList,
  reviews: state.REVIEWS.reviewsList,
});

const mapDispatchToProps = (dispatch) => ({
  requestReviews(movieId) {
    dispatch(fetchReviews(movieId));
  },
  changeFavorites(id, isFavorite) {
    dispatch(postFavorite(id, isFavorite));
  },
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withFilter
);
