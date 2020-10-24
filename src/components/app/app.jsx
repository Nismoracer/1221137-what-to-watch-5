import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import AddReview from "../add-review/add-review";
import Film from "../film/film";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import SignIn from "../sign-in/sign-in";

const App = ({name, genre, release, films, genres, watchlist}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onMovieClick = {(activeMovie) => history.push(`/films/${activeMovie.id}`)}
              onPlayPromoClick = {() => history.push(`/player/1`)}
              onMyListClick = {() => history.push(`/mylist`)}
              name = {name}
              genre = {genre}
              release = {release}
              films = {films}
              genres = {genres}
            />
          )}>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist"
          render={({history}) => (
            <MyList
              watchlist = {watchlist}
              onMovieClick = {(activeMovie) => history.push(`/films/${activeMovie.id}`)}
              onHomeClick = {() => history.push(`/`)}
            />
          )}>
        </Route>
        <Route exact path="/films/:id/review"
          render={({history}) => (
            <AddReview
              onHomeClick = {() => history.push(`/`)}
              onMyListClick = {() => history.push(`/mylist`)}
            />
          )}>
        </Route>
        <Route exact path="/films/:id"
          render={({history}) => (
            <Film
              films = {films}
              onHomeClick = {() => history.push(`/`)}
              onMyListClick = {() => history.push(`/mylist`)}
              onPlayClick = {(activeMovie) => history.push(`/player/${activeMovie.id}`)}
              onMovieClick = {(activeMovie) => history.push(`/films/${activeMovie.id}`)}
              onReviewClick = {(activeMovie) => history.push(`/films/${activeMovie.id}/review`)}
            />
          )}>
        </Route>
        <Route exact
          path="/player/:id"
          render={({history}) => (
            <Player
              onHomeClick = {() => history.push(`/`)}
            />
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  watchlist: PropTypes.array.isRequired
};

export default App;
