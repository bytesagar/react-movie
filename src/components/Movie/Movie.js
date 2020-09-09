import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import logo1 from './logo1.png';
import './Movie.css';
function Movie({ movie }) {
  const poster = movie.poster_path ? (
    <img
      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
      alt={movie.id}
    />
  ) : (
    <img src={logo1} alt={movie.id} />
  );
  return (
    <div className="movie">
      <li key={Math.random()}>
        <Link to={`/${movie.id}/details`}>{poster}</Link>
      </li>
      <div className="movie-details">
        <Button color="success">More Details</Button>
      </div>
    </div>
  );
}

export default Movie;
