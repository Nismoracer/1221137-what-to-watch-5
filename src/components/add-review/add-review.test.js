import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review";
import films from "../../mocks/films";
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const mockStoreInitialized = mockStore({
  USER: {
    authorizationStatus: `AUTH`
  }
});

const currentFilm = films[0];

const noop = () => {};

it(`Should Add review render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStoreInitialized}>
          <BrowserRouter>
            <AddReview
              auth={`AUTH`}
              postState={`IDLE`}
              currentFilm={currentFilm}
              onFormSubmit={noop}
              onRatingChange={noop}
              buttonDisabled={true}
              onReviewChange={noop}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
