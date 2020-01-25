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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/movies" className="nav-link">
                  MOVIES <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tvshows" className="nav-link">
                  TV SHOWS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/people" className="nav-link">
                  PEOPLE
                </Link>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={props.getMovies}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="movieSearch"
                id="movieSearch"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                name="submit"
                id="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
