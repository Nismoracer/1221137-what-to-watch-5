import React from "react";
import renderer from "react-test-renderer";
import Filter from "./filter";

const filterOne = () => {
  return (
    <li key="1" className="catalog__genres-item  catalog__genres-item--active">
      <a href="#" className="catalog__genres-link">Drama</a>
    </li>
  );
};
const filterTwo = () => {
  return (
    <li key="2" className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">Comedy</a>
    </li>
  );
};

it(`Should render Filter correctly`, () => {
  const tree = renderer
    .create(
        <Filter
          filtersElement={[filterOne(), filterTwo()]}
          onFilterClick={()=>{}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
