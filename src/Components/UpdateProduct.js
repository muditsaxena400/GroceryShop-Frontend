import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import Product from '../ModalComponent/Product'
import { updateProduct } from '../Service/UpdateProductService'

class UpdateProduct extends Component{

  state = {
    productId:0,
    name:'',
    description:'',
    price:0,
    quantity:0,
    category:'',
    open: undefined
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClose = () => {
    this.setState = {
      open: false
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

   const product = new Product(
       this.state.productId,
       this.state.name,
       this.state.description,
       this.state.quantity,
       this.state.price,
       this.state.category
   )

   updateProduct(product)
    .then((res) =>{
        this.setState({...this.initialState});
        console.log(res)
    })
  };

  render(){
    const { productId, name,description, price, quantity, category } = this.props;

    return (
      <div>
        <Dialog open={true} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Product</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="productId"
              name="productId"
              label="Product Id"
              type="number"
              value={productId}
              onChange={this.handleChange}
              //fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              name="name"
              label="Product name"
              type="text"
              value={name}
              onChange={this.handleChange}
              //fullWidth
            />
            <TextField
              margin="dense"
              id="description"
              name="description"
              label="Product description"
              type="text"
              value={description}
              onChange={this.handleChange}
              //fullWidth
            />
            <TextField
              margin="dense"
              id="price"
              name="price"
              label="Product price"
              type="number"
              value={price}
              onChange={this.handleChange}
              //fullWidth
            />
            <TextField
              margin="dense"
              id="quantity"
              name="quantity"
              label="Product quantity"
              type="number"
              value={quantity}
              onChange={this.handleChange}
              //fullWidth
            />
            <TextField
              margin="dense"
              id="category"
              name="category"
              label="Product category"
              type="text"
              value={category}
              onChange={this.handleChange}
              //fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Link to="/admin/product/add" variant="body2" >
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>            
              <Button onClick={this.handleSubmit} color="primary">
                Update
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
  
      </div>
      );
    }
  
  }

  export default UpdateProduct