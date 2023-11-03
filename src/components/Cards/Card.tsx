import React from "react";
import { CardProps } from "../../types/card.types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./style.css";

const Card = ({ info }: CardProps) => {
  const params = useParams();

  if (info == null) {
    return <div className="cards__not">card not found</div>;
  }

  if (params.id == undefined) {
    return (
      <Link
        to={("/details/" + info.id).toString()}
        key={info.id}
        className="card"
      >
        <div className="card__img">
          <img src={info.image} alt="image" />
        </div>
        <div className="card__content">
          <div className="card__name">{info.name}</div>
          <div className="card__info">
            <u>species:</u>
            <b>{info.species}</b>
          </div>
          <div className="card__info">
            <u>gender:</u> <b>{info.gender}</b>
          </div>
          <div className="card__info">
            <u>location:</u> <b>{info.location.name}</b>
          </div>
          <div className="card__info">
            <u>created:</u> <b>{info.created.substring(0, 10)}</b>
          </div>
          <div className="card__info">
            <u>origin:</u> <b>{info.origin.name}</b>
          </div>
          <div className="card__info">
            <u>status:</u> <b>{info.status}</b>
          </div>
          <div className="card__info">
            <u>total episodes:</u> <b>{info.episode.length}</b>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="card">
      <div className="card__img">
        <img src={info.image} alt="image" />
      </div>
      <div className="card__content">
        <div className="card__name">{info.name}</div>
        <div className="card__info">
          <u>species:</u>
          <b>{info.species}</b>
        </div>
        <div className="card__info">
          <u>gender:</u> <b>{info.gender}</b>
        </div>
        <div className="card__info">
          <u>location:</u> <b>{info.location.name}</b>
        </div>
        <div className="card__info">
          <u>created:</u> <b>{info.created.substring(0, 10)}</b>
        </div>
        <div className="card__info">
          <u>origin:</u> <b>{info.origin.name}</b>
        </div>
        <div className="card__info">
          <u>status:</u> <b>{info.status}</b>
        </div>
        <div className="card__info">
          <u>total episodes:</u> <b>{info.episode.length}</b>
        </div>
      </div>
    </div>
  );
};

export default Card;
