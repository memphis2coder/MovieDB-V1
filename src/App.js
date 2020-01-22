import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, API_IMG } from "./Config";
import "./App.css";
// components
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

function App() {
  // put all the datas fetched from moviedb api into state
  const [Movies, setMovies] = useState([]);

  // fetch popular movie data from MOVIEDB
  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page1`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovies(response.result);
      });
  }, []);

  return (
    // main landing page

    <div>
      <Navigation />
      <div className="container">
        <Hero />
      </div>
    </div>
  );
}

export default App;
