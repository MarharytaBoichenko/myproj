import React from "react";
import SearchLine from "./SearchLine";
import SearchButton from "./SearchButton";
import "./style.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <SearchLine />
        <SearchButton />
      </div>
    );
  }
}

export default Search;
