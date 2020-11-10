import React from "react";

import "../css/Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image--container">
        <img className={props.css} src={props.img} />
      </div>
    
      <h4>{props.name}</h4>
      <p>{props.body}</p>
    </div>
  );
};

export default Card;