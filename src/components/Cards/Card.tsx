import React from "react";
import { CardProps } from "../../types/card.types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./style.css";

const Card = ({ info }: CardProps) => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  if (info == null) {
    return <div className="cards__not">card not found</div>;
  }

  let link = ("/details/" + info.id).toString();
  if (page !== "1") {
    link = ("/details/" + info.id + "?page=" + page).toString();
  }

  const renderDiv = () => (
    <>
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
    </>
  );

  return params.id == undefined ? (
    <Link to={link} className="card">
      {renderDiv()}
    </Link>
  ) : (
    <div className="card">{renderDiv()}</div>
  );
};

export default Card;
