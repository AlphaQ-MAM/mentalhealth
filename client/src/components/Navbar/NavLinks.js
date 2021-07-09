import React from "react";
export default function NavLinks({ name, loc }) {
  return (
    <ul className="right hide-on-med-and-down">
      <li className="waves-effect">
        <a className="blue-text" href={loc}>
          {name}
        </a>
      </li>
    </ul>
  );
}
