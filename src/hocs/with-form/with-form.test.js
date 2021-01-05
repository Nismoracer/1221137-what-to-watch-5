import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withForm from "./with-form";
import films from "../../mocks/films";

import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const mockStoreInitialized = mockStore({
  MOVIES: {
    initialList: films,
  },
  USER: {
    authorizationStatus: `AUTH`
  },
  REVIEWS: {
    TransmitState: `IDLE`
  }
});

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

const MockComponentWrapped = withForm(MockComponent);

it(`withForm is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={mockStoreInitialized} >
      <MockComponentWrapped
        movieId = {1}
      />
    </Provider>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
