import React, { Component } from "react";
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
    id:0,
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    category: ''
    
  };

  state = { ...this.initialState };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

   const product = new Product(
       this.state.id,
       this.state.name,
       this.state.description,
       this.state.quantity,
       this.state.price,
       this.state.category
   )


   addProduct(product)
    .then((res) =>{
        this.setState({...this.initialState});
        console.log(res)
    })
    .catch((err) => {

    })
  };

  render() {
    const { name,description, price, quantity, category } = this.state;
   
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="">
         
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
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="description"
                  label="description"
                  type="text"
                  id="description"
                  autoComplete="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="quantity"
                  label="Quantity"
                  type="number"
                  id="quantity"
                  //autoComplete="description"
                  value={quantity}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="price"
                  label="Price"
                  type="number"
                  id="price"
                  autoComplete="price"
                  value={price}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  
                  name="category"
                  label="Category"
                  type="text"
                  id="category"
                  autoComplete="category"
                  value={category}
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
              Add Product
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default AddProduct;
