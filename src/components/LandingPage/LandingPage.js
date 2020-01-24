import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, API_IMG } from "../../Config";

import Hero from "../Hero/Hero";
import LatestMovies from "./LatestMovies/LatestMovies";

function LandingPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page1`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovies(response.results);
      });
  }, []);

  return (
    <div>
      <div className="app">
        {/* Hero Image */}
        {movies[0] && (
          <Hero
            image={`${API_IMG}w1280${movies[0].backdrop_path &&
              movies[0].backdrop_path}`}
            title={movies[0].original_title}
            text={movies[0].overview}
          />
        )}
        {/* LatestMovies */}
        <section id="latestMovies">
          <div>
            {movies &&
              movies.map((movie, index) => (
                <LatestMovies
                  image={
                    movie.poster_path && `${API_IMG}w500${movie.poster_path}`
                  }
                />
              ))}
            ;
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
