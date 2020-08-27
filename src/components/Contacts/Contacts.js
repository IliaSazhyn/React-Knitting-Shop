import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';

import classes from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <Box component="div" className={classes.contacts} display={{ xs: 'none', md: 'block' }}>
      <IconButton href="https://www.youtube.com/channel/UCrdS5dY3hyRMSZX-k-cFuSQ">
        <YouTubeIcon fontSize="large" color="inherit" />
      </IconButton>

      <IconButton href="https://www.facebook.com/marinasorokanich ">
        <FacebookIcon fontSize="large" color="inherit" />
      </IconButton>

      <IconButton href="https://www.instagram.com/yamarsana/">
        <InstagramIcon fontSize="large" color="inherit" />
      </IconButton>
    </Box>
  );
};

export default Contacts;
