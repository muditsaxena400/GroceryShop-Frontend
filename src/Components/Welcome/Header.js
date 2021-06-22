import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
// import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
// import Home from "../Home";
import Logo from '../../Assests/NatureCart.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    marginTop: 10,
  },
  appbarTitle: {
    flexGrow: "2",
  },
  // icon: {
  //   color: "#fff",
  //   fontSize: "2rem",
  // },
  colorText: {
    color: "black",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "5.5rem",
  },
  goDown: {
    color: "white",
    fontSize: "4rem",
  },
}));
function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
        <img
            src={Logo}
            alt="Logo"
            style={{ width: "22rem", height: "10rem" }}
          />
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>Welcome to NatureCart</h1>
          <Scroll to="actions" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
