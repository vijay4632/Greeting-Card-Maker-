import React from "react";
import "./Navbar.css";

const Navbar = ({ onNav }) => (
  <nav className="navbar">
    <div className="navbar-logo">Greeting Card Maker</div>
    <div className="navbar-links">
      <button onClick={() => onNav("home")}>Home</button>
      <button onClick={() => onNav("register")}>Register</button>
      <button onClick={() => onNav("login")}>Login</button>
      <button onClick={() => onNav("maker")}>Create Card</button>
    </div>
  </nav>
);

export default Navbar;