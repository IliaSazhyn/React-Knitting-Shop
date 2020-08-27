import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/authActions";
import ProductScreen from "./containers/ProductScreen";
import MainScreen from "./containers/MainScreen";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Contacts/FooterContacts";
import Delivery from "./components/Delivery/Delivery";
import Footer from "./components/Footer/Footer";
import Logout from "./components/Auth/Logout";
import Logo from "./components/Logo/Logo";
class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div className="grid-container">
        <Logo />
        <Header />
        <main>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/products" component={ProductScreen} />
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
