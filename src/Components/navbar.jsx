import React, { Component } from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light my-bg">
      <span className="navbar-brand mb-0">
        <img
          src="./Florida.png"
          width="60"
          height="60"
          className="navbar-icon"
          //   className="d-inline-block align-top"
          alt=""
        />
        <span className="my-heading">N Rate Calculator</span>
      </span>
    </nav>
  );
};

export default NavBar;
