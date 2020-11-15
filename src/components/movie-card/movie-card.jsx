import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";
import MoviePreview from "../movie-preview/movie-preview";

class MovieCard extends PureComponent {

  render() {
    const {film, onMovieClick} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card"
        onClick={(evt) => {
          evt.preventDefault();
          onMovieClick(film);
        }}
      >
        <MoviePreview
          film={film}
        />
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{`${film.title}`}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
  film: PropTypes.shape(propsTypesFilm),
};

export default MovieCard;
