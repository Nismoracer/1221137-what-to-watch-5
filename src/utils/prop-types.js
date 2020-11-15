import PropTypes from "prop-types";
import {RatingLabels} from "../const";

export const propsTypesFilm = {
  icon: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  mark: PropTypes.number.isRequired,
  rate: PropTypes.oneOf([RatingLabels.BAD, RatingLabels.NORMAL, RatingLabels.GOOD, RatingLabels.VERY_GOOD]).isRequired,
  ratings: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  details: PropTypes.shape({
    duration: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isMyList: PropTypes.bool.isRequired
};
