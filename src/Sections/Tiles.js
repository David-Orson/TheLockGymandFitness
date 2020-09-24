import React from "react";

import "../css/Tiles.css";

const Tiles = () => {
  return (
    <div class="tiles">
      <div className="row">
        <div className="box-image"></div>
        <div className="box-content"></div>
      </div>
      <div className="row">
        <div className="box-content"></div>
        <div className="box-image"></div>
      </div>
    </div>
  );
};

export default Tiles;
