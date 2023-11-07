import React, { useContext, useState } from "react";
import SearchLine from "./SearchLine";
import SearchButton from "./SearchButton";
import { SearchProps } from "../../types/search.types";
import { useSearchParams } from "react-router-dom";
import "./style.css";
import { SearchContext } from "../Context/context";

const Search = (props: SearchProps) => {
  const [localSearch, setLocalSearch] = useContext(SearchContext);
  const [search, setSearch] = useState(localSearch);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const lsSearch = localStorage.getItem("search");
    if (!lsSearch) return;
    setLocalSearch(lsSearch);
  }, [setLocalSearch]);

  const submitSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    searchParams.delete("page");
    setLocalSearch(search);
    setSearchParams(searchParams);
    props.submitSearch(localSearch);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearch(value);
    localStorage.setItem("search", value);
  };

  return (
    <form onSubmit={submitSearch}>
      <div className="search">
        <SearchLine search={search} onInputChange={onInputChange} />
        <SearchButton />
      </div>
    </form>
  );
};

export default Search;
