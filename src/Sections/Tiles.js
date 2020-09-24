import React from "react";

import "../css/Tiles.css";

const Tiles = () => {
  return (
    <div class="tiles">
      <div className="row">
        <div className="box-image"></div>
        <div className="box-content">
          <h2>Free Weights</h2>
          <div className="text-container">
            <p>
              We are well equipped with free weights, boasting two large
              dumbbell racks and many barbell plates. Our Dumbbell Racks go from
              2.5kg to 30kg in 2.5kg increments with dumbbells up to 50kg. We
              have many barbell plates in weights: 1.25kg, 2.5kg, 5kg, 10kg,
              15kg and 20kg.
            </p>
            <br />
            <p>
              We also have an extra dumbbell rack for circuit training with
              dumbbells in 1kg increments from 1kg to 10kg.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="box-content">
          <h2>Weight Machines</h2>
          <div className="text-container">
            <p>
              We have a comprehensive range of weight machines for you to
              isolate each muscle group. Our machines are high quality and well
              maintained. We also have two sets of cables and an assisted pull
              up bar.
            </p>
          </div>
        </div>
        <div className="box-image"></div>
      </div>
      <div className="row">
        <div className="box-image"></div>
        <div className="box-content">
          <h2>Cardio Machines</h2>
          <div className="text-container">
            <p>
              We have cardio machines adequete for your needs, treadmills,
              rowing machines, exercise bikes, whatsabikes and stair steppers.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="box-content">
          <h2>Sunbeds</h2>
          <div className="text-container">
            <p>
              Our sunbeds have high quality bulbs which will certainly give you
              that summer glow at any time of year!
            </p>
          </div>
        </div>
        <div className="box-image"></div>
      </div>
    </div>
  );
};

export default Tiles;
