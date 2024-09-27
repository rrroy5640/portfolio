import { Element } from "react-scroll";
import { Home } from "./sections/Home";
import { AboutMe } from "./sections/AboutMe";
import { NavBar } from "./components/NavBar";
import { Contact } from "./sections/Contact";
import { Project } from "./sections/Project";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Element name="home" className="element">
        <Home />
      </Element>
      <div className="h-12 bg-slate-900"></div>
      <Element name="aboutme" className="element">
        <AboutMe />
      </Element>
      <div className="h-12 bg-slate-900"></div>
      <Element name="projects" className="element">
        <Project />
      </Element>
      <div className="h-12 bg-black"></div>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
