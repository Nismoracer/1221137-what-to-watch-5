import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import MainScreen from "../main-screen/main-screen";
import AddReview from "../add-review/add-review";
import Film from "../film/film";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import AuthScreen from "../auth-screen/auth-screen";
import browserHistory from "../../browser-history";
import withForm from "../../hocs/with-form/with-form";
import withValidation from "../../hocs/with-validation/with-validation";
import withFilter from "../../hocs/with-filter/with-filter";

const AddReviewWrapped = withForm(AddReview);
const AuthScreenWrapped = withValidation(AuthScreen);
const FilmWrapped = withFilter(Film);

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              onMovieClick = {(activeMovie) => history.push(`/films/${activeMovie.id}`)}
              onPlayPromoClick = {() => history.push(`/player/1`)}
            />
          )}>
        </Route>
        <Route exact path="/login">
          <AuthScreenWrapped />
        </Route>
        <PrivateRoute exact path="/mylist"
          render={({history}) => (
            <MyList
              onMovieClick = {(activeMovie) => history.push(`/films/${activeMovie.id}`)}
            />)
          }
        />
        <PrivateRoute exact path="/films/:id/review"
          render={({match}) => {
            const {id} = match.params;
            return (
              <AddReviewWrapped movieId = {id} />);
          }}
        />
        <Route exact path="/films/:id"
          render={({match, history}) => {
            const {id} = match.params;
            return (
              <FilmWrapped
                movieId = {id}
                onPlayClick = {(activeMovie) => history.push(`/player/${activeMovie.id}`)}
                onMovieClick = {(activeMovie) => history.push(`/films/${activeMovie.id}`)}
                onReviewClick = {(activeMovie) => history.push(`/films/${activeMovie.id}/review`)}
              />);
          }}>
        </Route>
        <Route exact
          path="/player/:id"
          render={({match, history}) => {
            const id = match.params.id;
            return (
              <Player
                movieId = {id}
                onHomeClick = {() => history.goBack()}
              />);
          }}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
