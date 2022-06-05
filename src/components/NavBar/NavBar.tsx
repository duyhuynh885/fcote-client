import useStyles from "./style";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import LogoBand from "../Icons/LogoBand";

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar>
        <LogoBand />
        <div className={classes.navLinks}>
          <Link to="/aboutUs" className={classes.link}>
            About Us
          </Link>
          <Link to="/contactUs" className={classes.link}>
            Contact Us
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
