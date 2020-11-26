import React from "react";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";
import {getRatingLabels} from "../../utils/movie";

const FilmOverview = (props) => {
  const {rating, scoresCount, director, starring, description} = props.film;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingLabels(rating)}</span>
          <span className="movie-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  film: PropTypes.shape(propsTypesFilm),
};

export default FilmOverview;
