import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {propsTypesFilm} from "../../utils/prop-types";
import {AuthorizationStatus, TransmitState} from "../../const";

const AddReview = (props) => {
  const {auth, postState, currentFilm, onFormSubmit, onRatingChange,
    buttonDisabled, onReviewChange} = props;
  const {backgroundImage, name, posterImage} = currentFilm;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={`${backgroundImage}`} alt={`${name}`} />
        </div>

        <Header />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={`${posterImage}`} alt={`${name}`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form"
          onSubmit={onFormSubmit}>
          <fieldset style={{margin: `0`, padding: `0`, border: `none`}} disabled={postState === TransmitState.SENDING}>
            { (postState === TransmitState.ERROR) ? (
              <div>
                <p>Server is inavailable. Review wasn`t send. Please, try later.</p>
              </div>) : null
            }
            <div className="rating">
              <div className="rating__stars">

                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
                  onChange={onRatingChange} />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
                  onChange={onRatingChange} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
                  onChange={onRatingChange} />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
                  onChange={onRatingChange} />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
                  onChange={onRatingChange} />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                onChange={onReviewChange}></textarea>
              <div className="add-review__submit">
                { auth === AuthorizationStatus.AUTH ?
                  <button className="add-review__btn" type="submit" disabled={buttonDisabled}>Post</button> : null
                }
              </div>

            </div>
          </fieldset>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  postState: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  currentFilm: PropTypes.shape(propsTypesFilm),
};

export default AddReview;
