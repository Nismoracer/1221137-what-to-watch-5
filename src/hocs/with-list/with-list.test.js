import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {withList} from "./with-list";
import films from "../../mocks/films";

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

const MockComponentWrapped = withList(MockComponent);

it(`withList is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onFilterClick={()=>{}}
      films={films}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
