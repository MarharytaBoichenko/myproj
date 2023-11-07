import React from "react";
import { useSearchParams } from "react-router-dom";
import "./style.css";

const LimitPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let limit = searchParams.get("limit") || "30";

  const applyLimitParams = (limit: string) => {
    if (searchParams.has("limit")) {
      searchParams.set("limit", limit);
    } else searchParams.append("limit", limit);
    if (searchParams.has("page")) {
      searchParams.set("page", "1");
    } else searchParams.append("page", "1");
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
        placeholder="30"
        onChange={onInputChange}
      />
      <button type="submit" className="button search__button">
        Change Limit Page
      </button>
    </form>
  );
};

export default LimitPage;
