import React from "react";
import "./Footer.css";
import { NavLink as Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook'; 
import TwitterIcon from '@material-ui/icons/Twitter';
const Footer = () => {
  return (
    <footer>
      <div class="row">
        <div class="col">
          <img src="https://jspmrscoe.edu.in/images/rscoe.png" class="logo" />
        </div>
        <div class="col">
          <h3>
            OUR CAMPUS
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <div>
          <Link activeClassName="active" to="/login" activeStyle>
            <button type="button">login</button>
          </Link>
        </div>
          <p>Tathwade Campus</p>
          <p>Hadapsar Campus</p>
          <p>Narhe Campus</p>
          <p>Wagholi Campus</p>
          <p>Bavdhan Campus</p>
          <p>Barshi Campus</p>
        </div>
        <div class="col">
          <h3>
            GET IN TOUCH
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <p class="address">
            Address:Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033
          </p>
          <p class="email-id">Email:principal@jspmrecoe.edu.in</p>
        </div>
        <div class="col">
          <h3>
            LINKS
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="http://localhost:8800/api/posts/614c4ccce1d377fbe79cbfd8">Home</a>
            </li>
            <li>
              <a href="/feed">Feed</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Contacts</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="social-icons">
            <FacebookIcon/>
            <TwitterIcon/>
            
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-pinterest"></i>
          </div>
        </div>
        <div class="row">
          <hr />
          <p class="copyright">Alumni Project © 2021 - All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
