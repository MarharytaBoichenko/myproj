import React from "react";
import { useSearchParams } from "react-router-dom";
import "./style.css";

const LimitPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let limit = searchParams.get("limit") || "30";

  const applyLimitParams = (limit: string) => {
    if (limit === "30") searchParams.delete("limit");
    else {
      if (searchParams.has("limit")) searchParams.set("limit", limit);
      else searchParams.append("limit", limit);
    }
    setSearchParams(searchParams);
  };

  const submitSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    applyLimitParams(limit);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    limit = event.currentTarget.value;
  };

  return (
    <form onSubmit={submitSearch}>
      <input
        type="text"
        className="input limit__input"
        onChange={onInputChange}
      />
      <button type="submit" className="button search__button">
        Change Limit Page
      </button>
    </form>
  );
};

export default LimitPage;
