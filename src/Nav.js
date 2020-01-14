import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = props => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1>Nav</h1>
      <p>List of movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
