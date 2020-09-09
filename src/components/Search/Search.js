import React, { useState } from 'react';
import './search.css';
function Search(props) {
  const [query, setQuery] = useState('man');

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
  );
}

export default Search;
