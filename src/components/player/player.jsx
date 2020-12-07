import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {propsTypesFilm} from "../../utils/prop-types";
import PlayerControls from "../player-controls/player-controls";

let duration = 0;

const Player = ({onHomeClick, movieId, films}) => {
  const currentFilm = films.find((item) => item.id === parseInt(movieId, 10));
  const {name, videoLink} = currentFilm;

  const [isLoading, setLoading] = useState(true);
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef();


  useEffect(() => {
    const movie = videoRef.current;
    movie.src = videoLink;
    movie.onloadedmetadata = () => {
      duration = movie.duration;
    };

    movie.oncanplaythrough = (evt) => {
      evt.preventDefault();
      setLoading(false);
    };
  }, []);

  const handlePlayPauseClick = (toggleTimer) => {
    if (!isPlaying) {
      if (!isLoading) {
        const movie = videoRef.current;
        movie.play();
        setPlaying(true);
        toggleTimer();
      }
    } else {
      videoRef.current.pause();
      setPlaying(false);
      toggleTimer();
    }
  };

  const getProgress = () => {
    if (!videoRef.current || !duration) {
      return 0;
    }
    return videoRef.current.currentTime / duration * 100;
  };

  const getTimeLeft = () => {
    if (!videoRef.current || !duration) {
      return ``;
    }
    const secondsLeft = new Date((duration - videoRef.current.currentTime) * 1000);
    const offset = secondsLeft.getTimezoneOffset() / 60;
    const hours = (secondsLeft.getHours() + offset).toString();
    let minutes = secondsLeft.getMinutes().toString();
    if (minutes.length < 2) {
      minutes = `0` + minutes;
    }
    let seconds = secondsLeft.getSeconds().toString();
    if (seconds.length < 2) {
      seconds = `0` + seconds;
    }
    return hours + `:` + minutes + `:` + seconds;
  };

  const handleFullscreenClick = () => {
    videoRef.current.requestFullscreen();
  };

  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"
        ref = {videoRef}
      ></video>

      <button type="button" className="player__exit"
        onClick={(evt) => {
          evt.preventDefault();
          onHomeClick();
        }}>Exit</button>

      <PlayerControls
        name={name}
        getProgress={getProgress}
        getTimeLeft={getTimeLeft}
        onPlayPauseClick={handlePlayPauseClick}
        onFullscreenClick={handleFullscreenClick}
        isPlaying={isPlaying}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: state.MOVIES.initialList,
});

Player.propTypes = {
  movieId: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propsTypesFilm)).isRequired,
  onHomeClick: PropTypes.func.isRequired,
};

export {Player};
export default connect(mapStateToProps)(Player);
