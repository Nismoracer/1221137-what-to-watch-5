import React, {useState} from "react";
import {MovieTabs} from "../../const";
import FilmOverview from "../../components/film-overview/film-overview";
import FilmDetails from "../../components/film-details/film-details";
import FilmReviews from "../../components/film-reviews/film-reviews";

export const withTabs = (Component) => (props) => {

  const {film, reviews} = props;

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
    <Component
      {...props}
      activeTab={activeTab}
      onMenuClick={handleMenuClick}
      renderActiveSection={renderActiveSection}
    />
  );
};
