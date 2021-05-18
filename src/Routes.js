import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import App from "./App";
//import Home from "./components/Home";
//import PageNotFound from "./components/PageNotFound";
//import About from "./components/About";
import SignIn from "./Components/SignIn";
//import SignUp from "./components/SignUp";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/grocery/login" component={SignIn} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
