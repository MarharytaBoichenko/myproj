import React, { useState } from "react";
import SearchLine from "./SearchLine";
import SearchButton from "./SearchButton";
import "./style.css";

const Search = () => {
  const [localSearch, setLocalSearch] = useState("");

  React.useEffect(() => {
    const lsSearch = localStorage.getItem("search");
    if (!lsSearch) return;
    setLocalSearch(lsSearch);
  }, []);

  const submitSearchParams = (search: string) => {
    localStorage.setItem("search", search);
  };

  const submitSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    submitSearchParams(localSearch);
  };

  return (
    <form onSubmit={submitSearch}>
      <div className="search">
        <SearchLine
          search={localSearch}
          onInputChange={(event) => setLocalSearch(event.currentTarget.value)}
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default Search;
