import React from "react";
import "./App.css";
import Header from "./componemt/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./componemt/Products";
import HomePage from "./componemt/HomePage";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
