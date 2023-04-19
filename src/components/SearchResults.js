import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ searchResults, message }) => {
  return (
    <>
      {searchResults.length === 0 && <p>{message}</p>}
      {searchResults.length > 0 && (
        <p className="search-title">Heres what we found...</p>
      )}
      <div className="gallery">
        {searchResults.map((link) => (
          <img className="card-image" src={link} alt="space" />
        ))}
      </div>
    </>
  );
};

export default SearchResults;