import React, { useState } from "react";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import { ICard } from "../types/card.types";
import cardApi from "./API/cardApi";
import Loader from "./Loader/Loader";
import ErrorTest from "./Error/ErrorTest";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [cards, setCards] = React.useState<ICard[]>([]);
  //const [card, setCard] = React.useState<ICard | null>(null);
  const search = localStorage.getItem("search") || "";
  const page = "1";

  React.useEffect(() => {
    const loadCards = async () => {
      setIsLoading(true);
      const [cards, totalPages] = await cardApi.uploadCards(page, search);
      setCards(cards);
      setIsLoading(false);
      setTotalPages(totalPages);
    };
    loadCards();
  }, [page, search]);

  return (
    <div className="main">
      <Search />
      <ErrorTest />
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
