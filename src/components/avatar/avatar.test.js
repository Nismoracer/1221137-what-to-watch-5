import React from "react";
import renderer from "react-test-renderer";
import Avatar from "./avatar";
import {BrowserRouter} from 'react-router-dom';

it(`Should Avatar render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Avatar/>
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
