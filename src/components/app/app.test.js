import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import films from "../../mocks/films";

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


it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStoreInitialized}>
          <App/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
