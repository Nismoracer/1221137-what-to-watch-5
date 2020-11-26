import React, {useState} from "react";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";

const getFiltersList = (films) => {
  const filtersList = new Set();
  films.every((film, i) => {
    filtersList.add(film.genre);
    return i < 8;
  });
  let filters = Array.from(filtersList);
  filters.unshift(`All genres`);
  return filters;
};

const Filter = ({films, onFilterClick}) => {

  const [activeFilter, setFilter] = useState(`All genres`);

  const filtersList = getFiltersList(films);
  const filtersElement = filtersList.map((item) => {
    return (
      <li key={item} className={`catalog__genres-item ${item === activeFilter ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link"
          onClick={(evt)=>{
            evt.preventDefault();
            setFilter(evt.target.textContent);
            onFilterClick(evt.target.textContent);
          }}
        >{item}</a>
      </li>
    );
  });
  return (
    <ul className="catalog__genres-list">
      {filtersElement}
    </ul>
  );
};

Filter.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)),
};

export default Filter;
