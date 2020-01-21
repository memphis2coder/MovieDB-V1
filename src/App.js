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

  handleSubmit = e => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results] });
      });
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div>
        <Navigation
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div className="container">
          <Hero />
        </div>
      </div>
    );
  }
}

export default App;
