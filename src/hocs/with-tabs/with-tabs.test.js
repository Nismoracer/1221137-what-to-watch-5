import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {withTabs} from "./with-tabs";
import films from "../../mocks/films";
import reviews from "../../mocks/reviews";

const film = films[0];

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

const MockComponentWrapped = withTabs(MockComponent);

it(`withTabs is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      film={film}
      reviews={reviews}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
