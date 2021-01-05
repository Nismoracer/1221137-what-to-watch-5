import React from "react";
import renderer from "react-test-renderer";
import LoadMore from "./load-more";

it(`Render Load more`, () => {
  const tree = renderer
    .create(
        <LoadMore
          onLoadMoreClick={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
