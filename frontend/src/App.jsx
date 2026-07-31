import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      {/* Animated  Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <BottomNav />

        <main className="pt-5 pb-32">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default App;