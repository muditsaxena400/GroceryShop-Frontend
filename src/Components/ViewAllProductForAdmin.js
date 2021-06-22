import React,{ Component } from 'react'
import { viewAllProductService } from '../Service/ViewAllProductService'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteProduct } from '../Service/DeleteProductService';
import Product from '../ModalComponent/Product'
import { updateProduct } from '../Service/UpdateProductService'
import './CSS/cards.css'
import AdminNavbar from './AdminNavbar';

class ViewAllProductForAdmin extends Component {

    constructor() {
        super()
        this.state = {
            productId:0,
            name:'',
            description:'',
            price:0,
            quantity:0,
            category:'',
            open: undefined,
            prod:[],
            products:[],
            imgUrl: "",
            errorMsg: '',
        }
    }

    componentDidMount() {
       
        viewAllProductService().then((res) => {
            this.setState ({products: res})
        })
       
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    handleClose = () => {
        this.setState( {
          open: false,
          errorMsg:'',
        })
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
    
       const product = new Product(
           this.state.productId,
           this.state.name,
           this.state.description,
           this.state.quantity,
           this.state.price,
           this.state.category,
           this.state.imgUrl
       )

       let prod = {
        productId: this.state.productId,
        name: this.state.name,
        description: this.state.description,
        quantity: this.state.quantity,
        price: this.state.price,
        category: this.state.category,
        imgUrl: this.state.imgUrl
       }
    
       updateProduct(product)
        .then((res) =>{
            this.setState({products: this.state.products, res});
            console.log(res)
            const index = this.state.products.findIndex(emp => emp.productId === prod.productId),
        copyProducts = [...this.state.products] 
        copyProducts[index] = prod;

        this.setState({products: copyProducts});
        this.setState({open: false})
        })
        .catch((err) => {
            const error= err.message.substring(
            err.message.indexOf("=") + 1,
            err.message.indexOf("]"));
            this.setState({errorMsg: error})
          }
      )
        
    };

    handleDeleteUser = (productId) => {

        deleteProduct(productId);
    
        let tempProducts = [];
        tempProducts = this.state.products;

        tempProducts = tempProducts.filter((product) => {
            return product.productId !== productId
        })

        this.setState({
            products: tempProducts
        })             
    }

    handleUpdateUser = (p) => {

        this.setState({
            open: true,
            productId:p.productId,
            name:p.name,
            description:p.description,
            price:p.price,
            quantity:p.quantity,
            category:p.category,
            imgUrl:p.imgUrl,
        })         
    }

    buttonStyle={
        height: 150 
    }
    render()
    {
        return(
            <div 
            style = {{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1562347810-18a0d370ba36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZydWl0c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                    opacity: 0.9, 
              }}>
                <div style={this.buttonStyle}>
                <AdminNavbar/>
                </div>
                {this.state.products.map((product, index) => {
                    return (
                        <div className="cardStyle">
                    <Card  variant="outlined" key ={index}>
                    <img src={product.imgUrl} height="200px" width="350px" alt={product.name}/>
                    <CardContent>
                        <Typography  variant="h5"  gutterBottom>{product.productId}   {product.name}</Typography>
                        <Typography  component="h2">{product.description}</Typography>
                        <Typography  color="textSecondary">Rs.{product.price}</Typography>
                        <Typography variant="body2" component="p">Stock: {product.quantity}<br/></Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" color="primary" onClick={() => {this.handleDeleteUser(product.productId)}}>Delete</Button>
                        <Button size="small" variant="outlined" color="primary" onClick={() => {this.handleUpdateUser(product)}}>Update</Button>      
                        
                         <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Product</DialogTitle>
                <DialogContent>
                  <TextField
                    margin="dense"
                   // id="productId"
                    name="productId"
                    label="Product Id"
                    type="number"
                    value={this.state.productId}
                    onChange={this.handleChange}
                    //fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="name"
                    name="name"
                    label="Product name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    //fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="description"
                    name="description"
                    label="Product description"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChange}
                    //fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="price"
                    name="price"
                    label="Product price"
                    type="number"
                    value={this.state.price}
                    onChange={this.handleChange}
                    //fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="quantity"
                    name="quantity"
                    label="Product quantity"
                    type="number"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                    //fullWidth
                  />
                  <TextField
                    margin="dense"
                    id="category"
                    name="category"
                    label="Product category"
                    type="text"
                    value={this.state.category}
                    onChange={this.handleChange}
                    //fullWidth
                  />

                  <TextField
                    margin="dense"
                    id="imgUrl"
                    name="imgUrl"
                    label="Image URL"
                    type="text"
                    value={this.state.imgUrl}
                    onChange={this.handleChange}
                    //fullWidth
                  />
                </DialogContent>
                <p  style = {{color:'red'}}>{this.state.errorMsg !== "" ? this.state.errorMsg : null}</p>

                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>            
                    <Button onClick={this.handleSubmit} color="primary">
                      Update
                    </Button>
                </DialogActions>
              </Dialog>            
                    </CardActions>
                    </Card>
                    </div>
                )})}
            </div>
        )
    }
}

export default ViewAllProductForAdmin