import React from "react";
import { SearchLineProps } from "../../types/search.types";

const SearchLine = ({ search, onInputChange }: SearchLineProps) => {
  return (
    <input
      type="text"
      className="input search__input"
      value={search}
      onChange={onInputChange}
    />
  );
};

export default SearchLine;
