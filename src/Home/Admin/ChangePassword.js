import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
//import Box from "@material-ui/core/Box";
//import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
//import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { changePassword } from '../Service/ChangePasswordService'

class ChangePassword extends Component {

  initialState = {
    loginId: "",
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
    })
  };

  render() {
    const { loginId, oldPassword, newPassword } = this.state;
    
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
                  name="newPassword"
                  label="New password"
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

export default ChangePassword;
