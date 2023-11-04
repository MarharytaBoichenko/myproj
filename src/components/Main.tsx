import React, { useCallback, useState } from "react";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination/Pagination";
import { ICard } from "../types/card.types";
import cardApi from "./API/cardApi";
import Loader from "./Loader/Loader";
import ErrorTest from "./Error/ErrorTest";
import { useSearchParams } from "react-router-dom";

const Main = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [cards, setCards] = React.useState<ICard[]>([]);
  const search = localStorage.getItem("search") || "";
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "30";

  const loadCards = useCallback(async () => {
    setIsLoading(true);
    const [cards, totalPages] = await cardApi.uploadCards(page, search, limit);
    setCards(cards);
    setIsLoading(false);
    setTotalPages(totalPages);
  }, [page, search, limit]);

  React.useEffect(() => {
    loadCards();
  }, [loadCards, page, search, limit]);

  return (
    <div className="main">
      <Search submitSearch={loadCards} />
      <ErrorTest />
      <Pagination totalPages={totalPages} />
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
