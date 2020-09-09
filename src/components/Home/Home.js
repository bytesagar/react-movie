import React, { useState } from 'react';

import { Spinner, Container } from 'reactstrap';
import MovieList from '../MovieLists/MovieList';

import './home.css';

import { key } from '../../config/api_key';
import { searchUrl } from '../../config/api_url';
import Navbar from '../Navbar/Navbar';

import Search from '../Search/Search';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = (searchValue) => {
    setLoading(true);
    fetch(`${searchUrl}?api_key=${key}&query=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data.results);
          setMovies(data.results);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
  };
  let spinner = (
    <div className="loading">
      <Spinner color="success" />
    </div>
  );

  return (
    <div className="main">
      <Navbar />
      <Container className="mt-3">
        <Search search={search} />
        <MovieList movies={movies} />
      </Container>
      <Container>{loading && spinner}</Container>

      {/* <Trending /> */}
    </div>
  );
}

export default Home;
