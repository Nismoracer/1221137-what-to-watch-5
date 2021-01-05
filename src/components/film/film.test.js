import React from "react";
import renderer from "react-test-renderer";
import Film from "./film";
import movies from "../../mocks/films";
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const noop = () => {};
const movie = movies[3];

const mockStore = configureMockStore();

const mockStoreInitialized = mockStore({
  USER: {
    authorizationStatus: `AUTH`
  }
});

it(`Render Film correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStoreInitialized} >
          <BrowserRouter>
            <Film
              authInfo={`AUTH`}
              onSameMovies={noop}
              onPlayClick={noop}
              onMovieClick={noop}
              onReviewClick={noop}
              onFavoriteClick={noop}
              film={movie}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
