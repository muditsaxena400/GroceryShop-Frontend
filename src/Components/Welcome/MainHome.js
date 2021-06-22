import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import UserCard from "./UserCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(https://image.freepik.com/free-photo/small-grocery-cart-with-gift-box_23-2147950535.jpg) `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
function MainHome() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <UserCard />
    </div>
  );
}

export default MainHome;
