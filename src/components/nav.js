import { Link } from "react-router-dom";
import "./nav.css";
import React from "react";
const Navbar = () => {
  return (
    <div className="nav-conatainer">
      <div></div>
      <ul>
        <li>
          <Link to={"/home"} className="link-tag">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="link-tag">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Navbar };