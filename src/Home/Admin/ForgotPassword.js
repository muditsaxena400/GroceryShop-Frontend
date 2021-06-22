import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { forgotPassword } from '../Service/ForgotPasswordService'

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
        console.log(res)
    })
  };

  render() {
    const { loginId, answer, newPassword } = this.state;
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="">
          <Avatar className="">
            
          </Avatar>
          <Typography component="h1" variant="h5">
            New Password
          </Typography>
          <form className="" noValidate onSubmit={this.handleSubmit}>
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
                  onChange={this.handleChange}
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
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className=""
              size="medium"
            >
              Done
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default ForgotPassword;
