import React, { useEffect } from "react";
import M from "materialize-css";
export default function SideNav(props) {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  });
  return (
    <div>
      <ul className="sidenav sidenav-close" id={props.id}>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  );
}
