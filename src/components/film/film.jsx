import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {propsTypesFilm, propsTypesReview} from "../../utils/prop-types";
import Header from "../header/header";
import FilmTabs from "../film-tabs/film-tabs";
import {AuthorizationStatus} from "../../const";
import MoviesList from "../movies-list/movies-list";
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

const Film = ({films, movieId, reviews, authInfo, onPlayClick, onMovieClick, onReviewClick,
  requestReviews, changeFavorites}) => {

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

  const {id, backgroundImage, name, genre, released, posterImage} = film;

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={`${backgroundImage}`} alt={`${name}`} />
        </div>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button"
                onClick={(evt) => {
                  evt.preventDefault();
                  onPlayClick(film);
                }}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              {
                (authInfo !== AuthorizationStatus.AUTH) ? null :
                  (<button className="btn btn--list movie-card__button" type="button"
                    onClick={handleAddFavorite}
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>)
              }
              <a href="add-review.html" className="btn movie-card__button"
                onClick={(evt) => {
                  evt.preventDefault();
                  onReviewClick(film);
                }}
              >Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={`${posterImage}`} alt={`${name}`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">

            <FilmTabs
              film = {currentFilm}
              reviews = {reviews}
            />

          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">

          <MoviesList
            films={getSameMovies(films, id, genre)}
            onMovieClick={onMovieClick}
          />

        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
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

Film.propTypes = {
  authInfo: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
  changeFavorites: PropTypes.func.isRequired,
  requestReviews: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onReviewClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)),
  reviews: PropTypes.arrayOf(PropTypes.shape(propsTypesReview)),
};

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
