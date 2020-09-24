import React from "react";

import HeroImage from "../Assets/drone-photo.jpg";

import "../css/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImage} className="hero-image" alt="The Gym" />
    </div>
  );
};

export default Hero;
