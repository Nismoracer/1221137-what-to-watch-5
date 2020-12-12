import React, {useRef, useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../store/api-action";

const checkEmail = (email) => {
  const template = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return template.test(String(email).toLowerCase());
};

const withValidation = (Component) => (props) => {
  const {wrongAuth, onSubmit} = props;
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
    <Component
      {...props}
      wrongAuth={wrongAuth}
      validEmail={validEmail}
      onSubmitClick={handleSubmit}
      loginRef={loginRef}
      passwordRef={passwordRef}
    />
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withValidation
);
