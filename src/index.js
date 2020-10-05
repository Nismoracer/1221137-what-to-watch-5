import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const mainMovie = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: 2014
};

ReactDOM.render(
    <App
      name={mainMovie.name}
      genre={mainMovie.genre}
      release={mainMovie.release}
    />,
    document.querySelector(`#root`)
);
