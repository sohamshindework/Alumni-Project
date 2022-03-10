import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-header">
        <div>
          <img
            classname="logocss"
            src="https://jspmrscoe.edu.in/images/rscoe.png"
            alt="logo"
          ></img>
        </div>
        <div>
          <h1>Alumni Portal</h1>
        </div>
        
      </div>
      <div className="navBar" id="nav">
        <Link activeClassName="active" to="/" activeStyle>
          Home
        </Link>
        <Link activeClassName="active" to="/feed" activeStyle>
          Feed
        </Link>
        <Link activeClassName="active" to="/findAlumni" activeStyle>
          Find Alumni
        </Link>
        <Link activeClassName="active" to="/profile" activeStyle>
          Profile
        </Link>
      </div>
    </>
  );
};

export default Navbar;
