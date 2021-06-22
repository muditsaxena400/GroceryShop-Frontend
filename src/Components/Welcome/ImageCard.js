import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 300,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: " rem",
    color: "#ddd",
  },
  btn: {
    position: "relative",
  },
});

function ImageCard({ action, checked }) {
  const classes = useStyles();
  
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={action.imageUrl}
          title="Grocery Shop"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {action.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            Fill your cart with all the healthy and tasty groceries by clicking on the below button.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            className={classes.btn}
            href={action.linkUrl}
          >
            Click here
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}

export default ImageCard;
