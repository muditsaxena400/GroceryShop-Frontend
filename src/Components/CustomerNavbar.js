import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Home from '@material-ui/icons/Home';
import Logo from  '../Assests/NatureCart.png'
import { Link } from 'react-router-dom'
import './CSS/CustomerNavbar.css';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 50,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 250
  },
  colour: {
    color: 'blue'
  }
}));

export default function CustomerNavbar() {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
   
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.clear();
  }

  return (

    <div className="CustomerNavbarCss">

      <AppBar 
      position="sticky"
      style={{
          backgroundColor:"#2F4F4F",
          color:"whitesmoke",
         
      }}
      className="CustomerNavbarCss"
      >
        <Toolbar>
          <Typography> <img src={Logo} alt="logo" className={classes.logo} /></Typography> 
          <Typography variant="h6" className={classes.title}>
          <object align="right"> 
          
          <IconButton
                aria-label="shopping-cart"
                aria-haspopup="true"
                color="inherit"
                component = {Link}
                to="/grocery/cart"
              >
                <ShoppingCart />
              </IconButton>
             
            </object>
            
          <object align="right">
          <IconButton
                aria-label="home"
                aria-haspopup="true"
                color="inherit"
                href ="/customer/product/view/all"
              >
                <Home />
              </IconButton>
        
        
            </object>
            <object  align ="right" vspace="8px" > 
            Hi {localStorage.getItem("firstName")}
            </object>
         </Typography>
         

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                
                  <Link to ="/grocery/change/password">
                  <MenuItem className={classes.colour} onClick={handleClose}>
                    Change Password
                    </MenuItem>
                  </Link>
                    
                    <Link to = "/">
                    <MenuItem className={classes.colour} onClick={handleLogout}>
                      Logout
                    </MenuItem>
                    </Link>          
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
