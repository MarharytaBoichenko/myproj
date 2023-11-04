import React from "react";
import { CardProps } from "../../types/card.types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./style.css";

const Card = ({ info, details }: CardProps) => {
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

  const cardDetails = () => {
    return details ? (
      <>
        <div className="card__info">
          <u>email:</u>
          <b>{info.email}</b>
        </div>
        <div className="card__info">
          <u>phone:</u>
          <b>{info.phone}</b>
        </div>
        <div className="card__info">
          <u>bloodGroup:</u>
          <b>{info.bloodGroup}</b>
        </div>
        <div className="card__info">
          <u>eyeColor:</u>
          <b>{info.eyeColor}</b>
        </div>
      </>
    ) : (
      ""
    );
  };

  const renderDiv = () => (
    <>
      <div className="card__img">
        <img src={info.image} alt="image" />
      </div>
      <div className="card__content">
        <div className="card__name">{info.firstName + " " + info.lastName}</div>
        <div className="card__info">
          <u>age:</u>
          <b>{info.age}</b>
        </div>
        <div className="card__info">
          <u>gender:</u>
          <b>{info.gender}</b>
        </div>
        <div className="card__info">
          <u>user name:</u>
          <b>{info.username}</b>
        </div>
        <div className="card__info">
          <u>height:</u>
          <b>{info.height}</b>
        </div>
        <div className="card__info">
          <u>weight:</u>
          <b>{info.weight}</b>
        </div>
        <div className="card__info">
          <u>birth date:</u>
          <b>{info.birthDate}</b>
        </div>
        {cardDetails()}
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
