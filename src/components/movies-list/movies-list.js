import React from "react";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";
import MovieCard from "../movie-card/movie-card";

const MoviesList = ({films, onMovieClick}) => {

  if (!films) {
    return null;
  }

  return (
    <div className="catalog__movies-list">

      {films.map((film) => (
        <MovieCard key={`${film.id}`}
          film={film}
          onMovieClick={onMovieClick}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)).isRequired,
};

export default MoviesList;
