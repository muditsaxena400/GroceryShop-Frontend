import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import CustomerNavbar from '../CustomerNavbar';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  divHeight: {
    position: 'relative',
    bottom: '2px',
    marginTop: '30px'
  },
}));

const mainFeaturedPost = {
  title: "Life is food.Food is life.",
  description: "",
  image:
    "https://images.unsplash.com/photo-1606237906294-ae86d103d715?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9ubGluZSUyMGdyb2NlcnklMjBzdG9yZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  imgText: "main image description",

};

const featuredPosts = [
  {
    title: "What we believe",
    date: "Nov 11",
    description:
      "The main objective of this system is to speed up the lengthy process and make it fast so that the customers can order grocery from anywhere without the need of visiting the shop",
    image:
      "https://images.unsplash.com/photo-1600167013713-23747a76af77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdyb2Nlcnl8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageText: "Image Text",
  },
  {
    title: "We work for you",
    date: "Nov 12",
    description:
      "The shop Admin then verifies the order and then the order is finalized to reach its destination. These queries would be reviewed by the admin and they can respond to it appropriately..",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageText: "Image Text",
  },
  {
    title: "Core Values",
    date: "Nov 12",
    description:
      "The online grocery shop app aims to make the whole process of ordering grocery easier for the users. The system uses a user-friendly environment where the user can register and order grocery and check their previous booking as well.",
    image:
      "https://images.unsplash.com/photo-1614140510206-76fb2e24de5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvcmUlMjB2YWx1ZXN8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageText: "Image Text",
  },
  {
    title: "Step by Step Process",
    date: "Nov 11",
    description:
      "The system asks the customer for their details to register an account, which they can log into, and guides them successfully to navigate through all the items in stock and can place order of the items required. The customer can also check their booking history whenever they want.",
    image:
      "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageText: "Image Text",
  },
  
];

function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <CustomerNavbar/> 
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </Container>
        </main>
        
        <footer className={classes.divHeight}>
      <Footer/>
      </footer>
    </React.Fragment>
  );
}
export default AboutUs;