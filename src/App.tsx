import React from "react";
import "./App.css";
import Header from "./componemt/HeaderComponent/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./pages/BackgroundPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/background" element={<Background />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
