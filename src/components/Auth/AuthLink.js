import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { connect } from "react-redux";

import classes from "./AuthLink.module.scss";

class AuthLink extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Link to="/logout">
            <div className={classes.AuthUser}>
              <div className={classes.AuthDetail}>
                <AccountCircle color="inherit" className={classes.AuthLogo} />
                <p className={classes.AuthName}>Выход</p>
              </div>
            </div>
          </Link>
        ) : (
          <Link to="/auth">Авторизация</Link>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    userName: state.auth.userName,
  };
};

export default connect(mapStateToProps)(AuthLink);
