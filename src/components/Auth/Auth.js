import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/authActions";

import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

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
    this.setState((prevState) => {
      return { isSignup: !prevState.isSignup };
    });
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Введите имя";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Введите Email";
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

    if (typeof input["password"] === "undefined") {
      isValid = false;
      }

    if (typeof input["password"] !== "undefined" && input["password"].length <= 5) {
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

    const LightTooltip = withStyles((theme) => ({
      tooltip: {
        color: "white",
        boxShadow: theme.shadows[1],
        fontSize: 10,
      },
    }))(Tooltip);

    return (
      <div className={classes.auth}>
        <div className={classes.authContent}>
          {authRedirect}
          <h5>{this.state.isSignup ? "РЕГИСТРАЦИЯ" : "ВОЙТИ"}</h5>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Имя: </label>
              <input
                type="text"
                name="name"
                value={this.state.input.name || ""}
                onChange={this.handleChange}
                placeholder="Введите имя"
                id="name"
              />

              <div className="text-danger">{this.state.errors.name}</div>
            </div>

            <div>
              <label>Email: </label>
              <input
                type="text"
                name="email"
                value={this.state.input.email || ""}
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
                value={this.state.input.password || ""}
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
                value={this.state.input.confirm_password || ""}
                onChange={this.handleChange}
                placeholder="Повторите пароль"
                id="confirm_password"
              />

              <div className="text-danger">
                {this.state.errors.confirm_password}
              </div>
            </div>

            <LightTooltip title="Подтвердить" placement="top">
              <Button
                className={classes.authContentButton}
                type="submit"
                value="Submit"
                variant="contained"
                color="secondary"
              >
                {this.state.isSignup ? "ЗАРЕГИСТРИРОВАТЬСЯ" : "ВОЙТИ"}
              </Button>
            </LightTooltip>

            <div>
              <p className={classes.authContent__desc}>
                {!this.state.isSignup
                  ? "Еще не регистрировались?"
                  : "Уже зарегистрированы?"}
              </p>
              <LightTooltip
                title={
                  !this.state.isSignup
                    ? "Зарегистрировать нового пользователя"
                    : "Войти, используя свои данные"
                }
                placement="top"
              >
                <Button
                  className={classes.authContentButton}
                  onClick={this.switchSignUpHandler}
                >
                  {!this.state.isSignup
                    ? "Зарегистрировать пользователя"
                    : "Войти"}
                </Button>
              </LightTooltip>
            </div>
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
