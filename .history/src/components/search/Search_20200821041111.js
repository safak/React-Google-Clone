import React from "react";
import "./Search.css";
import { Search as SearchIcon, Mic } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const Search = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="search">
      <div className="searchInput">
        <SearchIcon className="searchIcon" />
        <input />
        <Mic />
      </div>
      <div className="searchButtons">
        <Button variant="outlined" onClick={(e) => handleSearch}>
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default Search;
