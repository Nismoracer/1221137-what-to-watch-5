import React from "react";
import PropTypes from "prop-types";
import {propsTypesReview} from "../../utils/prop-types";
import {humanizeDate} from "../../utils/movie";

const addComment = (item) => {
  const {comment, date, rating, id, user: {name}} = item;
  const htmlDate = humanizeDate(date).html;
  const humanDate = humanizeDate(date).human;

  return (
    <div className="review" key={id}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={`${htmlDate}`}>{humanDate}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

const FilmReviews = ({reviews}) => {

  if (reviews.length === 0) {
    return null;
  }
  const middle = Math.ceil(reviews.length / 2);
  const leftColumn = reviews.slice(0, middle);
  const rightColumn = reviews.slice(middle);
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          leftColumn.map((item) => addComment(item))
        }
      </div>
      <div className="movie-card__reviews-col">
        {
          rightColumn.length !== 0 ? rightColumn.map((item) => addComment(item)) : null
        }
      </div>
    </div>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(propsTypesReview)),
};

export default FilmReviews;
