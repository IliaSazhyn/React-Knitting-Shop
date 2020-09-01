import React from "react";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

import classes from "./Contacts.module.scss";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 10,
  },
}))(Tooltip);

const Contacts = () => {
  return (
    <Box component="div" className={classes.contacts} display={{ xs: 'none', md: 'block' }}>
       <LightTooltip title="Youtube" placement="top">
      <IconButton href="https://www.youtube.com/channel/UCrdS5dY3hyRMSZX-k-cFuSQ">
        <YouTubeIcon fontSize="large" color="inherit" />
      </IconButton>
      </LightTooltip>

      <LightTooltip title="Facebook" placement="top">
      <IconButton href="https://www.facebook.com/marinasorokanich ">
        <FacebookIcon fontSize="large" color="inherit" />
      </IconButton>
      </LightTooltip>

      <LightTooltip title="Instagram" placement="top">
      <IconButton href="https://www.instagram.com/yamarsana/">
        <InstagramIcon fontSize="large" color="inherit" />
      </IconButton>
      </LightTooltip>
    </Box>
  );
};

export default Contacts;
