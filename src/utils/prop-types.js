import PropTypes from "prop-types";

export const propsTypesFilm = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  videoLink: PropTypes.string.isRequired
};

export const propsTypesReview = {
  comment: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string})
};
