import React, { useState, useEffect } from 'react';

import { Container, Spinner } from 'reactstrap';
import MovieList from '../MovieLists/MovieList';
import Navbar from '../Navbar/Navbar';
import { key } from '../../config/api_key';

const fetchMovies = async (page) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&page=${page}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const Trending = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { results } = await fetchMovies(currentPage);
      console.log(results);
      setMovies(results);
      setLoading(false);
    })();
  }, [currentPage]);

  let spinner = (
    <div className="loading">
      <Spinner color="success" />
    </div>
  );

  return (
    <div>
      <Navbar />
      <Container>
        <MovieList movies={movies} />
        {loading && spinner}
        <div className="load-more">
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Load more
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
