import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./Components/SignIn";
import AddUser from "./Components/AddUser";
import ViewAllProduct from "./Components/ViewAllProducts";
import ForgotPassword from "./Components/ForgotPassword";
import ChangePassword from "./Components/ChangePassword";
import UpdateProduct from "./Components/UpdateProduct";
import ViewAllBookingHistory from "./Components/ViewBookingHistoryForAdmin";
import ViewBookingHistoryForAdmin from './Components/ViewBookingHistoryForAdmin';
import MainHome from './Components/Welcome/MainHome'
import ButtonBases2 from './Components/AdminHome';
import CustomerNavbar from "./Components/CustomerNavbar";
import ViewAllProductForAdmin from './Components/ViewAllProductForAdmin';
import BookProducts from "./Components/BookProducts";
import ButtonBases1 from "./Components/AdminProductOperation";
import AddProduct from './Components/AddProduct';
import VIewUserDetails from './Components/VIewUserDetails';
import About from './Components/AboutUs'
import Contact from './Components/ContactUs'

const Routes = () => { 
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={MainHome} />
        <Route path="/Home" exact component={CustomerNavbar} />
        <Route path="/Admin/Home" exact component={ButtonBases2} />
       
        <Route path="/admin/product" exact component={ButtonBases1} />
        <Route path="/user/view" exact component={VIewUserDetails} />
        <Route path="/grocery/login" exact component={SignIn} />
        <Route path="/admin/product/add" exact component={AddProduct} />
        <Route path="/grocery/cart" exact component={BookProducts} />
        <Route path="/grocery/register" exact component={AddUser} />
        <Route path="/customer/product/view/all" exact component={ViewAllProduct} />
        <Route path="/grocery/forgot/password" exact component={ForgotPassword} />
        <Route path="/grocery/change/password" exact component={ChangePassword} />
        <Route path="/admin/product/update"   exact component={UpdateProduct} />
        <Route path="/admin/product/view/all" exact component={ViewAllProductForAdmin} />
        <Route path="/admin/view/booking/history" exact component={ViewAllBookingHistory} />
        <Route path="/customer/changePassword" exact component={ChangePassword} />
        <Route path="/admin/bookhistory" exact component={ViewBookingHistoryForAdmin} />
        <Route path="/about/us" exact component={About}/>
        <Route path="/contact/us" exact component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
