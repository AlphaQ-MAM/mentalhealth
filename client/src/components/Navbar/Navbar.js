import React, { useEffect } from "react";
import NavLinks from "./NavLinks";
import "./Navbar.css";
export default function Navbar(props) {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        document.getElementById("navbar").style.background = "#c9e4f0";
      } else {
        document.getElementById("navbar").style.background = "none";
      }
    }
  });
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper" id="navbar">
        <div className="container">
          <a href="#" className="brand-logo blue-text">
            Logo
          </a>
          <a
            href="#"
            className="sidenav-trigger blue-text"
            data-target={props.id}
          >
            <i className="material-icons">menu</i>
          </a>
          <NavLinks name="Sign Up" loc="" />
          <NavLinks name="Login" loc="" />
          <NavLinks name="About Us" loc="#about-us" />
        </div>
      </nav>
    </div>
  );
}
