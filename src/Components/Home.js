import React, {useState} from "react";
import { UncontrolledCarousel, Container, Row, Col } from "reactstrap";
import CustomerHeader from './Header/CustomerHeader';
import ViewAllProduct from "./ViewAllProducts";
import BookProducts from './BookProducts';
import Grid from '@material-ui/core/Grid';
import Footer  from './Footer';
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
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


function Home () 
{
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  }
  return(
    <div>
          <CustomerHeader/>
    
       
          {page === PAGE_PRODUCTS && (
           
      <ViewAllProduct cart={cart} setCart={setCart} />
      
    )}
         
         
  {page === PAGE_CART && (
    <BookProducts cart={cart} setCart={setCart} />
  )}
        
 
  <Footer/>

    </div>
      )
 

}

export default Home;