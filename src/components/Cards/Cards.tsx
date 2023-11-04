import React from "react";
import Card from "./Card";
import { CardsProps } from "../../types/card.types";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./style.css";

const Cards = ({ cards }: CardsProps) => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  if (cards == null) {
    return <div className="cards__not">cards not found</div>;
  }

  let link = "/";
  if (page !== "1") link = "/?page=" + page;
  const cardsList = cards.map((card) => (
    <Card key={card.id} info={card} details={false} />
  ));

  return (
    <div className="cards__page">
      {params.id == undefined ? (
        <div className="cards__list card__column">{cardsList}</div>
      ) : (
        <Link to={link} className="cards__list card__column">
          {cardsList}
        </Link>
      )}
      <Outlet />
    </div>
  );
};

export default Cards;
