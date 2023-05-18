import React, { useState } from 'react';

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults] = useState([]);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search movies"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
