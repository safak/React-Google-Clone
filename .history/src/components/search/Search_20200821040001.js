import React from "react";
import "./Search.css";
import { Search as SearchIcon, Mic } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const Search = () => {
  return (
    <div className="search">
      <div className="searchInput">
        <SearchIcon className="searchIcon" />
        <input />
        <Mic />
      </div>
      <div className="searchButtons">
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
};

export default Search;
