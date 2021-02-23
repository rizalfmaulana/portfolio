import React from "react";
import logo from "../assets/images/riz.png";

function Navbar() {
  return (
    <nav>
      <img src={logo} className="logo" alt="gambar" />
      <ul className="nav-links">
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
