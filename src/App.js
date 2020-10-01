import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Trending from './components/Trending/index';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/trending" component={Trending} />
      <Route path="/:movie_id/details" component={Detail} />
    </Router>
  );
}

export default App;
