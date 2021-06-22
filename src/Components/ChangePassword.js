import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { changePassword } from '../Service/ChangePasswordService'
import { withStyles } from "@material-ui/core/styles";
import CustomerNavbar from "./CustomerNavbar";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main, 
  },
  form: {
    width: "30%", 
    marginTop: 20,
    marginLeft: 10,

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  TextField:
  {
    backgroundColor: 'white',
  },
  Typography:
  {
      paddingTop: 50,
  },
  colour: {
    color: 'red'
  },

});

class ChangePassword extends Component {

  initialState = {
    loginId: localStorage.getItem("loginId"),
    oldPassword:"",
    newPassword: "",
     
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
   
   changePassword(this.state.loginId,this.state.oldPassword, this.state.newPassword)
    .then((res) =>{
        this.setState({...this.initialState});
        console.log(res)
        this.props.history.push("/grocery/login")
    })
    .catch((err) => {
      const error= err.message.substring(
        err.message.indexOf("=") + 1,
        err.message.indexOf("]"));
        this.setState({errorMsg: error})
    })

  };

  render() {
    
    const { oldPassword, newPassword } = this.state;
    const classes  = this.props.classes;
    return (
      <div
      style = {{
        backgroundImage:
            "url(https://image.freepik.com/free-photo/healthy-lunch-go-packed-lunch-box_1220-4541.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            opacity: 0.9, 
      }}
      >
        <CustomerNavbar/>
      <div className = {classes.paper}>

          <Typography className={classes.Typography} component="h1" variant="h5">
            New Password
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  className={classes.TextField}
                  name="oldPassword"
                  label="Old Password"
                  type="password"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  className={classes.TextField}
                  name="newPassword"
                  label="New password"
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <p className={classes.colour}>{this.state.errorMsg !== "" ? this.state.errorMsg : null}</p>
            <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className= {classes.submit}
             size="large"
            >
              Done
            </Button>
          </form>
        </div>
        </div>
     
    );
  }
}

export default withStyles(styles)(ChangePassword);
