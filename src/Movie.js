import React from "react";

const Movie = props => {
  return (
    <div key={props.key}>
      <h1>{props.name}</h1>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default Movie;
