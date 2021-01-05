import React from "react";
import renderer from "react-test-renderer";
import PromoWrapped from "./promo";
import films from "../../mocks/films";
import {BrowserRouter} from 'react-router-dom';

const promoFilm = films[0];

import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const mockStoreInitialized = mockStore({
  USER: {
    authorizationStatus: `AUTH`
  },
});

const noop = () => {};

it(`Should render Promo correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStoreInitialized} >
          <BrowserRouter>
            <PromoWrapped
              promo={promoFilm}
              onPlayPromoClick={noop}
              changeFavorites={noop}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
