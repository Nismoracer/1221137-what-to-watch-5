import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen";
import films from "../../mocks/films";
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const promoFilm = films[0];

const mockStoreInitialized = mockStore({
  MOVIES: {
    initialList: films,
    filteredList: films,
    promo: promoFilm
  },
  USER: {
    authorizationStatus: `AUTH`
  }
});

const noop = () => {};

it(`Render Main screen`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStoreInitialized}>
          <BrowserRouter>
            <MainScreen
              filterList={noop}
              onPlayPromoClick={noop}
              onMovieClick={noop}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
