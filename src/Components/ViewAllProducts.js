import React,{ useEffect, useState } from 'react'
import { viewAllProductService } from '../Service/ViewAllProductService'
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import './CSS/cards.css'
import CustomerNavbar from './CustomerNavbar';
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'; 
import Footer from './Footer/Footer'

const ALL = '';
const SNACKS = 'Snacks';
const DRINKS = 'Drinks';
const PACKAGED_FOOD = 'Packaged Food';
const HOUSEHOLD_CARE = 'HouseHold Care';
const PERSONAL_CARE = 'Personal Care';
const DAIRY = 'Dairy';
  
const items = [
    {
      src: "https://www.bigbasket.com/media/uploads/banner_images/HP_EP_Summer-Store_1130x400_26thMar21.jpg",
      altText: "Slide 1",
      caption: "",
      header: "",
      key: "1",
    },
    {
      src: "https://www.bigbasket.com/media/uploads/banner_images/Green_Banganapilli_DT_5_1130x400_9th-24th.jpg",
      altText: "Slide 2",
      caption: "",
      header: "",
      key: "2",
    },
    {
      src: "https://www.bigbasket.com/media/uploads/banner_images/HP_EP_MidMonthSale_1130x400_15thMay21.jpg",
      altText: "Slide 3",
      caption: "",
      header: "",
      key: "3",
    }
  ];
  const images = [
    {
      url: 'https://static01.nyt.com/images/2019/05/15/smarter-living/processed_snacks/processed_snacks-superJumbo-v2.jpg',
      title: 'Snacks',
      width: '33%',
      height:'15%',
      value: SNACKS
    },
    {
      url: 'https://www.caffeineinformer.com/wp-content/uploads/soft-drinks.jpg',
      title: 'Drinks',
      width: '33%',
      value: DRINKS
    },
    {
      url: 'https://cdn.thewirecutter.com/wp-content/uploads/2020/06/noodles-lowres-8607.jpg',
      title: 'Pack Food',
      width: '33%',
      value: PACKAGED_FOOD
    },
    
    {
      url: 'https://www.tabsanalytics.com/hubfs/2017_Webinars/2017%20Household%20Care/household%20care%20blog%20post.jpg',
      title: 'House Care',
      width: '33%',
      value: HOUSEHOLD_CARE
    },
    {
      url: 'https://www.unilever.com/Images/global-positive-beauty-ROW-FINAL_tcm244-559851_w650.jpg',
      title: 'PersonalCare',
      width: '33%',
      value: PERSONAL_CARE
    },
    {
      url: 'https://pmrpressrelease.com/wp-content/uploads/2018/11/Dairy-Packaging.jpeg',
      title: 'Dairy',
      width: '33%',
      value: DAIRY
    },
  ];
  
  const useStyles = makeStyles((theme) => ({
    root: {
        position:'center',
      display: 'center',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', 
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left:0,
      right:0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 20,
      right: 20,
      top: 20,
      bottom: 20,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 20,
      right: 20,
      top: 20,
      bottom: 20,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
    divHeight: {
      position: 'relative',
      bottom: '2px',
      marginTop: '30px'
    },
    search: { 
   
      position: 'relative',
      //borderRadius: theme.shape.borderRadius,
      border: '1px',
      borderStyle:'solid',
      borderColor: 'grey',
      borderRadius: '5px',
      backgroundColor: fade(theme.palette.common.white, 0.85),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft:  theme.spacing(2),
      width: '450%',
      height:'40px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '500px',
      },
      marginTop:'20px',
      marginBottom:'15px',
      left: '28%',
      elevation:'5',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 5,
      
    },
    searchIcon: {                                                     //search
      
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    inputRoot: {                                                      //search
      color: 'inherit',
    },
    inputInput: {                                                    //search
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
  
  }));
export default function ViewAllProducts() {

    const classes = useStyles()
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [category, setCategory] = useState(ALL);

    useEffect(() => {
        async function fetchData() {
            viewAllProductService().then((res) => {
                setProducts(res)
            })       
        }
        
        fetchData()
    }, []);

    const updateSearch = (event) => {
    
        setCategory(ALL)
        const productList = [...products]
        let updatedList;
        console.log(event.target.value,"value")
        updatedList = productList.filter(product => {
            if(product.name.toLowerCase().includes(event.target.value.toLowerCase())){
                
                return product;
            }
            else{
                return null
            }
        })
        setSelectedProduct(updatedList)
    }

    const addToCart = (product) => {
      
      let initialCart = JSON.parse(localStorage.getItem("cart") || "[]")
       console.log(initialCart)
        let itemInCart = initialCart.find(
          (item) => product.name === item.name
        );
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          itemInCart = {
            ...product,
            quantity: 1,
          };
          initialCart.push(itemInCart);
        }
        localStorage.setItem("cart",JSON.stringify(initialCart))
    };

    const getProductsInCategory = () => {
        console.log(category)
        return products.filter(
          (product) => product.category === category
        );
    };

    let renderProduct

    if(selectedProduct.length>0)
    {
        renderProduct = 
        <div>
            {selectedProduct.map((product, index) => {
            return (
            <div className="cardStyle">
                    <Card  variant="outlined" key={index}>
                        <img src={product.imgUrl} height="200px" width="350px" alt={product.name}/>
                    <CardContent>
                        <Typography  variant="h5"  gutterBottom>{product.name}</Typography>
                        <Typography  component="h2">{product.description}</Typography>
                        <Typography  color="textSecondary">Rs.{product.price}</Typography>
                        <Typography variant="body2" component="p">Only {product.quantity} left<br/></Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" color="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                    </CardActions>
                    </Card>
            </div>)
            })}
        </div>
    }
    else
    {
    renderProduct = 
    <div>
        {products.map((product, index) => {
            return (
                <div className = "cardStyle">
                    <Card  variant="outlined" key={index}>
                        <img src={product.imgUrl} height="200px" width="350px" alt={product.name}/>
                    <CardContent>
                        <Typography  variant="h5"  gutterBottom>{product.name}</Typography>
                        <Typography  component="h2">{product.description}</Typography>
                        <Typography  color="textSecondary">Rs.{product.price}</Typography>
                        <Typography variant="body2" component="p">Only {product.quantity} left<br/></Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" color="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                    </CardActions>
                    </Card>
                </div>
        )})}
    </div>
    }

    let renderProductCategory=[]

    if(category !== ALL)
    {
        renderProductCategory = 
        <div>
        {getProductsInCategory().map((product, index) => {
        return (
        <div className = "cardStyle">
           
                <Card  variant="outlined" key={index}>
                    <img src={product.imgUrl} height="200px" width="350px" alt={product.name}/>
                <CardContent>
                    <Typography  variant="h5"  gutterBottom>{product.name}</Typography>
                    <Typography  component="h2">{product.description}</Typography>
                    <Typography  color="textSecondary">Rs.{product.price}</Typography>
                    <Typography variant="body2" component="p">Only {product.quantity} left<br/></Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined" color="primary" onClick={() => addToCart(product)}>Add to cart</Button>
                </CardActions>
                </Card>
            </div>
        
        )})}
    </div>
    }

    return(
        <div  style = {{
      backgroundImage:
          "url(https://image.freepik.com/free-photo/healthy-lunch-go-packed-lunch-box_1220-4541.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          opacity: 0.9, 
    }}>
          <CustomerNavbar/>
            <header>
              
                    <Row md="12">
                        <Col md="11" className="mx-auto">
                            <UncontrolledCarousel items={items} />
                        </Col>
                    </Row>
            
            <div display="inline-block">
            {images.map((image) => (
                <ButtonBase focusRipple key={image.title} className={classes.image} onClick={() => setCategory(image.value)} focusVisibleClassName={classes.focusVisible} style={{width: image.width,}}>
                <span className={classes.imageSrc} style={{ backgroundImage: `url(${image.url})`,}}/>
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography component="span" variant="subtitle1" color="initial" className={classes.imageTitle}>
                    {image.title}
                    <span className={classes.imageMarked} />
                    </Typography>
                </span>
                </ButtonBase>
            ))}
            </div>
            </header>
      <div className={classes.search} >                               
        <div className={classes.searchIcon}>
                <SearchIcon  position="absolute" />
            </div>
              <InputBase
                placeholder="Search…your Product"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,  
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={updateSearch}
              />
          </div>
        <div>
                {category === ALL ? renderProduct : renderProductCategory}                 
      </div>   

            <footer className={classes.divHeight}>
      <Footer/>
      </footer>
        </div>
    )
    
}