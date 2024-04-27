import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./componemt/Header/HeaderSection";
import HomePage from "./componemt/Home/HomePage";
import About from "./componemt/AboutMe/AboutSection";
import Works from "./componemt/Works/WorksSection";
import BasicExample from "./componemt/Test/Menu";
import Career from "./componemt/Career/CareerSection";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/skills" element={<BasicExample />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
