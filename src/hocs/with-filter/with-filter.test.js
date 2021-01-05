import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withFilter from "./with-filter";
import films from "../../mocks/films";
import reviews from "../../mocks/reviews";

import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const mockStoreInitialized = mockStore({
  MOVIES: {
    initialList: films,
  },
  REVIEWS: {
    reviewsList: reviews,
  },
  USER: {
    authorizationStatus: `AUTH`
  }
});

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const MockComponentWrapped = withFilter(MockComponent);

it(`withFilter is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={mockStoreInitialized} >
      <MockComponentWrapped
        movieId = {1}
        onPlayClick = {noop}
        onMovieClick = {noop}
        onReviewClick = {noop}
      />
    </Provider>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
