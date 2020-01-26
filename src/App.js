import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// components for the website
import Navigation from "./components/Navigation/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import People from "./components/People/People";
import TvShow from "./components/TvShow/TvShow";
import Movies from "./components/Movies/Movies";

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
        <Router>
          <Navigation getMovies={this.getMovies} />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/movies" component={Movies} />
            <Route path="/tvshow" component={TvShow} />
            <Route path="/people" component={People} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default App;
