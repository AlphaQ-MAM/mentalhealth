import React, { useEffect } from "react";
import M from "materialize-css";
export default function Carousal() {
  useEffect(() => {
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, { indicators: false, interval: 3000 });
  });
  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img
            alt=""
            src="http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg"
          />
          <div className="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <img
            alt=""
            src="https://million-wallpapers.com/wallpapers/1/85/17779089886909635971/river-landscape-cool-nice-nature-landscape-forest-autumn.jpg"
          />
          <div className="caption left-align">
            <h3>Left Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <img
            alt=""
            src="http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-wallpapers-1.jpg"
          />
          <div className="caption right-align">
            <h3>Right Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <img alt="" src="https://lorempixel.com/580/250/nature/4" />
          <div className="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
}
