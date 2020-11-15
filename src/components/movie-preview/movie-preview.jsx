import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";

export default class MoviePreview extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
    this.state = {
      isLoading: true
    };
    this.onMovieHover = this.onMovieHover.bind(this);
    this.onMovieOver = this.onMovieOver.bind(this);
  }

  componentDidMount() {
    const {film} = this.props;
    const videoTag = this._videoRef.current;
    videoTag.src = film.src;
    videoTag.poster = film.icon;
    videoTag.oncanplaythrough = (evt) => {
      evt.preventDefault();
      this.setState({
        isLoading: false
      });
    };
  }

  componentWillUnmount() {
    const videoRef = this._videoRef.current;
    videoRef.oncanplaythrough = null;
  }

  onMovieHover() {
    if (!this.isLoading) {
      setTimeout(() => this._videoRef.current.play(), 1000);
    }
  }

  onMovieOver() {
    this._videoRef.current.pause();
    this._videoRef.current.load();
  }

  render() {
    return (
      <div className="small-movie-card__image"
        onMouseOver = {this.onMovieHover}
        onMouseOut = {this.onMovieOver}
      >
        <video
          width = "280px"
          height = "175px"
          muted
          ref = {this._videoRef}
        />
      </div>
    );
  }
}

MoviePreview.propTypes = {
  film: PropTypes.shape(propsTypesFilm),
};
