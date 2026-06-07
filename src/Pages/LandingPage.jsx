import { Home } from "../components/Home";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";
import { Contact } from "../components/Contact";

export default function LandingPage() {
  return (
    <>
      <section id="home" className="scroll-mt-20">
        <Home />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      <section id="project" className="scroll-mt-20">
        <Project />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </>
  );
}