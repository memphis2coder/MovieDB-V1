import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, API_IMG } from "../../Config";

import Hero from "../Hero/Hero";
import PopularMovies from "./PopularMovies/PopularMovies";

import "./LandingPage.css";

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
    <div className="app">
      {/* Hero Image */}
      <section id="hero">
        <div>
          {movies[0] && (
            <Hero
              image={`${API_IMG}w1280${movies[0].backdrop_path &&
                movies[0].backdrop_path}`}
              title={movies[0].original_title}
              text={movies[0].overview}
            />
          )}
        </div>
      </section>

      {/* PopularMovies */}
      <section id="popularMovies">
        <div className="container">
          <h1 className="popular-movies-title">Popular Movies</h1>
          <hr />
          <div className="row text-center">
            {movies &&
              movies.map((movie, index) => (
                <PopularMovies
                  key={index}
                  image={
                    movie.poster_path && `${API_IMG}w200${movie.poster_path}`
                  }
                  title={movie.title}
                  movieId={movie.id}
                  rating={movie.vote_average}
                />
              ))}
          </div>
          <br />
        </div>
      </section>
      {/* end of popularMovies */}
    </div>
  );
}

export default LandingPage;
