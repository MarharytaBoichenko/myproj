import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import cardApi from "../API/cardApi";
import { ICard } from "../../types/card.types";
import Loader from "../Loader/Loader";
import Card from "./Card";
import { Link } from "react-router-dom";
import "./style.css";

const CardPage = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = React.useState<ICard | null>(null);

  const loadCard = useCallback(async () => {
    setIsLoading(true);
    const card = await cardApi.uploadCard(params.id?.toString() || "");
    setCard(card);
    setIsLoading(false);
  }, [params]);

  useEffect(() => {
    loadCard();
  }, [loadCard, params]);

  return (
    <div className="card__page card__column">
      {!isLoading ? (
        <Card info={card} />
      ) : (
        <div className="main__loader">
          <Loader />
        </div>
      )}
      <Link to={"/"} className="card__drop"></Link>
    </div>
  );
};

export default CardPage;
