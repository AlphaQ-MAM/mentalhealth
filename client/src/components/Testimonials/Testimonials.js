import React, { useEffect } from "react";
import "./Testimonials.css";
import M from "materialize-css";
export default function Carousal() {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems);
  });
  return (
    <div className="carousel section">
      <a className="carousel-item" href="#one!">
        <img alt="" src="https://i.ibb.co/j8YRFS1/nodp.png" />
        <h3>Someone</h3>
      </a>
      <a className="carousel-item" href="#two!">
        <img alt="" src="https://i.ibb.co/j8YRFS1/nodp.png" />
        <h3>Someone</h3>
      </a>
      <a className="carousel-item" href="#three!">
        <img alt="" src="https://i.ibb.co/j8YRFS1/nodp.png" />
        <h3>Someone</h3>
      </a>
      <a className="carousel-item" href="#four!">
        <img alt="" src="https://i.ibb.co/j8YRFS1/nodp.png" />
        <h3>Someone</h3>
      </a>
      <a className="carousel-item" href="#five!">
        <img alt="" src="https://i.ibb.co/j8YRFS1/nodp.png" />
        <h3>Someone</h3>
      </a>
    </div>
  );
}
