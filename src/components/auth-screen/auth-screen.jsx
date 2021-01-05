import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const AuthScreen = (props) => {
  const {wrongAuth, validEmail, onSubmitClick, loginRef, passwordRef} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link className="logo__link" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmitClick}>
          { (!validEmail) ? (
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>) : null
          }
          { (wrongAuth) ? (
            <div className="sign-in__message">
              <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
            </div>) : null
          }
          <div className="sign-in__fields">
            <div className={`sign-in__field ${validEmail ? `` : `sign-in__field--error`}`}>
              <input
                className="sign-in__input" type="text" placeholder="Email address" name="user-email" id="user-email"
                ref={loginRef} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" required
                ref={passwordRef} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link className="logo__link" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

AuthScreen.propTypes = {
  loginRef: PropTypes.object,
  passwordRef: PropTypes.object,
  validEmail: PropTypes.bool.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  wrongAuth: PropTypes.bool.isRequired,
};

export default AuthScreen;
