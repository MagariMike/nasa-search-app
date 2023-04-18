import React from "react";
import "../styles/search-results.css";

const SearchResults = ({searchResults}) => {
    if(searchResults.length === 0) {
       return <p className="search-title">Oops! Doesn't look like we have anything under that search...</p>
    }
    return (
        <>
            <p className="search-title">Heres what we found...</p>
            <div className="gallery">{searchResults.map((link) => <img className="card-image" src={link} alt="space" />)}</div>
        </>
    )
}

export default SearchResults;