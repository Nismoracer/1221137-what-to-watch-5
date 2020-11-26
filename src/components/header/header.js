import React from "react";
import PropTypes from "prop-types";

const Header = ({onMyListClick, onHomeClick}) => {
  return (
    <React.Fragment>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link"
            onClick={(evt)=>{
              evt.preventDefault();
              onHomeClick();
            }}>
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar"
            onClick={()=>onMyListClick()}
          >
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  onHomeClick: PropTypes.func,
  onMyListClick: PropTypes.func.isRequired,
};

export default Header;
