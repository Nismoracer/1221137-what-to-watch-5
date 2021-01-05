import React from "react";
import renderer from "react-test-renderer";
import FilmTabs from "./film-tabs";

const noop = () => {};

it(`Should render Film tabs correctly`, () => {
  const tree = renderer
    .create(
        <FilmTabs
          activeTab={`Overview`}
          onMenuClick={noop}
          renderActiveSection={noop}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
