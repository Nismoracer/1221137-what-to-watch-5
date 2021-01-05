import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";
import films from "../../mocks/films";
import {BrowserRouter} from 'react-router-dom';

const noop = () => {};

it(`Should render My list correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MyList
            favorites={films}
            onMovieClick={noop}
            loadFavorites={noop}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
