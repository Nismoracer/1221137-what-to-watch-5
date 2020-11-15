import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import genres from "./mocks/genres";

const mainMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014
};

const myList = films.filter((movie) => movie.isMyList === true);
ReactDOM.render(
    <App
      name={mainMovie.name}
      genre={mainMovie.genre}
      release={mainMovie.release}
      films={films}
      genres={genres}
      watchlist={myList}
    />,
    document.querySelector(`#root`)
);
