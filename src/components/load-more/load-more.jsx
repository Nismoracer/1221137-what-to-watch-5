import React from "react";
import PropTypes from "prop-types";

const LoadMore = ({onLoadMoreClick}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick = {(evt) => {
          evt.preventDefault();
          onLoadMoreClick();
        }}
      >Show more</button>
    </div>
  );
};

LoadMore.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
};

export default LoadMore;
