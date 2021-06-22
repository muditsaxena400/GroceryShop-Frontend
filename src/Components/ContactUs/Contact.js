import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MainPost from "./MainPost";
import CustomerNavbar from '../CustomerNavbar';
import Footer from '../Footer';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  divHeight: {
    position: 'relative',
    bottom: '2px',
    marginTop: '30px'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const mainFeaturedPost = {
  title: "Contact Us.",
  description: "",
  image:
    "https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  imgText: "main image description",
};
function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <CustomerNavbar />
      <Container>
        <main>
          <MainPost post={mainFeaturedPost} />
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3" text-allign="center">
                      Anubhav Prajapati.
                    </Typography>
                  </CardContent>
                    <Button size="small" color="primary">
                      anubhav@gmail.com
                    </Button>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3">
                      Arvind Shokanda.
                    </Typography>
                  </CardContent>
                    <Button size="small" color="primary">
                      Arvind@gmail.com
                    </Button>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3">
                      Manraj Singh.
                    </Typography>
                  </CardContent>
                    <Button size="small" color="primary">
                      Manraj@gmail.com
                    </Button>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3">
                      Divya Rajeev.
                    </Typography>
                  </CardContent>
                    <Button size="small" color="primary">
                      divya@gmail.com
                    </Button>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3">
                      Rahul Kumar.
                    </Typography>
                  </CardContent>
                    <Button size="small" color="primary">
                      rahul@gmail.com
                    </Button>
                </Card>
              </Grid>

              <Grid item xs={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3">
                      Mudit Saxena
                    </Typography>
                  </CardContent>
                    <Button size="small" color="primary">
                      mudit@gmail.com
                    </Button>

                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>

      </Container>
      <footer className={classes.divHeight}>
      <Footer/>
      </footer>
    </React.Fragment>
  );
}

export default Contact;