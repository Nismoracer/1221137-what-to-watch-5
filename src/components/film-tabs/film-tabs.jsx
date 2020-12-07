import React, {useState} from "react";
import PropTypes from "prop-types";
import {propsTypesFilm, propsTypesReview} from "../../utils/prop-types";
import {MovieTabs} from "../../const";
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";

const FilmTabs = ({film, reviews}) => {

  const [activeTab, setActiveTab] = useState(MovieTabs.OVERVIEW);

  const renderActiveSection = () => {
    let activeElement = null;
    switch (activeTab) {
      case MovieTabs.OVERVIEW:
        activeElement = <FilmOverview film={film} />;
        break;
      case MovieTabs.DETAILS:
        activeElement = <FilmDetails film={film} />;
        break;
      case MovieTabs.REVIEWS:
        activeElement = <FilmReviews reviews={reviews} />;
        break;
    }
    return activeElement;
  };

  const handleMenuClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.textContent);
  };

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${activeTab === MovieTabs.OVERVIEW ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" id={MovieTabs.OVERVIEW}
              onClick={handleMenuClick}>Overview</a>
          </li>
          <li className={`movie-nav__item ${activeTab === MovieTabs.DETAILS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" id={MovieTabs.DETAILS}
              onClick={handleMenuClick}>Details</a>
          </li>
          <li className={`movie-nav__item ${activeTab === MovieTabs.REVIEWS ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link" id={MovieTabs.REVIEWS}
              onClick={handleMenuClick}>Reviews</a>
          </li>
        </ul>
      </nav>

      {renderActiveSection()}

    </React.Fragment>
  );
};

FilmTabs.propTypes = {
  film: PropTypes.shape(propsTypesFilm),
  reviews: PropTypes.arrayOf(PropTypes.shape(propsTypesReview)),
};

export default FilmTabs;
