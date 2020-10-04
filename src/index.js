import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const MainMovie = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE: 2014
};

ReactDOM.render(
    <App
      name={MainMovie.NAME}
      genre={MainMovie.GENRE}
      release={MainMovie.RELEASE}
    />,
    document.querySelector(`#root`)
);
