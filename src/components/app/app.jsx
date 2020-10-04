import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {name, genre, release} = props;
  return (
    <MainScreen
      name = {name}
      genre = {genre}
      release = {release}
    />
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
};

export default App;
