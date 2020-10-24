import React from "react";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";

const MovieCard = ({film, onPreview, onMovieClick}) => {

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={(evt) => {
        evt.preventDefault();
        onPreview(film);
      }}
      onClick={(evt) => {
        evt.preventDefault();
        onMovieClick(film);
      }}
    >
      <div className="small-movie-card__image">
        <img src={`${film.icon}`} alt={`${film.title}`} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{`${film.title}`}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
  film: PropTypes.shape(propsTypesFilm),
};

export default MovieCard;
