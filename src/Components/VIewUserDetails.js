import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

function ViewUserDetails() {

    const classes = useStyles();

        return(
            <Paper elevation={5}>
                <Typography variant="h2" >Name: {localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</Typography>
                <Typography color="textSecondary">Login ID: {localStorage.getItem("loginId")}</Typography>
                <Typography color="textSecondary">Mobile number: {localStorage.getItem("mobileNo")}</Typography>
                <Typography color="textSecondary">Email: {localStorage.getItem("email")}</Typography>
            </Paper>
        )   
    
}

export default ViewUserDetails