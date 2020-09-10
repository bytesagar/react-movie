import React, { useState } from 'react';
import './search.css';
function Search(props) {
  const [query, setQuery] = useState('');

  const handleInputChanges = (e) => {
    setQuery(e.target.value);
  };
  const callSearch = (e) => {
    e.preventDefault();
    if (query) {
      props.search(query);
    }
    setQuery('');
  };
  return (
    <div>
      <form onSubmit={callSearch}>
        <input
          type="text"
          placeholder="search move here..."
          value={query}
          autoFocus
          required
          onChange={handleInputChanges}
        />
      </form>
    </div>
  );
}

export default Search;
