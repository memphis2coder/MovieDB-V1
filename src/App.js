import React, { Component } from "react";
import { API_KEY, API_URL } from "./Config";

import "./App.css";
// components
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

class App extends Component {
  //get value of search when button is clicked
  getMovies = e => {
    const movieSearch = e.target.elements.movieSearch.value;
    e.preventDefault();
    console.log(movieSearch);
  };

  // store data
  state = {
    movies: []
  };

  // connect to api popular
  async componentDidMount() {
    await fetch(
      `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page1`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data });
        console.log(data);
        console.log(data.results[0].title);
      });
  }

  render() {
    return (
      // main landing page
      <div>
        <Navigation getMovies={this.getMovies} />
        <div className="container">
          <Hero />
        </div>
      </div>
    );
  }
}

export default App;

// state = {

// //   loading: true,
//   //   movie: null
//   // };

//   // async componentDidMount() {
//   //   const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page1`;
//   //   const response = await fetch(url);
//   //   const data = await response.json();
//   //   this.setState({ movie: data.results[0], loading: false });
//   //   console.log(data.results[0]);
//   // }

//  //put all the datas fetched from moviedb api into state
//  const [Movies, setMovies] = useState([]);

//  //fetch popular movie data from MOVIEDB
//  useEffect(() => {
//    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page1`)
//      .then(response => response.json())
//      .then(response => {
//        setMovies(response.result);
//        console.log(response);
//      });
//  }, []);
