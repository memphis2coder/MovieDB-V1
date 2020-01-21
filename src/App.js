import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
// components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: ""
    };
    this.apiKey = process.env.REACT_APP_API_KEY;
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Hero />
        </div>
      </div>
    );
  }
}

export default App;
