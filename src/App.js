import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Trending from './components/Trending/index';

function hello() {
  return (
    <div>
      This is next <Link to="/">Home</Link>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/trending" component={Trending} />
      <Route path="/:movie_id/details" component={hello} />
    </Router>
  );
}

export default App;
