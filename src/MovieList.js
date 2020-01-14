import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return movies.map(movie => {
    return <Movie name={movie.name} price={movie.price} key={movie.id} />;
  });
};

export default MovieList;
