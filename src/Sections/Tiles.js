import React from "react";

import Barbell from "../Assets/Barbell.jpg";
import Machines from "../Assets/WeightMachines.jpg";
import Cardio from "../Assets/Cardio.jpg";
import Sunbed from "../Assets/Sunbed.jpg";

import "../css/Tiles.css";

const Tiles = () => {
  return (
    <div class="tiles">
      <div className="row">
        <div className="box-image">
          <img src={Barbell} className="tile-image1" alt="Free Weights" />
        </div>
        <div className="box-content-right">
          <h2 className="white tile-title-right tile-title1">Free Weights</h2>
          <div className="text-container-right">
            <p className="tile-text">
              We are well equipped with free weights, boasting two large
              dumbbell racks and many barbell plates. Our Dumbbell Racks go from
              2.5kg to 30kg in 2.5kg increments with dumbbells up to 60kg.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="row">
      
        <div className="box-content-left desktop">
          <h2 className="white tile-title-left tile-title2 desktop">Weight Machines</h2>
          <div className="text-container-left desktop">
            <p className="tile-text desktop">
              We have a comprehensive range of Life Fitness weight machines for you to
              isolate each muscle group. Our machines are high quality and well
              maintained. We also have two sets of cables and an assisted pull
              up bar.
            </p>
          </div>
        </div>
        <div className="box-image">
          <img src={Machines} className="tile-image2" alt="Weight Machines" />
        </div>
        <div className="box-content-left mobile">
        <h2 className="white tile-title-left tile-title2 mobile">Weight Machines</h2>
          <div className="text-container-left mobile">
            <p className="tile-text mobile">
              We have a comprehensive range of Life Fitness weight machines for you to
              isolate each muscle group. Our machines are high quality and well
              maintained. We also have two sets of cables and an assisted pull
              up bar.
            </p>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="box-image">
          <img src={Cardio} className="tile-image3" alt="Cardio Machines" />
          </div>
        <div className="box-content-right">
          <h2 className="white tile-title-right tile-title3">Cardio Machines</h2>
          <div className="text-container-right">
            <p className="tile-text">
              Our Life Fitness cardio machines are adequate for your needs, treadmills,
              rowing machines, exercise bikes, spin bikes and stair steppers.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="box-content-left desktop">
          <h2 className="white tile-title-left desktop">Sunbeds</h2>
          <div className="text-container-left desktop">
            <p className="tile-text desktop">
              Our sunbeds have high quality bulbs which will certainly give you
              that summer glow at any time of year!
            </p>
          </div>
        </div>
        <div className="box-image">
        <img src={Sunbed} className="tile-image4" alt="Sunbeds" />
        </div>
        <div className="box-content-left mobile">
          <h2 className="white tile-title-left tile-title4 mobile">Sunbeds</h2>
          <div className="text-container-left mobile">
            <p className="tile-text mobile">
              Our sunbeds have high quality bulbs which will certainly give you
              that summer glow at any time of year!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
