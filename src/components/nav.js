import React, { Component } from "react";
import "./app.css";
import { Link, withRouter } from "react-router-dom";

function Nav() {
  const linkstyles = {
    color: "white",
  };
  return (
    <div>
      <nav>
        <Link style={linkstyles} to="/home">
          <li> Home</li>
        </Link>
        <Link style={linkstyles} to="/shop">
          <li>Shop</li>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
