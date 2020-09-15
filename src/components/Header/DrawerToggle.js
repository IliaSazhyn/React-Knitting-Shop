import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuLinks: {
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    color: "#000",
    fontWeight: "bold",
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton onClick={toggleDrawer} className={classes.closeMenuButton}>
        <CloseIcon />
      </IconButton>
      <div>
        <List className={classes.content}>
          <Link to="/" className={classes.link}>
            Главная
          </Link>
        </List>
        <Divider />
        <List className={classes.content}>
          <Link to="/products" className={classes.link}>
            Каталог
          </Link>
        </List>
        <Divider />
        <List className={classes.content}>
          <Link to="/delivery" className={classes.link}>
            Доставка
          </Link>
        </List>
        <Divider />
        <List className={classes.content}>
          <Link to="/contacts" className={classes.link}>
            Контакты
          </Link>
        </List>
      </div>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={toggleDrawer(anchor, true)}
            className={classes.menuButton}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <div className={classes.menuLinks}>
            <Link to="/" className={classes.header_active}>
              Главная
            </Link>
            <Link to="/products" className={classes.header_active}>
              Каталог
            </Link>
          </div>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
