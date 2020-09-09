import React from 'react';
import Movie from '../Movie/Movie';
function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </ul>
  );
}

export default MovieList;
