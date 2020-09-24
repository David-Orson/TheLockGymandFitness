import React from "react";

import Card from "../components/Card";

import "../css/Trainers.css";

const Trainers = () => {
  return (
    <div id="trainers" class="trainers">
      <h2>Our Trainers</h2>
      <div className="trainer-container">
        <Card name="one" body="super cool trainer" />
        <Card name="two" body="super cool trainer" />
        <Card name="three" body="super cool trainer" />
        <Card name="four" body="super cool trainer" />
      </div>
      <div className="trainer-container">
        <Card name="five" body="super cool trainer" />
        <Card name="six" body="super cool trainer" />
        <Card name="seven" body="super cool trainer" />
      </div>
    </div>
  );
};

export default Trainers;
