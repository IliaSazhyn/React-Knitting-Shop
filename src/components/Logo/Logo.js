import React from "react";
import Contacts from "../Contacts/Contacts";
import myLogo from "../../assets/images/logo.png";
import bgPattern from "../../assets/images/pattern.jpg";
import Bounce from "react-reveal/Bounce";
import Box from '@material-ui/core/Box';
import classes from "./Logo.module.scss";

const Logo = () => {
  var sectionLogo = {
    width: "100%",
    height: "200px",
    backgroundImage: `url(${bgPattern})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  var styleLogo = {
    width: "100px",
    height: "100px",
  };

  return (
    <div style={sectionLogo}>
      <Box component="div" boxShadow={3} className={classes.Logo_presentation}>Интернет магазин аксессуаров для вязания</Box>
      <div className={classes.Logo}>
        <Bounce>
          <h1>YAMARSANA</h1>
          <img src={myLogo} style={styleLogo} alt="Logo" />
          <p>CRAZY KNITTER</p>
        </Bounce>
      </div>
      <div></div>
      <Contacts />
    </div>
  );
};

export default Logo;
