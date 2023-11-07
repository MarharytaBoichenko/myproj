import React, { useCallback, useState } from "react";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import LimitPage from "./Pagination/LimitPage";
import { ICard } from "../types/card.types";
import cardsApi from "./API/cardsApi";
import Loader from "./Loader/Loader";
import ErrorTest from "./Error/ErrorTest";
import { useSearchParams, Link, useParams } from "react-router-dom";
import { CardsContext, SearchContext } from "./Context/context";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [cards, setCards] = useState<ICard[] | null>(null);
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  //const search = localStorage.getItem("search") || "";
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "30";
  const params = useParams();

  const loadCards = useCallback(async () => {
    setIsLoading(true);
    const [cards, totalPages] = await cardsApi.uploadCards(page, search, limit);
    setCards(cards);
    setIsLoading(false);
    setTotalPages(totalPages);
  }, [page, search, limit]);

  React.useEffect(() => {
    loadCards();
    if (searchParams.has("page")) searchParams.set("page", page);
    else searchParams.append("page", page);
    setSearchParams(searchParams);
  }, [loadCards, page, search, limit, searchParams, setSearchParams]);

  let link = "/?page=" + page;
  if (limit !== "30") link = link + "&limit=" + limit;
  const headerMain = () => (
    <>
      <SearchContext.Provider value={[search, setSearch]}>
        <Search submitSearch={loadCards} />
      </SearchContext.Provider>
      <ErrorTest />
      <LimitPage />
      <Pagination totalPages={totalPages} />
    </>
  );

  return (
    <div className="main">
      {params.id == undefined ? (
        <div className="header__main">{headerMain()}</div>
      ) : (
        <Link
          to={link}
          className="header__main"
          style={{ textDecoration: "none", color: "black" }}
        >
          {headerMain()}
        </Link>
      )}
      {!isLoading ? (
        <Cards cards={cards} />
      ) : (
        <div className="main__loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Main;
