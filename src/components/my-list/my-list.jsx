import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {propsTypesFilm} from "../../utils/prop-types";
import MoviesList from "../movies-list/movies-list";
import {Link} from "react-router-dom";
import {fetchMyList} from "../../store/api-action";

const MyList = ({favorites, onMovieClick, loadFavorites}) => {

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link className="logo__link"
            to="/"
          >
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">

          <MoviesList
            films={favorites}
            onMovieClick={onMovieClick}
          />

        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.MOVIES.myList,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites() {
    dispatch(fetchMyList());
  },
});

MyList.propTypes = {
  loadFavorites: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)),
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
