import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";

const MoviePreview = ({film, onMovieClick}) => {
  const videoRef = useRef();
  let timer = null;

  const [isLoading, setLoading] = useState(true);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    const videoTag = videoRef.current;
    videoTag.src = film.previewVideoLink;
    videoTag.poster = film.previewImage;
    videoTag.oncanplaythrough = (evt) => {
      evt.preventDefault();
      setLoading(false);
    };
  }, []);

  const onMouseEnter = () => {
    if (!isLoading) {
      timer = setTimeout(() => {
        videoRef.current.play();
        setPlaying(true);
      }, 1000);
    }
  };

  const onMouseLeave = () => {
    if (timer && !isPlaying) {
      clearTimeout(timer);
      return;
    }
    videoRef.current.pause();
    videoRef.current.load();
    setPlaying(false);
  };

  const handleMouseClick = (evt) => {
    evt.preventDefault();
    if (timer) {
      clearTimeout(timer);
    }
    onMovieClick(film);
  };

  return (
    <div className="small-movie-card__image"
      onMouseEnter = {onMouseEnter}
      onMouseLeave = {onMouseLeave}
      onClick = {handleMouseClick}
    >
      <video
        width = "100%"
        height = "100%"
        muted
        ref = {videoRef}
      />
    </div>
  );
};

MoviePreview.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
  film: PropTypes.shape(propsTypesFilm),
};

export default MoviePreview;
