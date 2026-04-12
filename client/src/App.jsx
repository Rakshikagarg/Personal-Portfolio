import './styles/global.css';
import useCursor from './hooks/useCursor';
import useScrollReveal from './hooks/useScrollReveal';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useCursor();
  useScrollReveal();

  return (
    <>
      {/* Custom cursor elements */}
      <div className="cursor" id="cursor-dot" />
      <div className="cursor-ring" id="cursor-ring" />

      <div className="app-shell">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
