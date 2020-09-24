import React from "react";

import logo from "../Assets/logo.PNG";

import "../css/Topline.css";

const Topline = () => {
  return (
    <div class="topline">
      <img className="logo" src={logo} alt="The Lock Gym and Fitness" />
      <div className="links">
        <a href="#top">Top</a>
        <a href="#about">About</a>
        <a href="#trainers">Trainers</a>
        <a href="#gallery">Gallery</a>
      </div>
    </div>
  );
};

export default Topline;
