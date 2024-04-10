import React from "react";
import "./App.css";
import Header from "./componemt/Header/HeaderSection";
import Career from "./componemt/Career/CareerSection";
import HomePage from "./componemt/Home/HomePage";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Career />
    </div>
  );
}

export default App;
