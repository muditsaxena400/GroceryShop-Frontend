import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { useState } from 'react';
import './CSS/cards.css'

const useStyles = makeStyles({
    root: {
      width:300,
      padding:20,
      display: 'inline-block',
    
    },
    title: {
      fontSize: 30,
    },
    pos: {
      marginBottom: 12,
    },
  });

function RenderBookingHistory (props, index) {
    const classes = useStyles();
   
    const handleGetProduct = (index) => {

      return(
          <Card variant="outlined" key={index}>
              <Typography component="h2">{props.product.name[index]}</Typography>
              <Typography component="h2">{props.product.quantity[index]}</Typography>
          </Card>
      )
    } 

    return (
     <div className="cardStyle">
        <Card  variant="outlined" key={index}>
          <CardContent>        
            {props.product.quantity.map((details, index) => {
              return(
                <div>{handleGetProduct(index)}</div>
              )})}     
                <Typography  component="h2">Login ID: {props.product.loginId}</Typography>
                <Typography  component="h2">Mobile number: {props.product.mobileNo}</Typography>
                <Typography  color="textSecondary">Address: {props.product.address}, {props.product.district} <br/> {props.product.state}, {props.product.pincode} <br/> {props.product.country}</Typography>
                <Typography  className={classes.pos} component="h2">Total amount: ₹{props.product.amount}</Typography>
            </CardContent>
        </Card>
        </div>
    )
}

export default RenderBookingHistory