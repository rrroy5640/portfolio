import { Element } from "react-scroll";
import { Home } from "./sections/Home";
import { AboutMe } from "./sections/AboutMe";
import { NavBar } from "./components/NavBar";

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
    </>
  );
}

export default App;
