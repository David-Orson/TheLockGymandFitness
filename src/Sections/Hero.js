import React, { useState, useEffect } from "react";

import HeroImage from "../Assets/broad1.jpg";
import DroneShot from "../Assets/drone-photo.jpg";
import Reception from "../Assets/Gallery3.jpg"

import "../css/Hero.css";

const Hero = () => {
  const [imageRender, setImageRender] = useState(1);
  const [animateState, setAnimateState] = useState(1);

  useEffect(() => {
    if(imageRender === 1) {
      setTimeout(() => {
        setImageRender(2)
      }, 0)
    }

    setTimeout(() => {
      if(imageRender === 4) {
        setImageRender(2)
      } else {
        setImageRender(imageRender + 1)
      }
    }, 12000)
  }, [imageRender])

  return (
    <div className="hero">
      <img src={HeroImage} className={`hero-image ${imageRender === 2 ? ('rendered') : ('hidden')} ${imageRender === 2 ? ('unzoomed') : ('zoomed')}`}  alt="The Gym" />
      <img src={DroneShot} className={`hero-image ${imageRender === 3 ? ('rendered') : ('hidden')} ${imageRender === 3 ? ('unzoomed') : ('zoomed')}`}  alt="The Gym" />
      <img src={Reception} className={`hero-image ${imageRender === 4 ? ('rendered') : ('hidden')} ${imageRender === 4 ? ('unzoomed') : ('zoomed')}`}  alt="The Gym" />
    </div>
  );
};

export default Hero;
