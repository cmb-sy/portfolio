import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./componemt/Header/HeaderSection";
import HomePage from "./componemt/Home/HomePage";
import About from "./componemt/AboutMe/AboutSection";
import Works from "./componemt/Works/WorksSection";
import Skill from "./componemt/Skill/SkillSection";
import BasicExample from "./componemt/Test/Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/abc" element={<BasicExample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
