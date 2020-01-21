import React from "react";

// const API_URL =
//   "https://api.themoviedb.org/3/movie/76341?api_key=process.env.REACT_APP_API_KEY";

// state = {
//   componentDidMount() {
//     fetch(API_URL)
//       .then(res => res.json())
//       .then();
//   }
// };
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
                <a className="nav-link" href="/">
                  MOVIES <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  TV SHOWS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  PEOPLE
                </a>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={props.handleSubmit}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={props.handleChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
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