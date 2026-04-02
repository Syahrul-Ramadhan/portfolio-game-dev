import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function Home() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen md:px-20">
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default Home;
