import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/authActions";

import classes from "./Auth.module.scss";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      input: {},
      errors: {},
      isSignup: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.authRedirectPath !== "/") {
      this.props.onSetAuthRedirectPath();
    }
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({ input: input });
      this.props.onAuth(
        this.state.input.email,
        this.state.input.password,
        this.state.input.name,
        this.state.isSignup
      );
    }
  }

  switchSignUpHandler = () => {
    this.setState({ isSignup: true });
  };
  switchSignInHandler = () => {
    this.setState({ isSignup: false });
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Введите правильный адрес";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Введите пароль";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Подтвердите пароль";
    }

    if (input["password"].length <= 5) {
      isValid = false;
      errors["confirm_password"] = "Пароль слишком короткий";
    }
    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm_password"] !== "undefined"
    ) {
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Пароли не совпадают";
      }
    }

    this.setState({
      errors: errors,
    });
    return isValid;
  }

  render() {
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }
    return (
      <div className={classes.auth}>
        <div className={classes.authContent}>
          {authRedirect}
          <h5>{this.state.isSignup ? "ЗАРЕГИСТРИРОВАТЬСЯ" : "ВОЙТИ"}</h5>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Имя: </label>
              <input
                type="text"
                name="name"
                value={this.state.input.name || ''}
                onChange={this.handleChange}
                placeholder="Введите имя"
                id="name"
              />

              <div className="text-danger">{this.state.errors.name}</div>
            </div>

            <div>
              <label>Почтовый адрес: </label>
              <input
                type="text"
                name="email"
                value={this.state.input.email || ''}
                onChange={this.handleChange}
                placeholder="Введите е-мейл"
                id="email"
              />

              <div className="text-danger">{this.state.errors.email}</div>
            </div>

            <div>
              <label>Пароль: </label>
              <input
                type="password"
                autoComplete="on"
                name="password"
                value={this.state.input.password || ''}
                onChange={this.handleChange}
                placeholder="Введите пароль"
                id="password"
              />
              <div className="text-danger">{this.state.errors.password}</div>
            </div>

            <div>
              <label>Повторите пароль: </label>
              <input
                type="password"
                name="confirm_password"
                autoComplete="on"
                value={this.state.input.confirm_password || ''}
                onChange={this.handleChange}
                placeholder="Повторите пароль"
                id="confirm_password"
              />

              <div className="text-danger">
                {this.state.errors.confirm_password}
              </div>
            </div>

            <Button
              className={classes.authContentButton}
              onClick={this.switchSignUpHandler}
              variant="contained"
              color="primary"
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
            <Button
              className={classes.authContentButton}
              onClick={this.switchSignInHandler}
              variant="contained"
              color="primary"
            >
              ВОЙТИ
            </Button>
            <Button
              className={classes.authContentButton}
              type="submit"
              value="Submit"
              variant="contained"
              color="secondary"
            >
              Принять
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, name, isSignup) =>
      dispatch(actions.auth(email, password, name, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
