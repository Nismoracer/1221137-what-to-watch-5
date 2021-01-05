import React from "react";
import renderer from "react-test-renderer";
import MoviePreview from "./movie-preview";
import films from "../../mocks/films";

const film = films[0];

it(`Should render Movie preview correctly`, () => {
  const tree = renderer
    .create(
        <MoviePreview
          film={film}
          onMovieClick={()=>{}}
        >
          <video/>
        </MoviePreview>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
  expect(tree).toMatchSnapshot();
});
