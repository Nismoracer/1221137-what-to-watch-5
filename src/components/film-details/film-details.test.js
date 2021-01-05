import React from "react";
import renderer from "react-test-renderer";
import FilmDetails from "./film-details";
import movies from "../../mocks/films";

const film = movies[0];

it(`Should render Film details correctly`, () => {
  const tree = renderer
    .create(
        <FilmDetails
          film={film}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
