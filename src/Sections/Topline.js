import React, { useState } from "react";

import logo from "../Assets/LockLogo1.png";

import Stripes from "../Assets/accents/AngledStripes.png"

import "../css/Topline.css";

const Topline = () => {
  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    
    <div class={`topline ${navbar === true ? ('scrolled') : (null)}`}>
      <img className="logo" src={logo} alt="The Lock Gym and Fitness" />
      <div className="links">
        <a className="link" href="#top">Top</a>
        <a className="link" href="#about">About</a>
        <a className="link" href="#trainers">Trainers</a>
        <a className="link" href="#gallery">Gallery</a>
        
      </div>
      <img className="topline-stripes" src={Stripes} alt="Pink Stripes" />
    </div>
  );
};

export default Topline;
