import React, { Component } from "react";
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { withStyles } from '@material-ui/core/styles';
import AuthLink from "../../components/Auth/AuthLink";
import Drawer from "./DrawerToggle";
import { connect } from "react-redux";

import classes from "./Header.module.scss";

class Header extends Component {
  
  render() {

    const StyledBadge = withStyles((theme) => ({
      badge: {
        right: -3,
        top: 15,
        fontSize: '1.2rem',
        padding: '0 4px',
        zIndex: '0',
      },
    }))(Badge);

    return (
      <header className={classes.header}>
        
        <div className={classes.header_leftLinks}>
        <Drawer/>
        </div>
    
        <div className={classes.header_navLinks}>
        <Link to="/cart">
        {this.props.cartItems.length === 0 ? (
          
            <div className={classes.cart}>
               <StyledBadge badgeContent={0} color="default" showZero>
              <ShoppingCartRoundedIcon
                className={classes.cart_header_icon}
                fontSize="large"
              />

              </StyledBadge>
            </div>
           
          ) : (
            <div className={classes.cart}>
               <StyledBadge badgeContent={this.props.cartItems.length} color="default">
              <ShoppingCartRoundedIcon
                className={classes.cart_header_icon}
                fontSize="large"
              />

              </StyledBadge>
            </div>
            
          )}</Link>
          <AuthLink/>
          </div>

        
        
      </header>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(Header);
