import React, { useEffect } from "react";
import "./Carousel.css";
import M from "materialize-css";
export default function Carousal() {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems);
  });
  return (
    <div className="carousel section">
      <a className="carousel-item" href="#one!">
        <img
          src="https://i.ibb.co/j8YRFS1/nodp.png"
          height="200"
          width="400"
          style={{ objectFit: "cover" }}
        />
      </a>
      <a className="carousel-item" href="#two!">
        <img
          src="https://i.ibb.co/j8YRFS1/nodp.png"
          height="200"
          width="400"
          style={{ objectFit: "cover" }}
        />
      </a>
      <a className="carousel-item" href="#three!">
        <img
          src="https://i.ibb.co/j8YRFS1/nodp.png"
          height="200"
          width="400"
          style={{ objectFit: "cover" }}
        />
      </a>
      <a className="carousel-item" href="#four!">
        <img
          src="https://i.ibb.co/j8YRFS1/nodp.png"
          height="200"
          width="400"
          style={{ objectFit: "cover" }}
        />
      </a>
      <a className="carousel-item" href="#five!">
        <img
          src="https://i.ibb.co/j8YRFS1/nodp.png"
          height="200"
          width="400"
          style={{ objectFit: "cover" }}
        />
      </a>
    </div>
  );
}
