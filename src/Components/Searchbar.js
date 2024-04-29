import React from 'react';

function SearchBar({ onChange }) {
  const handleSearch = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search For Recent transactions..."
        onChange={handleSearch}
        className="search-input"
      ></input>
    </div>
  );
}

export default SearchBar;
