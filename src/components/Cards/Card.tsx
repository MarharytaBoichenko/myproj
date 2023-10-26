import React from "react";
import { CardProps } from "../../types/card.types";
import "./style.css";

class Card extends React.PureComponent<CardProps> {
  render() {
    return (
      <div className="card">
        <div className="card__img">
          <img src={this.props.info.image} alt="image" />
        </div>
        <div className="card__content">
          <div className="card__name">{this.props.info.name}</div>
          <div className="card__info">
            <u>species:</u>
            <b>{this.props.info.species}</b>
          </div>
          <div className="card__info">
            <u>gender:</u> <b>{this.props.info.gender}</b>
          </div>
          <div className="card__info">
            <u>location:</u> <b>{this.props.info.location.name}</b>
          </div>
          <div className="card__info">
            <u>created:</u> <b>{this.props.info.created.substring(0, 10)}</b>
          </div>
          <div className="card__info">
            <u>origin:</u> <b>{this.props.info.origin.name}</b>
          </div>
          <div className="card__info">
            <u>status:</u> <b>{this.props.info.status}</b>
          </div>
          <div className="card__info">
            <u>total episodes:</u> <b>{this.props.info.episode.length}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
