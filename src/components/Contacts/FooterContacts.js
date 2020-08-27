import React from "react";
import Container from "@material-ui/core/Container";
import { Grid, Box } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
      color: "#2196f3",
    },
    "& > a": {
      color: "black",
    },
  },
}));
function FooterContacts() {
  const classes = useStyles();
  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <h3>Контакты</h3>
          </Box>
          <h3>Email</h3>
          <Box display="flex" alignItems="center" className={classes.root}>
            <MailOutlineIcon fontSize="large" />{" "}
            <p>yamarsana@gmail.com</p>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <h3>Viber</h3>
          <Box display="flex" alignItems="center" className={classes.root}>
            <PhoneInTalkIcon fontSize="large" />
            <a href="tel:+380992585383">
              {" "}
              <p> +380992585383</p>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <h3>Instagram</h3>
          <Box display="flex" alignItems="center" className={classes.root}>
            <InstagramIcon fontSize="large" />{" "}
            <a href="https://www.instagram.com/yamarsana/">
              {" "}
              <p>@yamarsana</p>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <h3>Facebook</h3>
          <Box display="flex" alignItems="center" className={classes.root}>
            <FacebookIcon fontSize="large" />{" "}
            <a href="https://www.facebook.com/marinasorokanich">
              <p>Maryna Yakubyshena</p>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <h3>Youtube</h3>
          <Box display="flex" alignItems="center" className={classes.root}>
            <YouTubeIcon fontSize="large" />{" "}
            <a href="https://www.youtube.com/channel/UCrdS5dY3hyRMSZX-k-cFuSQ">
              <p>https://www.youtube.com/channel/UCrdS5dY3hyRMSZX-k-cFuSQ</p>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FooterContacts;
