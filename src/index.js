import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import films from "./mocks/films";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const myList = films.filter((movie) => movie.isFavorite === true);
ReactDOM.render(
    <Provider store={store}>
      <App
        promo={films[0]}
        films={films}
        watchlist={myList}
      />
    </Provider>,
    document.querySelector(`#root`)
);
