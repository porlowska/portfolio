// src/pages/index.js
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Welcome />
        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
