import React, { Component } from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Navbar &nbsp;
            {props.totalCounters}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
