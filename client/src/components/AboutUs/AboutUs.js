import React, { useEffect } from "react";
import M from "materialize-css";
export default function AboutUs() {
  useEffect(() => {
    var elems = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(elems);
  });
  return (
    <div className="container section scrollspy" id="about-us">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti harum
        doloribus, optio sequi laboriosam est debitis aspernatur, provident
        nulla similique, quisquam recusandae et vel rerum voluptatum. Nemo
        exercitationem nisi laborum.
      </p>
    </div>
  );
}
