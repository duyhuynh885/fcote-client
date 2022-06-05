import useStyles from "./style";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        <div className={classes.navLinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
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
