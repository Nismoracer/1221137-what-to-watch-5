import React, {useState} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {connect} from "react-redux";
import {propsTypesFilm} from "../../utils/prop-types";
import {setTransmitState} from "../../store/action";
import {sendReview} from "../../store/api-action";
import {AuthorizationStatus, TransmitState} from "../../const";

const INITIAL_RATING = 0;

const AddReview = ({auth, postState, films, movieId, onSubmit}) => {
  const [rating, setRating] = useState(INITIAL_RATING);
  const [review, setReview] = useState(``);
  const [buttonDisabled, lockButton] = useState(true);

  const currentFilm = films.find((item) => item.id === parseInt(movieId, 10));

  const checkInputData = (rate = 0, string = ``) => {
    if ((rate >= 1 && rate <= 5) && (string.length >= 50 && string.length <= 400)) {
      lockButton(false);
      return;
    }
  };

  const handleRatingChange = (evt) => {
    const newRating = evt.target.value;
    setRating(() => {
      checkInputData(newRating, review);
      return newRating;
    });
  };

  const handleReviewChange = (evt) => {
    const newReview = evt.target.value;
    setReview(() => {
      checkInputData(rating, newReview);
      return newReview;
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(rating, review, movieId);
  };

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
          onSubmit={handleSubmit}>
          <fieldset style={{margin: `0`, padding: `0`, border: `none`}} disabled={postState === TransmitState.SENDING}>
            { (postState === TransmitState.ERROR) ? (
              <div>
                <p>Server is inavailable. Review wasn`t send. Please, try later.</p>
              </div>) : null
            }
            <div className="rating">
              <div className="rating__stars">

                <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
                  onChange={handleRatingChange} />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
                  onChange={handleRatingChange} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
                  onChange={handleRatingChange} />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
                  onChange={handleRatingChange} />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
                  onChange={handleRatingChange} />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                onChange={handleReviewChange}></textarea>
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

const mapStateToProps = (state) => ({
  films: state.MOVIES.initialList,
  auth: state.USER.authorizationStatus,
  postState: state.REVIEWS.TransmitState
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(rating, review, movieId) {
    dispatch(setTransmitState(TransmitState.SENDING));
    dispatch(sendReview(rating, review, movieId));
  },
});

AddReview.propTypes = {
  postState: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)),
};

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
