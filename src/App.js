import React from "react";
import Meta from "./containers/Meta/Meta";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/authActions";
import MainScreen from "./containers/MainScreen";
import asyncComponent from "./shared/asyncComponent/asyncComponent";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Logout from "./components/Auth/Logout";
import Logo from "./components/Logo/Logo";

const asyncDelivery = asyncComponent(() => {
  return import('./components/Delivery/Delivery');
});
const asyncContacts = asyncComponent(() => {
  return import('./components/Contacts/FooterContacts');
});
const asyncProducts = asyncComponent(() => {
  return import('./containers/ProductScreen');
});
const asyncCart = asyncComponent(() => {
  return import('./components/Cart/Cart');
});
class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div className="grid-container">
        <Meta />
        <Logo />
        <Header />
        <main>
          <Switch>
            <Route path="/cart" component={asyncCart} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/delivery" component={asyncDelivery} />
            <Route path="/contacts" component={asyncContacts} />
            <Route path="/products" component={asyncProducts} />
            <Route path="/" exact component={MainScreen} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
