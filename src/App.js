import React, { Component, Suspense } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
// components for the website
import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
// import MovieDetailPage from "./components/LandingPage/MovieDetailPage/MovieDetailPage";

class App extends Component {
  //get value of search when button is clicked
  getMovies = e => {
    const movieSearch = e.target.elements.movieSearch.value;
    e.preventDefault();
    //clear input after enter
    e.target.reset();
    console.log(movieSearch);
  };

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Navigation getMovies={this.getMovies} />
          <div className="container">
            <LandingPage />
          </div>
        </div>
      </Suspense>
    );
  }
}

export default App;
