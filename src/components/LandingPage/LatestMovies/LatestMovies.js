import React from "react";
import "./LatestMovies.css";

const LatestMovies = () => {
  return (
    <div className="latestMovies">
      <h1>Latest Movies</h1>
      <hr />
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-6 col-md-3">
            one of four columns
            <img src="{props.image}" alt="" />
          </div>
          <div className="col-sm-6 col-md-3">two of four columns</div>
          <div className="col-sm-6 col-md-3">three of four columns</div>
          <div className="col-sm-6 col-md-3">four of four columns</div>
        </div>
      </div>
    </div>
  );
};

export default LatestMovies;

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
