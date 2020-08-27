import React from "react";
import classes from "./Footer.module.scss";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const footer = () => {
  let today = new Date(),
    date = today.getFullYear();
  return (
    <footer>
      <div className={classes.Footer}>
        <Box display="flex" justifyContent="center" flexDirection="row">
          <Button color="inherit" href="/delivery">
            Доставка
          </Button>
          <Button color="inherit" href="/contacts">
            Контакты
          </Button>
        </Box>

        <div>
          <p>Аксессуары для вязания © {date}</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
