import React from "react";

import "../css/Footer.css";

import copy from '../Assets/Icons/copyright.png'

const Footer = () => {

  

  return <div class="footer">
    <p className="center">The Lock Gym and Fitness, Worksop</p>
    <p className="center">Copyright <img className="copyright-symbol" src={copy} alt="copyright symbol" /> 2020 The Lock Gym and Fitness, all rights reserved.</p>
    <p className="center">Website by David Orson</p>
  </div>;
};

export default Footer;
