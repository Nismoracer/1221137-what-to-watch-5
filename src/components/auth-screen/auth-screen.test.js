import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./auth-screen";
import {BrowserRouter} from 'react-router-dom';

const noop = () => {};

it(`Should Auth-screen render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AuthScreen
            validEmail={false}
            onSubmitClick={noop}
            wrongAuth={false}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
