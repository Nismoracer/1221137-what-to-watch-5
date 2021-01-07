import React, {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";

let timer = null;

const PlayerControls = ({name, isPlaying, getTimeLeft, getProgress, onPlayPauseClick, onFullscreenClick, onPlayingTimeSet}) => {
  /* eslint-disable */
  const [elapsed, updateTime] = useState(0);
  /* eslint-disable */
  const elapsedRef = useRef();

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

  const handleTogglerDrag = (evt) => {
    evt.preventDefault();
    const scale = elapsedRef.current;
    const leftBorder = scale.getBoundingClientRect().left;
    const rightBorder = scale.getBoundingClientRect().right;

    let volume = Math.round((evt.clientX - leftBorder) / (rightBorder - leftBorder) * 100);
    if (volume < 0) {
      volume = 0;
    } else if (volume > 100) {
      volume = 100;
    }
    onPlayingTimeSet(volume);
  };

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time" ref = {elapsedRef}>
          <progress className="player__progress" value={`${getProgress()}`} max="100"></progress>
          <div className="player__toggler" style={{left: `${getProgress()}%`}}
            onDragEnd = {(evt) => handleTogglerDrag(evt)}
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
  onPlayingTimeSet: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
};

export default PlayerControls;
