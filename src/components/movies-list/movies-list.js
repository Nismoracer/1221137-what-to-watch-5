import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, genres, onMovieClick} = this.props;
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">

          {genres.map((genre) => (
            <li key={genre} className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">{genre}</a>
            </li>
          ))}

        </ul>

        <div className="catalog__movies-list">

          {films.map((film) => (
            <MovieCard key={`${film.id}`}
              film={film}
              onMovieClick={onMovieClick}
            />
          ))}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
}

MoviesList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MoviesList;
