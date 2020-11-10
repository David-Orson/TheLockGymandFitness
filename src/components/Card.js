import React from "react";

import img from "../Assets/unnamed.jpg";

import "../css/Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="pfp" src={img} />
      <h4>{props.name}</h4>
      <p>{props.body}</p>
    </div>
  );
};

export default Card;