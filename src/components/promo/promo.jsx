import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import {connect} from "react-redux";
import {propsTypesFilm} from "../../utils/prop-types";
import {postFavorite} from "../../store/api-action";

const Promo = ({promo, onPlayPromoClick, changeFavorites}) => {
  const {backgroundImage, posterImage, name, genre, released} = promo;

  const handleAddFavorite = (evt) => {
    evt.preventDefault();
    if (promo.isFavorite) {
      changeFavorites(promo.id, 0);
    } else {
      changeFavorites(promo.id, 1);
    }
  };

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={`${backgroundImage}`} alt={`${name}`} />
      </div>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={`${posterImage}`} alt={`${name}`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>
          </div>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button"
              onClick={(evt) => {
                evt.preventDefault();
                onPlayPromoClick();
              }}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button"
              onClick={handleAddFavorite}
            >
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeFavorites(id, isFavorite) {
    dispatch(postFavorite(id, isFavorite));
  },
});

Promo.propTypes = {
  changeFavorites: PropTypes.func.isRequired,
  onPlayPromoClick: PropTypes.func.isRequired,
  promo: PropTypes.shape(propsTypesFilm),
};

const PromoWrapped = React.memo(Promo);

export {PromoWrapped};
export default connect(null, mapDispatchToProps)(PromoWrapped);
