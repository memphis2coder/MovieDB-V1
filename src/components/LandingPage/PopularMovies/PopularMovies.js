import React from "react";
import "./PopularMovies.css";

const PopularMovies = props => {
  return (
    <div className="col-6 col-md-3 mb-3">
      <div className="card text-light shadow custom-card border-dark h-100">
        <img src={props.image} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <a href="/" className="stretched-link" alt="image"></a>
          <div className="card-footer">
            <small className="text-muted">Rating: {props.rating}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
