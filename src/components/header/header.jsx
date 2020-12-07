import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Avatar from "../avatar/avatar";
import SignIn from "../sign-in/sign-in";
import {AuthorizationStatus} from "../../const";

const Header = ({authInfo}) => {
  return (
    <React.Fragment>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <Link className="logo__link"
            to = "/"
          >
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="user-block">
          { (authInfo === AuthorizationStatus.AUTH) ? <Avatar /> : <SignIn />}
        </div>
      </header>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  authInfo: state.USER.authorizationStatus,
});

Header.propTypes = {
  authInfo: PropTypes.string.isRequired,
};

export {Header};
export default connect(mapStateToProps, null)(Header);
