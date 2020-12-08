import React from "react";

import Card from "../components/Card";

import Trainer1 from "../Assets/Trainer1.jpg";
import Trainer2 from "../Assets/Trainer2.jpg";
import Trainer3 from "../Assets/Trainer6.jpg";
import Trainer4 from "../Assets/Trainer4.jpg";
import Trainer5 from "../Assets/Trainer5.jpg";
import Trainer6 from "../Assets/Trainer7.jpg"

import "../css/Trainers.css";

const Trainers = () => {
  const trainer1class = "trainer1";
  const trainer2class = "trainer2";
  const trainer3class = "trainer3";
  const trainer4class = "trainer4";
  const trainer5class = "trainer5";
  const trainer6class = "trainer6";

  return (
    <div id="trainers" class="trainers">
      <div className="trainers2">
      <h2 className="trainers-title">Our Trainers</h2>
      <div className="trainer-container">
        <Card name="Ian Measures" body="" img={Trainer1} css={trainer1class}/>
        <Card name="Hollie Feeney" body="" img={Trainer2} css={trainer2class}/>
        <Card name="Damon Atherton" body="" img={Trainer3} css={trainer3class}/>
        <Card name="Jamie Green" body="" img={Trainer4} css={trainer4class}/>      
        <Card name="Marfisia Lanza" body="" img={Trainer5} css={trainer5class}/>
        <Card name="Jasmine Hazlehurst" body="" img={Trainer6} css={trainer6class} />
      </div>
      </div>
      
    </div>
  );
};

export default Trainers;
