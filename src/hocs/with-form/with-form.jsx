import React, {useState} from "react";
import {connect} from "react-redux";
import {setTransmitState} from "../../store/action";
import {sendReview} from "../../store/api-action";
import {TransmitState} from "../../const";
import {compose} from "redux";

const INITIAL_RATING = 0;

const withForm = (Component) => (props) => {
  const {films, movieId, onSubmit} = props;

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

  return (
    <Component
      {...props}
      currentFilm={currentFilm}
      buttonDisabled={buttonDisabled}
      onRatingChange={handleRatingChange}
      onReviewChange={handleReviewChange}
      onFormSubmit={handleSubmit}
    />
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withForm
);
