import React from "react";

import Topline from "./Sections/Topline";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Tiles from "./Sections/Tiles";
import Trainers from "./Sections/Trainers";
import Gallery from "./Sections/Gallery";
import CTA from "./Sections/CTA"
import Footer from "./Sections/Footer";

import "./App.css";

const App = () => {
  return (
    <div id="top">
      <Topline />
      <Hero />
      <About />
      <Tiles />
      <Trainers />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
