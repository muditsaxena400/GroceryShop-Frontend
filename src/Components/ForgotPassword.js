import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { forgotPassword } from '../Service/ForgotPasswordService'
import { withStyles } from "@material-ui/core/styles";
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
  colour: {
    color: 'red'
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
  }
});

class ForgotPassword extends Component {

  initialState = {
    loginId: "",
    answer:"",
    newPassword: "",
     
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
   
   forgotPassword(this.state.loginId,this.state.answer, this.state.newPassword)
    .then((res) =>{
        this.setState({...this.initialState});
        this.props.history.push("/grocery/login")
        console.log(res)
    })
    .catch((err) => {
      const error= err.message.substring(
        err.message.indexOf("=") + 1,
        err.message.indexOf("]"));
        this.setState({errorMsg: error})
    })
  };

  render() {
    const { loginId, answer, newPassword } = this.state;
    const classes  = this.props.classes;
    return (
      <div className ={classes.paper}
         
      style = {{
        backgroundImage:
            "url(https://image.freepik.com/free-photo/isolated-shipping-paper-boxes-inside-blue-shopping-cart-trolley-tablet-isolated-blue_50039-2474.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            opacity: 0.9, 
      }}
    >
            
          <Typography component="h1" variant="h2" align = "center" color = "default" marginTop = "20px" className = {classes.Typography}>
            Forgot Password
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="loginId"
                  label="loginId"
                  type="text"
                  name="loginId"
                  value={loginId}
                  color = "white"
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="answer"
                  label="Answer"
                  type="text"
                  id="answer"
                  value={answer}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="newPassword"
                  label="Enter new password"
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={this.handleChange}
                  className = {classes.TextField}
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
     
    );
  }
}

export default withStyles(styles)(ForgotPassword);
