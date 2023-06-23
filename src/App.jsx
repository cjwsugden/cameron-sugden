import { useState, useRef } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Nav from "./comps/Nav.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact";

function App() {
  const homeRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-slate-900 flex flex-col p-5 w-full">
        <Home ref={homeRef} />
        <Experience ref={experienceRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </div>
      <Nav
        scrollToSection={scrollToSection}
        experienceRef={experienceRef}
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </>
  );
}

export default App;
