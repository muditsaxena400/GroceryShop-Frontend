import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import actions from "./Action";
import useWindowPosition from "./WindowPosition";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="actions">
      <ImageCard action={actions[0]} checked={checked} />
      <ImageCard action={actions[1]} checked={checked} />
    </div>
  );
}
