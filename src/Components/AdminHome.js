import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import AdminHeader from './Header/AdminHeader';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Footer from './Footer/Footer'

const images = [
  {
    url:'https://image.freepik.com/free-photo/green-lime-watercolor-texture-background_1083-171.jpg?1',
    title: 'View All Booking Requests',
    width: '50%',
    linkUrl: '/admin/bookhistory',
  },
  {
    url: 'https://image.freepik.com/free-photo/green-lime-watercolor-texture-background_1083-171.jpg?1',
    title: 'Product Operation',
    width: '50%',
    linkUrl: '/admin/product',
  },
 
];


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
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
    position: 'relative',
    left: 0,
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
    left:40 ,
    right: 40,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 40,
    right: 40,
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

export default function AdminHome() {
  const classes = useStyles();

  return (
    <div  className={classes.root} 
    
    style = {{
      backgroundImage:
          "url(https://image.freepik.com/free-photo/healthy-lunch-go-packed-lunch-box_1220-4541.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          opacity: 0.9, 
    }}>
      <AdminHeader/>
      
        {images.map((image) => (
          <ButtonBase
            href={image.linkUrl}
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
                <span className={classes.imageMarked}/>
              </Typography>
            </span>
          </ButtonBase>
        ))}
    </div>
  );
}
