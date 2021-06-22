import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Product from '../ModalComponent/Product'
import { addProduct } from '../Service/AddProductService'
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from "@material-ui/core/styles";
import AdminNavbar from "./AdminNavbar";
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
    marginTop: 0,
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
      paddingTop: 0,
  },
  colour: {
    color: 'red',
    float: 'right'
  },
});
class AddProduct extends Component {

  initialState = {
    id:0,
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    category: '',
    imgUrl: '',
    errorMsg: ''
    
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
       this.state.category,
       this.state.imgUrl
   )


   addProduct(product)
    .then((res) =>{
        this.setState({...this.initialState});
        alert("Product Added Successfully");
        console.log(res)
    })
    .catch((err) => {
      const error= err.message.substring(
        err.message.indexOf("=") + 1,
        err.message.indexOf("]"));
        this.setState({errorMsg: error})
    })
  };
  handleCategory=(e)=>{
    this.setState({category:e.target.value})
  }

  
  buttonStyle = {
    height: 150
  }

  render() {
    const { name,description, price, quantity, category,imgUrl } = this.state;
    const classes  = this.props.classes;
    return (
  
      <div style={this.buttonStyle}>
        <AdminNavbar/>
        <div className = {classes.paper}
        
        style = {{
          backgroundImage:
              "url(https://images.unsplash.com/photo-1558612846-ec0c7ef23645?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNob2NvbGF0ZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              opacity: 0.9, 
        }}
        >
         
          <Typography component="h1" variant="h3" align = "center" color = "default" marginTop = "20px" className = {classes.Typography}>
            Add product
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Product name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  label="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  value={description}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                 variant="outlined"
                 required
                 fullWidth
                 id="price"
                 label="price"
                 name="price"
                 type="number"
                 autoComplete="price"
                 value={price}
                 onChange={this.handleChange}
                 className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="quantity"
                  label="quantity"
                  name="quantity"
                  type="number"
                  autoComplete="quantity"
                  InputProps={{ inputProps: { min: 1 } }}
                  value={quantity}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="imgUrl"
                  label="image Url "
                  name="imgUrl"
                  type="text"
                  autoComplete="imgUrl"
                  value={imgUrl}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                />
              </Grid>

              <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="category"
                  label="category "
                  name="category"
                  type="text"
                  autoComplete="category"
                  value={category}
                  onChange={this.handleChange}
                  className = {classes.TextField}
                >
                  <MenuItem value="Snack">
                    Snack
                  </MenuItem>
                  <MenuItem value="Drinks">
                    Drinks
                  </MenuItem>
                  <MenuItem value="Packaged Food">
                    Packed Food
                  </MenuItem>
                  <MenuItem value="Household Care">
                    Household Care
                  </MenuItem>
                  <MenuItem value="Personal Care">
                    Personal Care
                  </MenuItem>
                  <MenuItem value="Dairy">
                    Dairy
                  </MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <p className={classes.colour}>{this.state.errorMsg !== "" ? this.state.errorMsg : null}</p>
            <Button  type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className= {classes.submit}
             size="large"

            >
              Add Product
            </Button>
          </form>
        </div>
        </div>
    );
  }
}

export default  withStyles(styles)(AddProduct);
