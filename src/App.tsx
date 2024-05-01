import "./App.css";

import Header from "./componemt/Header/HeaderSection";
import Home from "./componemt/Home/HomeSection";
import About from "./componemt/AboutMe/AboutSection";
import Career from "./componemt/Career/CareerSection";
import Work from "./componemt/Works/WorksSection";
import Skill from "./componemt/Skill/SkillSection";
import Footer from "./componemt/Footer/FooterSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Career />
      <Work />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
