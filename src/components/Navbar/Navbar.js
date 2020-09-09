import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Nav(props) {
  return (
    <header>
      <nav>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/trending">
          <h3>Trending</h3>
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
