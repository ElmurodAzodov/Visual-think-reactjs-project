import React from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Visual Think</h1>
      <ul>
        <li>Home</li>
        <li>How It Works</li>
        <li>Pricing</li>
        <li>About</li>
      </ul>
      <button>Sign Up</button>
    </nav>
  );
};

export default Navbar;
