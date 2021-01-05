import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const mockStoreInitialized = mockStore({
  USER: {
    authorizationStatus: `AUTH`
  }
});


it(`Render Header`, () => {
  const tree = renderer
    .create(
        <Provider store={mockStoreInitialized}>
          <BrowserRouter>
            <Header/>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
