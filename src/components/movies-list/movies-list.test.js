import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";
import films from "../../mocks/films";

it(`Should render Movies list correctly`, () => {
  const tree = renderer
    .create(
        <MoviesList
          films={films}
          onMovieClick={()=>{}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
