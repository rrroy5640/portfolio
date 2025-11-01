import { Home } from "./sections/Home";
import { AboutMe } from "./sections/AboutMe";
import { NavBar } from "./components/NavBar";
import { Contact } from "./sections/Contact";
import { PinnedHorizontal } from "./sections/PinnedHorizontal";
import { Footer } from "./components/Footer";
import { AILab } from "./sections/AILab/AILab";

function App() {
  return (
    <main className="relative min-h-screen scroll-smooth bg-[#0b0b10] text-white">
      <NavBar />
      <Home />
      <PinnedHorizontal />
      <AILab />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
