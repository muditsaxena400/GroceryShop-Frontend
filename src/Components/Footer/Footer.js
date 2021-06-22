import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import "./FooterStyle.css";

const Footer = () => {
  const footerStyle = {
    color: "#fff",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly",
  };
  return (
    <>
      <footer>
        <section style={footerStyle} className="p-3">
          <div>
            <Link to="/about/us" ><h3>About Us</h3></Link>
            
          </div>
          <div>
            <h3>Write to us</h3>
            <ul className="list-unstyled">
              <li>
                Write to us at: <br />
                <Link>customercare@capgemini.com</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Call Us</h3>
            <ul className="list-unstyled">
              <li>1800-899-9991</li>
            </ul>
          </div>
          <div>
            <Link to="/contact/us" ><h3>Contact Us</h3></Link>
            <ul className="list-unstyled">
              <li>
                74/2 Ring Road, BTM Complex,
                <br />
                Delhi,110001
              </li>
            </ul>
          </div>
          <div>
            <h3>Social Media</h3>
            <ul className="list-unstyled d-flex">
              <li style={{ margin: "0 20px" }}>
                <FacebookIcon fontSize="large" />
              </li>
              <li style={{ margin: "0 20px" }}>
                <InstagramIcon fontSize="large" />
              </li>
              <li style={{ margin: "0 20px" }}>
                <TwitterIcon fontSize="large" />
              </li>
              <li style={{ margin: "0 20px" }}>
                <LinkedInIcon fontSize="large" />
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <div className="text-white text-right p-3">
          <p>
            &copy;{new Date().getFullYear()} Nature Cart | All rights
            reserved | Terms of Service | Privacy
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
