import React from "react";
import Card from "./Card";
import { CardsProps } from "../../types/card.types";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

const Cards = ({ cards }: CardsProps) => {
  const params = useParams();
  if (cards == null) {
    return <div className="cards__not">cards not found</div>;
  }
  const cardsList = cards.map((card) => <Card key={card.id} info={card} />);

  return (
    <div className="cards__page">
      {params.id == undefined ? (
        <div className="cards__list card__column">{cardsList}</div>
      ) : (
        <Link to="/" className="cards__list card__column">
          {cardsList}
        </Link>
      )}
      <Outlet />
    </div>
  );
};

export default Cards;
