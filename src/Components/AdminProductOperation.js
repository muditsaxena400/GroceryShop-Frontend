import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import ViewAllProductForAdmin from "./ViewAllProductForAdmin";
import AddProduct from "./AddProduct";
import AdminNavbar from './AdminNavbar';


const images = [
  {
    url: 'https://image.freepik.com/free-photo/small-supermarket-grocery-push-toy-cart-shopping_73558-4542.jpg',
    title: 'Add Product',
    width: '50%',
    linkUrl: '/admin/product/add',
  },
  {
    url: 'https://image.freepik.com/free-photo/white-shopping-cart-with-blue-background_77116-466.jpg',
    title: 'View All Product',
    width: '50%',
    linkUrl: '/admin/product/view/all'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '90%',
  },
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 200,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 90,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 90,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 90,
    right: 20,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    fontSize: 40,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
  
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const divStyle = {
  height: 100
}

export default function ButtonBases1() {
  const classes = useStyles();

  const buttonStyle={
    height: 250 
  }
  return (
    <>
    <div 
     style = {{
      backgroundImage:
          "url(https://image.freepik.com/free-photo/healthy-lunch-go-packed-lunch-box_1220-4541.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          opacity: 0.9, 
    }}>
    <div style={buttonStyle} >
    <AdminNavbar/>
    </div>
    <div className={divStyle}/>
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <Link to = {image.linkUrl} style={{color: '#FFF'}}>{image.title}</Link>  
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>

    

    </div>
    </>
  );
  
}
