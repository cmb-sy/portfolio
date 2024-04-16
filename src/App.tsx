import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./componemt/Header/HeaderSection";
import Career from "./componemt/Career/CareerSection";
import HomePage from "./componemt/Home/HomePage";
import About from "./componemt/AboutMe/AboutSection";
import Works from "./componemt/Works/WorksSection";
import Skill from "./componemt/Skill/SkillSection";
import BasicExample from "./componemt/Test/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About />
      <Career />
      <Works />
      <BasicExample />
      <Skill />
    </div>
  );
}

export default App;
