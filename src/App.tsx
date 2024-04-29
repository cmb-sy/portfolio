import "./App.css";

import Header from "./componemt/Header/HeaderSection";
// import Home from "./componemt/Home/HomeSection";
import About from "./componemt/AboutMe/AboutSection";
import Career from "./componemt/Career/CareerSection";
import Works from "./componemt/Works/WorksSection";
import BasicExample from "./componemt/Test/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <About />
      <Career />
      <Works />
      <BasicExample />
    </div>
  );
}

export default App;
