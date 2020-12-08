import React from "react";

import "../css/CTA.css";

const CTA = () => {

  

  return <div class="cta">
    <div className="details">
    <p>The Lock Gym and Fitness</p>
    <p >Bridge Place</p>
    <p >Cuckoo Wharf, Worksop S80 1DT</p>
    <p>07534 318971</p>
    </div>
    <div className="signup-container">
      <p className="cta-text">Ready to begin?</p>
    <a className="cta-button" href="https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=GRCK3" target="_blank">SIGN UP</a>
    </div>
    <div className="hours-container">
    <p>Opening Hours</p>
    <div className="hours"><p>Monday:</p><p>06:00 - 21:00</p></div>
    <div className="hours"><p>Tuesday:</p><p>06:00 - 21:00</p></div>
    <div className="hours"><p>Wednesday:</p><p>06:00 - 21:00</p></div>
    <div className="hours"><p>Thursday:</p><p>06:00 - 21:00</p></div>
    <div className="hours"><p>Friday:</p><p>06:00 - 21:00</p></div>
    <div className="hours"><p>Saturday:</p><p>08:00 - 16:00</p></div>
    <div className="hours"><p>Sunday:</p><p>09:00 - 14:00</p></div>
    </div>
    
  </div>;
};

export default CTA;