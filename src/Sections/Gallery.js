import React, { useState } from "react";

import "../css/Gallery.css";

import Gallery1 from "../Assets/Gallery1.jpg"
import Gallery2 from "../Assets/Gallery2.jpg"
import Gallery3 from "../Assets/Gallery3.jpg"
import Gallery4 from "../Assets/Gallery4.jpg"
import Gallery5 from "../Assets/Gallery5.jpg"
import Gallery6 from "../Assets/Gallery6.jpg"
import Gallery7 from "../Assets/Gallery7.jpg"
import Gallery8 from "../Assets/Gallery8.jpg"
import Gallery9 from "../Assets/Gallery9.jpg"
import Gallery10 from "../Assets/Gallery10.jpg"
import Gallery11 from "../Assets/Gallery11.jpg"
import Gallery12 from "../Assets/Gallery12.jpg"
import Gallery13 from "../Assets/Gallery13.jpg"
import Gallery14 from "../Assets/Gallery14.jpg"
import Gallery15 from "../Assets/Gallery15.jpg"
import Gallery16 from "../Assets/Gallery16.jpg"


const Gallery = () => {
  const [imageSelector, setImageSelector] = useState(0);

  const imageArray = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9, Gallery10, Gallery11, Gallery12, Gallery13, Gallery14, Gallery15, Gallery16]

  const nextImage = () => {
    if (imageSelector === 15) {
      setImageSelector(0)
    } else {
      setImageSelector(imageSelector + 1)
    }
  }

  const prevImage = () => {
    if (imageSelector === 0) {
      setImageSelector(15)
    } else {
      setImageSelector(imageSelector - 1)
    }
  }

  return (
    <div id="gallery" class="gallery">
      <h2>Gallery</h2>
      <div className="container">
        <div className="photo-container">
          <div className="dummy">
            <div className="left-arrow" onClick={prevImage}>{"<"}</div>
            <div className="right-arrow" onClick={nextImage}>{">"}</div>
            <img src={imageArray[imageSelector]} className="gallery-img" />
            
          </div>
          {/* <p>
            Caption asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf
            asdf asdf asdf
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
