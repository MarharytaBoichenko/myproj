import React from "react";
import { useSearchParams } from "react-router-dom";
import "./style.css";

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const applyPageParams = (page: string) => {
    if (searchParams.has("page")) searchParams.set("page", page);
    else searchParams.append("page", page);
    setSearchParams(searchParams);
  };

  const pageLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    const key = i.toString();
    const className = ["page"];
    if (page === key) className.push("page--selected");

    pageLinks.push(
      <div
        className={className.join(" ")}
        key={key}
        onClick={() => applyPageParams(key)}
      >
        {i}
      </div>,
    );
  }

  return <div className="pages">{pageLinks}</div>;
};

export default Pagination;
