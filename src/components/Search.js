import React from "react";
import { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults, setMessage }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
     setMessage("") 
  };
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="search-btn" type="submit">
          Launch! 🚀
        </button>
      </form>
    </>
  );
};

export default Search;