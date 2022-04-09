import React from "react";
import "./Navbar.css";
import shree from "./shree.png";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={shree} alt="compony logo" />
      <h1>Helpdesk</h1>
    </div>
  );
}

export default Navbar;
