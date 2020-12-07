import React from "react";
import PropTypes from "prop-types";
import {propsTypesReview} from "../../utils/prop-types";
import {convertDate} from "../../utils/movie";

const addComment = (review) => {
  const {comment, date, rating, id, user: {name}} = review;
  const dateType = new Date(date);
  const atribute = convertDate(dateType).atribute;
  const visible = convertDate(dateType).visible;

  return (
    <div className="review" key={id}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={`${atribute}`}>{visible}</time>
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
  const middleOfComments = Math.ceil(reviews.length / 2);
  const leftColumn = reviews.slice(0, middleOfComments);
  const rightColumn = reviews.slice(middleOfComments);
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
