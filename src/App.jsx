import { Element } from "react-scroll";
import { Home } from "./sections/Home";
import { AboutMe } from "./sections/AboutMe";
import { NavBar } from "./components/NavBar";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Element name="home" className="element">
        <Home />
      </Element>
      <div className="h-32 bg-gradient-to-b from-black to-slate-700"></div>
      <Element name="aboutme" className="element">
        <AboutMe />
      </Element>
      <div className="h-32 bg-gradient-to-b from-slate-700 bg-cyan-800"></div>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </>
  );
}

export default App;
