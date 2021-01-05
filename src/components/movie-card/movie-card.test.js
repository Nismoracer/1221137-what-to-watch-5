import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";
import films from "../../mocks/films";

const film = films[0];

it(`Should render Movie card correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          film={film}
          onMovieClick={()=>{}}
        >
          <video/>
        </MovieCard>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();
  expect(tree).toMatchSnapshot();
});
