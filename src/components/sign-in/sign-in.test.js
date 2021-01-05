import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";
import {BrowserRouter} from 'react-router-dom';

it(`Should Sign In render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <SignIn/>
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
