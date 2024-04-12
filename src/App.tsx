import React from "react";
import "./App.css";
import Header from "./componemt/Header/HeaderSection";
import Career from "./componemt/Career/CareerSection";
import HomePage from "./componemt/Home/HomePage";
import About from "./componemt/AboutMe/AboutSection";
import Works from "./componemt/Works/WorksSection";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About />
      <Career />
      <Works />
    </div>
  );
}

export default App;
