import React from "react";
import PropTypes from "prop-types";
import {MovieMenu} from "../../const";

const FilmMenu = ({isActive, onMenuClick}) => {

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${isActive === MovieMenu.OVERVIEW ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" id={MovieMenu.OVERVIEW}
            onClick={(evt) => onMenuClick(evt)}>Overview</a>
        </li>
        <li className={`movie-nav__item ${isActive === MovieMenu.DETAILS ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" id={MovieMenu.DETAILS}
            onClick={(evt) => onMenuClick(evt)}>Details</a>
        </li>
        <li className={`movie-nav__item ${isActive === MovieMenu.REVIEWS ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" id={MovieMenu.REVIEWS}
            onClick={(evt) => onMenuClick(evt)}>Reviews</a>
        </li>
      </ul>
    </nav>
  );
};

FilmMenu.propTypes = {
  isActive: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired
};

export default FilmMenu;
