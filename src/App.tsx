import React from "react";
import "./App.css";
import Header from "./componemt/Header/HeaderSection";
import Career from "./componemt/Career/CareerSection";
import HomePage from "./componemt/Home/HomePage";
import About from "./componemt/AboutMe/AboutSection";
import Works from "./componemt/Works/WorksSection";
import Skill from "./componemt/Skill/SkillSection";
import Menu from "./componemt/Test/Menu";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About />
      <Career />
      <Works />
      <Menu title="親メニュー" withIcon={true}>
        <Menu title="子メニュー1" />
        <Menu title="子メニュー2" />
      </Menu>
      <Skill />
    </div>
  );
}

export default App;
