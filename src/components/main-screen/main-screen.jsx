import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";
import Filter from "../filter/filter";
import MoviesList from "../movies-list/movies-list";
import Promo from "../promo/promo";
import {ActionCreator} from "../../store/action";

const MainScreen = ({promo, films, filteredList, initializeList, filterList,
  onMyListClick, onPlayPromoClick, onMovieClick}) => {

  useEffect(() => {
    initializeList(films);
  }, []);

  const handleFilterClick = (newFilter) => {
    filterList(newFilter);
  };

  return <React.Fragment>
    <Promo
      promo={promo}
      onPlayPromoClick={onPlayPromoClick}
      onMyListClick={onMyListClick}
    />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Filter
          films={films}
          onFilterClick={handleFilterClick}
        />

        <MoviesList
          films={filteredList}
          onMovieClick={onMovieClick}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>

      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

const mapStateToProps = (state) => ({
  filteredList: state.filteredList,
});

const mapDispatchToProps = (dispatch) => ({
  initializeList(films) {
    dispatch(ActionCreator.initializeList(films));
  },
  filterList(newFilter) {
    dispatch(ActionCreator.filterList(newFilter));
  },
});

MainScreen.propTypes = {
  filteredList: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)).isRequired,
  initializeList: PropTypes.func.isRequired,
  filterList: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onPlayPromoClick: PropTypes.func.isRequired,
  promo: PropTypes.shape(propsTypesFilm).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)).isRequired,
};

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
