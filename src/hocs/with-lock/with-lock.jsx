import React, {useState} from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {connect} from "react-redux";
import {propsTypesFilm} from "../../utils/prop-types";
import {setTransmitState} from "../../store/action";
import {sendReview} from "../../store/api-action";
import {AuthorizationStatus, TransmitState} from "../../const";

const INITIAL_RATING = 0;

const withLock = (Component) => {
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
    <Component>
      {...props}
      auth={auth}
      postState={postState}
      films={films}
      movieId={movieId}
      onSubmit={handleSubmit}
    </Component>
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

withLock.propTypes = {
  postState: PropTypes.string.isRequired,
  auth: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)),
};

export {withLock};
export default connect(mapStateToProps, mapDispatchToProps)(withLock);
