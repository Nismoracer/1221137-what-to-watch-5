import React from "react";
import renderer from "react-test-renderer";
import {Player} from "./player";
import films from "../../mocks/films";

const noop = () => {};

it(`Should render Player correctly`, () => {
  const tree = renderer
    .create(
        <Player
          onHomeClick={noop}
          films={films}
          movieId={`1`}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
