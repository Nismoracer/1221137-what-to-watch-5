import React, {useState} from "react";

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

export const withList = (Component) => (props) => {
  const {films, onFilterClick} = props;
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
    <Component
      {...props}
      activeFilter={activeFilter}
      filtersElement={filtersElement}
    />
  );
};
