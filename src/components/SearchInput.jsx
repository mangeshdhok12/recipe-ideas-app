import React from 'react';

// The SearchInput component accepts props to handle the search term, updating the search term, 
// fetching recipes, and clearing the search results.
const SearchInput = ({ searchTerm, setSearchTerm, fetchRecipes, clearSearch }) => {
  return (
    <div className="search-container">
      {/* Text input for entering the ingredient or recipe name */}
      <input
        type="text"
        placeholder="Enter ingredient (e.g., chicken)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Updates searchTerm state on user input
        className="search-input"
      />

      {/* Button to trigger recipe search */}
      <button onClick={fetchRecipes} className="search-button">Search</button>

      {/* Button to clear the search term and results */}
      <button onClick={clearSearch} className="clear-button">Clear</button>
    </div>
  );
};

export default SearchInput;
