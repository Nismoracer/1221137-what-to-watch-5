import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import Error from "./components/error/error";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {fetchInitialMoviesList, fetchPromoMovie, checkAuth} from "./store/api-action";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());
Promise.all([
  store.dispatch(fetchInitialMoviesList()),
  store.dispatch(fetchPromoMovie()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App
          />
        </Provider>,
        document.querySelector(`#root`)
    );
  })
  .catch(() => {
    ReactDOM.render(<Error />, document.querySelector(`#root`));
  });
