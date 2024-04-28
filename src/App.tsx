import "./App.css";

import Header from "./componemt/Header/HeaderSection";
import About from "./componemt/AboutMe/AboutSection";
import Works from "./componemt/Works/WorksSection";
import BasicExample from "./componemt/Test/Menu";
import Career from "./componemt/Career/CareerSection";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Career />
      <Works />
      <BasicExample />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
