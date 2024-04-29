import React from 'react';

function SearchBar({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search transactions..."
        onChange={handleChange}
        className="search-input"
      ></input>
    </div>
  );
}

export default SearchBar;
