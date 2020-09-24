import React from "react";

import Topline from "./Sections/Topline";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Tiles from "./Sections/Tiles";
import Trainers from "./Sections/Trainers";
import Gallery from "./Sections/Gallery";

import Footer from "./Sections/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <Topline />
      <Hero />
      <About />
      <Tiles />
      <Trainers />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
