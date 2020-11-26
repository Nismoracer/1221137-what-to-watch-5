import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {propsTypesFilm} from "../../utils/prop-types";
import MainScreen from "../main-screen/main-screen";
import AddReview from "../add-review/add-review";
import Film from "../film/film";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import SignIn from "../sign-in/sign-in";

const App = ({promo, films, watchlist}) => {

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
              promo = {promo}
              films = {films}
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
          render={({match, history}) => {
            const {id} = match.params;
            return (
              <Film
                films = {films}
                movieId = {id}
                onHomeClick = {() => history.push(`/`)}
                onMyListClick = {() => history.push(`/mylist`)}
                onPlayClick = {(activeMovie) => history.push(`/player/${activeMovie.id}`)}
                onMovieClick = {(activeMovie) => history.push(`/films/${activeMovie.id}`)}
                onReviewClick = {(activeMovie) => history.push(`/films/${activeMovie.id}/review`)}
              />);
          }}>
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
  promo: PropTypes.shape(propsTypesFilm).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)).isRequired,
  watchlist: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)).isRequired,
};

export default App;
