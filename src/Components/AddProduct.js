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
//import BossContainer from "../BossContainer";
import { Link } from "react-router-dom";
import Product from '../ModalComponent/Product'
import { addProduct } from '../Service/AddProductService'
//import User from "../../Models/User";

class AddProduct extends Component {

  initialState = {
    productName: "",
    productDescription: '',
    productPrice: 0,
    productCategory: '',
    productQuantity: 0
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);

    // const user = new User(
    //   this.state.email,
    //   this.state.password,
    //   this.state.role
    // );
   // SignInService sign = new SignInService();

   const product = new Product(
       this.state.productName,
       this.state.productPrice,
       this.state.productQuantity,
       this.state.productDescription,
       this.state.productCategory
   )


   addProduct(product)
    .then((res) =>{
        this.setState({...this.initialState});
        console.log(res)
    })
    .catch((err) => {

    })

   // this.setState({ ...this.initialState });
  };

  render() {
    const { productName,productDescription, productPrice, productQuantity, productCategory } = this.state;
    // console.log(this.props);
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="">
          <Avatar className="">
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Add product
          </Typography>
          <form className="" noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  id="name"
                  label="Product name"
                  name="productName"
                  type="text"
                  autoComplete="name"
                  value={productName}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="productDescription"
                  label="description"
                  type="text"
                  id="password"
                  autoComplete="description"
                  value={productDescription}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="productQuantity"
                  label="Quantity"
                  type="number"
                  id="quantity"
                  //autoComplete="description"
                  value={productQuantity}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="productPrice"
                  label="Price"
                  type="number"
                  id="price"
                  autoComplete="price"
                  value={productPrice}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="productCategory"
                  label="Category"
                  type="text"
                  id="category"
                  autoComplete="category"
                  value={productCategory}
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className=""
              size="large"
            >
              Add
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/admin/product/add" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default AddProduct;
