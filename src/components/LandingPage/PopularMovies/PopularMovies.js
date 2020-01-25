import React from "react";
import "./PopularMovies.css";

const PopularMovies = props => {
  return (
    <div className="popularMovies">
      <div className="container">
        <h1>Popular Movies</h1>
        <hr />
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3">
              one of four columns
              <div className="card text-light shadow custom-card border-dark">
                <img src={props.image} className="card-img-top" alt="img" />
                <div className="card-body ">
                  <h5 className="card-title">{props.title}</h5>
                  {/* <a href="#" className="stretched-link"></a> */}
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              two of four columns
              <div className="card text-light shadow custom-card border-dark">
                <img src={props.image} className="card-img-top" alt="img" />
                <div className="card-body ">
                  <h5 className="card-title">{props.title}</h5>
                  {/* <a href="#" className="stretched-link"></a> */}
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">three of four columns</div>
            <div className="col-6 col-md-3">four of four columns</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;

/* <div className="card text-dark">
              <img src="" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div> */
