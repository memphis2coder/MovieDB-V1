import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            MDB Search
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
