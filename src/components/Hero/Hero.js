import React from "react";
import "./Hero.css";

const Hero = props => {
  return (
    <div className="container">
      <div
        className="jumbotron"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: 10
        }}
      >
        <div className="container d-flex h-100">
          <div className="hero-text-background align-self-end">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
