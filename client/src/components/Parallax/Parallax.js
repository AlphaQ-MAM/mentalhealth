import React, { useEffect } from "react";
import M from "materialize-css";
export default function Parallax() {
  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems);
  });
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img
          src="https://www.incimages.com/uploaded_files/image/1940x900/shutterstock_619960997_360000.jpg"
          alt=""
          className="responsive-img"
        />
      </div>
    </div>
  );
}
