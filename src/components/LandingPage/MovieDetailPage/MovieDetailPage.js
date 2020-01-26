import React, { useEffect } from "react";
import { API_KEY, API_URL, API_IMG } from "../../Config";
import Hero from "../../Hero/Hero";

function MovieDetailPage(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const movieId = props.match.params.movieId;

    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setMovie(response);
      });
  }, []);
  return (
    <div>
      <section id="hero">
        <div>
          {movie[0] && (
            <Hero
              image={`${API_IMG}w1280${movie[0].backdrop_path &&
                movie[0].backdrop_path}`}
              title={movie[0].original_title}
              text={movie[0].overview}
            />
          )}
        </div>
      </section>
      {/* movie Info */}
      <section id="movieInfo">
        <ul class="list-group">
          <li class="list-group-item list-group-item-dark">
            Title: {movie.original_title}
          </li>
          <li class="list-group-item list-group-item-dark">
            Release Date: {movie.release_date}
          </li>
          <li class="list-group-item list-group-item-dark">
            Runtime: {movie.runtime}
          </li>
          >
        </ul>
      </section>
    </div>
  );
}

export default MovieDetailPage;
