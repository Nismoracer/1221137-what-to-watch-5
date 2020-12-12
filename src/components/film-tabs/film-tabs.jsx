import React from "react";
import PropTypes from "prop-types";
import {propsTypesFilm, propsTypesReview} from "../../utils/prop-types";
import {MovieTabs} from "../../const";

const FilmTabs = (props) => {
  const {activeTab, onMenuClick, renderActiveSection} = props;
  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${activeTab === MovieTabs.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" id={MovieTabs.OVERVIEW}
              onClick={onMenuClick}>Overview</a>
          </li>
          <li className={`movie-nav__item ${activeTab === MovieTabs.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" id={MovieTabs.DETAILS}
              onClick={onMenuClick}>Details</a>
          </li>
          <li className={`movie-nav__item ${activeTab === MovieTabs.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" id={MovieTabs.REVIEWS}
              onClick={onMenuClick}>Reviews</a>
          </li>
        </ul>
      </nav>

      {renderActiveSection()}

    </React.Fragment>
  );
};

FilmTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  renderActiveSection: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  film: PropTypes.shape(propsTypesFilm),
  reviews: PropTypes.arrayOf(PropTypes.shape(propsTypesReview)),
};

export default FilmTabs;
