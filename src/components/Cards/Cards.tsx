import React from "react";
import Card from "./Card";
import { CardsProps } from "../../types/card.types";
import "./style.css";

class Cards extends React.PureComponent<CardsProps> {
  constructor(props: CardsProps) {
    super(props);
  }
  render() {
    if (this.props.cards == null) {
      return <div className="cards__not">cards not found</div>;
    }

    return (
      <div className="cards__list">
        {this.props.cards.map((card) => (
          <Card key={card.id} info={card} />
        ))}
      </div>
    );
  }
}

export default Cards;
