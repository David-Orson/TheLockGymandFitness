import React from "react";

import logo from "../Assets/LockLogo1.png";

import Stripes from "../Assets/accents/AngledStripes.png"

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
      <img className="topline-stripes" src={Stripes} alt="Pink Stripes" />
    </div>
  );
};

export default Topline;
