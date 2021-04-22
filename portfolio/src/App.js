import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Lead from "./Components/Lead";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import GlobalStyle from "./globalStyles";
import Dropdown from "./Components/Dropdown";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import SocialBar from "./Components/SocialBar";
import { projectData } from "./data/ProjectData";
import ContactForm from "./Components/ContactForm";
import Spinner from "./Components/Spinner";
import Skills from "./Components/Skills";

// intersection observer
const useElementOnScreen = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const containerRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting === true) {
      const intersectedElement = entry.target.className;
      console.log("IS" + intersectedElement);
      const activeAnchor = document
        .querySelector(`[data-page=${intersectedElement}]`)
        .classList.add("mystyle");
      console.log("activeAnchor" + activeAnchor);
      console.log("entryintersect" + entry.isIntersecting);
    }
    if (entry.isIntersecting === false) {
      const intersectedElement = entry.target.className;
      const activeAnchor = document
        .querySelector(`[data-page=${intersectedElement}]`)
        .classList.remove("mystyle");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return containerRef;
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // intersection observer
  const leadRef = useElementOnScreen();
  const aboutRef = useElementOnScreen();
  const experienceRef = useElementOnScreen();
  const projectsRef = useElementOnScreen();
  const educationRef = useElementOnScreen();
  const skillsRef = useElementOnScreen();
  const constactRef = useElementOnScreen();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="App">
          <GlobalStyle />
          <Router>
            <Navbar toggle={toggle} />
            {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
            <Lead ref={leadRef} />
            <SocialBar />
            <About ref={aboutRef} className="about" component={About} />
            <Experience ref={experienceRef} className="experience" />
            <Projects
              ref={projectsRef}
              className="projects"
              slides={projectData}
            />
            <Education ref={educationRef} />
            <Skills ref={skillsRef} />
            <ContactForm ref={constactRef} />
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
