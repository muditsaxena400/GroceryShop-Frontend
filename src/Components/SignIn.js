import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { signin } from '../Service/SignInService'
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
  linkColour: {
    color: 'blue'
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
class SignIn extends Component {

  initialState = {
    loginId: "",
    password: "",
    role: "customer",
    
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
   
   signin(this.state.loginId, this.state.password)
    .then((res) =>{
        this.setState({...this.initialState});
        console.log(res)
        var cart = []
         localStorage.setItem("id", res.userId);
         localStorage.setItem("loginId", res.loginId);
         localStorage.setItem("firstName", res.firstName);
         localStorage.setItem("lastName", res.lastName);
         localStorage.setItem("role", res.appUser.userType);
         localStorage.setItem("mobileNo", res.mobileNo);
         localStorage.setItem("email", res.email);
         localStorage.setItem("cart", JSON.stringify(cart))

         if(localStorage.getItem("role") === "Customer")
         {
          this.props.history.push("/customer/product/view/all")
         }
         else
         {
          this.props.history.push("/Admin/Home");
         }
         
         
    }) 
    .catch((err) => {
      const error= err.message.substring(
        err.message.indexOf("=") + 1,
        err.message.indexOf("]"));
        this.setState({errorMsg: error})
    })

    this.setState({ ...this.initialState });
  };

  render() {
    const { loginId, password } = this.state;
    const classes  = this.props.classes;
    return (
        <div className = {classes.paper}
     
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
          <Typography component="h1" variant="h1" align = "center" color = "default">
            Sign In
          </Typography>
          <form className = {classes.form} noValidate onSubmit={this.handleSubmit}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  className = {classes.TextField}
                  margin = "normal"
                  id="loginId"
                  label="loginId"
                  name="loginId"
                  value={loginId}
                  onChange={this.handleChange}
                />
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  className = {classes.TextField}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={this.handleChange}
                />
            <p className={classes.colour}>{this.state.errorMsg !== "" ? this.state.errorMsg : null}</p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className= {classes.submit}
              size="large">
                
               Sign In
            </Button>
            <Grid container>
              <Grid item  justify="flex-start">
                <Link to="/grocery/forgot/password" variant="body2" color = "secondary">
                <Typography className={classes.linkColour}>
                  Forgot password
                  </Typography>
                </Link><br/>
                <Link to="/grocery/register" variant="body2" color = "secondary">
                <Typography className={classes.linkColour}>
                  New User? Create an Account.
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
    );
  }
}

export default withRouter(withStyles(styles)(SignIn));
