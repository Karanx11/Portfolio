import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Achievements from "./pages/Achievements";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <BottomNav />

      <main className="pt-5 pb-32">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;
