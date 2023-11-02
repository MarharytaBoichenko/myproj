import React from "react";
import Card from "./Card";
import { CardsProps } from "../../types/card.types";
import { Outlet } from "react-router-dom";
import "./style.css";

const Cards = ({ cards }: CardsProps) => {
  if (cards == null) {
    return <div className="cards__not">cards not found</div>;
  }

  return (
    <div className="cards__page">
      <div className="cards__list card__column">
        {cards.map((card) => (
          <Card key={card.id} info={card} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Cards;
