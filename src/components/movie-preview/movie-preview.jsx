import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {propsTypesFilm} from "../../utils/prop-types";

const MoviePreview = ({film}) => {
  const videoRef = useRef();

  const [isLoading, setLoading] = useState(true);

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
      setTimeout(() => videoRef.current.play(), 1000);
    }
  };

  const onMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.load();
  };

  return (
    <div className="small-movie-card__image"
      onMouseOver = {onMouseEnter}
      onMouseOut = {onMouseLeave}
    >
      <video
        width = "280px"
        height = "175px"
        muted
        ref = {videoRef}
      />
    </div>
  );
};

export default MoviePreview;

MoviePreview.propTypes = {
  film: PropTypes.shape(propsTypesFilm),
};
