import React from "react";
import Card from "./Card";
import "./style.css";

class Cards extends React.Component {
  render() {
    return (
      <div className="cards__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Cards;
