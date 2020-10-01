import React, { useState, useEffect } from 'react';
import './detail.css';
import { useHistory } from 'react-router-dom';
import { movieDetailUrl } from '../../config/api_url';
import { key } from '../../config/api_key';
import { Spinner } from 'reactstrap';
import logo1 from './logo1.png';

function Detail(props) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory()

  useEffect(() => {
    const url = movieDetailUrl.replace(':movieId', props.match.params.movie_id);
    fetch(`${url}?api_key=${key}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);

        if (data) {
          console.log(data);
          setMovie(data);
        }
        setLoading(false);
      });
  }, []);

  let spinner = (
    <div className="loading">
      <Spinner color="success" />
    </div>
  );
  const poster =
    movie && movie.poster_path ? (
      <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
    ) : (
      <img src={`${logo1}`} />
    );
  const release = movie.release_date;
  const release_date = new Date(release).getFullYear();

  return (
    <div className="movie-detail">
      {loading && spinner}

      <div className="img-container">{poster}</div>
      <div className="details">
        <h2>
          {movie.original_title}({release_date})
        </h2>
        {movie.genres &&
          movie.genres.map((item) => {
            return <span key={item.id}>{item.name}, </span>;
          })}
        <h4>{movie.tagline && movie.tagline}</h4>
        <meter value={movie.vote_average} min="0" max="10" />
        <h4>Overview</h4>
        {movie.overview}
        <br />
        <h4 className="voting">  Rating: {Math.floor(movie.popularity * 100)/100} <ion-icon name="star-sharp" style={{color:'rgb(255, 251, 0)',fontSize:'13px'}}></ion-icon></h4>
        <h4 style={{fontSize:"16px", marginTop:'20px'}}>Status: {movie.status}</h4>       
       
          <center><button className="goback-btn" onClick={history.goBack}>Go Back</button></center>  

      </div>
    </div>
  );
}

export default Detail;
