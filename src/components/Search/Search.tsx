import React, { useState } from "react";
import SearchLine from "./SearchLine";
import SearchButton from "./SearchButton";
import { SearchProps } from "../../types/search.types";
import "./style.css";

const Search = (props: SearchProps) => {
  const [localSearch, setLocalSearch] = useState("");

  React.useEffect(() => {
    const lsSearch = localStorage.getItem("search");
    if (!lsSearch) return;
    setLocalSearch(lsSearch);
  }, []);

  const submitSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.submitSearch(localSearch);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setLocalSearch(value);
    localStorage.setItem("search", value);
  };

  return (
    <form onSubmit={submitSearch}>
      <div className="search">
        <SearchLine search={localSearch} onInputChange={onInputChange} />
        <SearchButton />
      </div>
    </form>
  );
};

export default Search;
