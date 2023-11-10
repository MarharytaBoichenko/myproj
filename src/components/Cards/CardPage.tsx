import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import cardApi from "../API/cardApi";
import { ICard } from "../../types/card.types";
import Loader from "../Loader/Loader";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./style.css";

const CardPage = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = React.useState<ICard | null>(null);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "30";

  let link = "/?page=" + page;
  if (limit !== "30") link = link + "&limit=" + limit;

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
    <div className="card__page card__column" data-testid="detail">
      <Link to={link} className="card__drop"></Link>
      {!isLoading ? (
        <Card info={card} details={true} />
      ) : (
        <div className="main__loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default CardPage;
