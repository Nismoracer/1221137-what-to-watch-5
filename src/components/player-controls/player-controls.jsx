import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

let timer = null;

const PlayerControls = ({name, isPlaying, getTimeLeft, getProgress, onPlayPauseClick, onFullscreenClick}) => {
  const [elapsed, updateTime] = useState(0);

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  const toggleTimer = () => {
    if (!isPlaying) {
      timer = setInterval(() => {
        updateTime(getProgress());
      }, 500);
    } else {
      clearInterval(timer);
    }
  };

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={`${elapsed}`} max="100"></progress>
          <div className="player__toggler" style={{left: `${elapsed}%`}}
          >Toggler</div>
        </div>
        <div className="player__time-value">{getTimeLeft()}</div>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play"
          onClick={(evt) => {
            evt.preventDefault();
            onPlayPauseClick(toggleTimer);
          }}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref={`${isPlaying ? `#pause` : `#play-s`}`}></use>
          </svg>
          <span>Play</span>
        </button>
        <div className="player__name">{name}</div>

        <button type="button" className="player__full-screen"
          onClick={(evt) => {
            evt.preventDefault();
            onFullscreenClick();
          }}
        >
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
};

PlayerControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  getTimeLeft: PropTypes.func.isRequired,
  getProgress: PropTypes.func.isRequired,
  onPlayPauseClick: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
};

export default PlayerControls;
