import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withValidation from "./with-validation";

import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const mockStoreInitialized = mockStore({
  USER: {
    errorFlag: false
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

const MockComponentWrapped = withValidation(MockComponent);

it(`withValidation is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={mockStoreInitialized} >
      <MockComponentWrapped />
    </Provider>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
