import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AppUser from '../ModalComponent/AppUser'
import User from '../ModalComponent/User'
import { addUser } from '../Service/AddUserService'
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
    width: "30%", // Fix IE 11 issue.
    marginTop: 80,
    marginLeft: 10,

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  TextField:
  {
    backgroundColor: 'white',
    width: 250,
    marginBottom: 0,

  },
  Typography:
  {
      paddingTop: 10,

  },
  Grid:
  {
    width: "100%", // Fix IE 11 issue.
    marginTop: -50,
    marginLeft: 10,
  },
  linkColour: {
    color: 'blue'
  },
  colour: {
    color: 'red'
  },
});

class AddProduct extends Component {

  initialState = {
    firstName: '',
    lastName:'',
    loginId:'', 
    mobileNo:0, 
    email:'', 
    question:'', 
    answer:'', 
    password:'',
    errorMsg: ''
    
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleQuestion = (e) => {
    this.setState({question:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const appUser = new AppUser (
        this.state.password
    )

    const user = new User(
       this.state.firstName,
       this.state.lastName,
       this.state.loginId,
       this.state.mobileNo,
       this.state.email,
       this.state.question,
       this.state.answer,
       appUser
   )

   addUser(user)
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
        }
    )
  };

  render() {
    const { firstName, lastName, loginId, email, question, answer, password } = this.state;
    const classes  = this.props.classes;
    return (
        <div className={classes.paper}
        style = {{
          backgroundImage:
              "url(https://image.freepik.com/free-photo/isolated-shipping-paper-boxes-inside-blue-shopping-cart-trolley-tablet-isolated-blue_50039-2474.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              opacity: 0.9, 
        }}
        >
          
          
          <Typography component="h1" variant="h2" align = "center" color = "default" marginTop = "20px" className = {classes.Typography}>
            Register User
          </Typography>

          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2} className = {classes.Grid}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  id="firstName"
                  label="First name"
                  name="firstName"
                  type="text"
                  autoComplete="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="lastName"
                  label="Last name"
                  type="text"
                  id="lastName"
                  autoComplete="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="loginId"
                  label="loginId"
                  type="text"
                  id="loginId"
                  autoComplete="loginId"
                  value={loginId}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  inputProps={{ maxLength: 10, minLength: 10 }}
                  name="mobileNo"
                  label="Mobile number"
                  type="number"
                  id="mobileNo"
                  autoComplete="mobileNo"
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="email"
                  label="Email address"
                  type="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
                 <Grid item xs={12}>
              <TextField
                  id="question"
                  select
                  label="Question"
                  value={question}
                  onChange={this.handleQuestion}
                  style = {{width: 250}}
                  className = {classes.TextField}
                >
                  <MenuItem value="What is you pet name?" className = {classes.TextField}>
                  What is you pet name?
                  </MenuItem>
                  <MenuItem value="What was your schools's name?" className = {classes.TextField}>
                  What was your schools's name?
                  </MenuItem>
                  <MenuItem value="Which mobile do you have?" className = {classes.TextField}>
                  Which mobile do you have?
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="answer"
                  label="Answer"
                  type="text"
                  id="answer"
                  autoComplete="answer"
                  value={answer}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  value={password}
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
              Register
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/grocery/login"  variant="body2">
                  <Typography className={classes.linkColour}>
                  Already have an account? Sign in
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      
    );
  }
}

export default withStyles(styles)(AddProduct);
