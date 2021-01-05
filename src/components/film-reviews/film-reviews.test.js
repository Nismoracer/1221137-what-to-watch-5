import React from "react";
import renderer from "react-test-renderer";
import FilmReviews from "./film-reviews";
import reviews from "../../mocks/reviews";

it(`Should render Film review correctly`, () => {
  const tree = renderer
    .create(
        <FilmReviews
          reviews={reviews}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
