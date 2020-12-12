import React from "react";
import PropTypes from "prop-types";

const Filter = ({filtersElement}) => {
  return (
    <ul className="catalog__genres-list">
      {filtersElement}
    </ul>
  );
};

Filter.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  filtersElement: PropTypes.arrayOf(PropTypes.node),
};

export default Filter;
