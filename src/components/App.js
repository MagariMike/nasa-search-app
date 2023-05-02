import React, { useState } from "react";
import '../styles/app.css';
import Search from "../components/Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [message, setMessage] = useState("") 
  
  return (
    <div className="App">
      <img className="nasa-logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="NASA Logo"></img>
      <Search setSearchResults={setSearchResults} setMessage={setMessage} />
      <SearchResults searchResults={searchResults} message={message}/>
    </div>
  );
}

export default App;