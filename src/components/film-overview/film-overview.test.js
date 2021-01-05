import React from "react";
import renderer from "react-test-renderer";
import FilmOverview from "./film-overview";
import movies from "../../mocks/films";

const film = movies[0];

it(`Should render Film overview correctly`, () => {
  const tree = renderer
    .create(
        <FilmOverview
          film={film}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
