import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";
import Filter from "../filter/filter";
import MoviesList from "../movies-list/movies-list";
import LoadMore from "../load-more/load-more";
import Promo from "../promo/promo";
import {filterMoviesListAction} from "../../store/action";
import {MOVIES_COUNT_PER_STEP} from "../../const";
import {withList} from "../../hocs/with-list/with-list";

const FilterWrapped = withList(Filter);

const MainScreen = ({promo, films, filteredList, filterList,
  onPlayPromoClick, onMovieClick}) => {

  const [renderedMovies, updateRenderedMovies] = useState([]);

  useEffect(() => {
    const moviesCount = filteredList.length;
    const renderedMoviesCount = Math.min(moviesCount, MOVIES_COUNT_PER_STEP);
    updateRenderedMovies(filteredList.slice(0, renderedMoviesCount));
  }, [filteredList]);

  const handleLoadMoreMovies = () => {
    const moviesCount = filteredList.length;
    const newRenderedMoviesCount = Math.min(moviesCount, renderedMovies.length + MOVIES_COUNT_PER_STEP);
    const newMovies = filteredList.slice(0, newRenderedMoviesCount);
    updateRenderedMovies(newMovies);
  };

  const handleFilterClick = (newFilter) => {
    filterList(newFilter);
  };

  return <React.Fragment>
    <Promo
      promo={promo}
      onPlayPromoClick={onPlayPromoClick}
    />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilterWrapped
          films={films}
          onFilterClick={handleFilterClick}
        />

        <MoviesList
          films={renderedMovies}
          onMovieClick={onMovieClick}
        />
        { (renderedMovies.length < filteredList.length) ?
          <LoadMore onLoadMoreClick={handleLoadMoreMovies} /> : null
        }

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
  filteredList: state.MOVIES.filteredList,
  films: state.MOVIES.initialList,
  promo: state.MOVIES.promo,
});

const mapDispatchToProps = (dispatch) => ({
  filterList(newFilter) {
    dispatch(filterMoviesListAction(newFilter));
  },
});

MainScreen.propTypes = {
  promo: PropTypes.shape(propsTypesFilm).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)).isRequired,
  filteredList: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)).isRequired,
  filterList: PropTypes.func.isRequired,
  onMovieClick: PropTypes.func.isRequired,
  onPlayPromoClick: PropTypes.func.isRequired,
};

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
