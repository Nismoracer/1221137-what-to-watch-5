import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../store/api-action";

const checkEmail = (email) => {
  const template = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return template.test(String(email).toLowerCase());
};

const AuthScreen = ({wrongAuth, onSubmit}) => {

  const [validEmail, setEmailState] = useState(true);

  const loginRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!checkEmail(loginRef.current.value)) {
      setEmailState(false);
      return;
    }
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

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
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
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

const mapStateToProps = (state) => ({
  wrongAuth: state.USER.errorFlag,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

AuthScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  wrongAuth: PropTypes.bool.isRequired,
};

export {AuthScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
