import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Lead from "./Components/Lead";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import GlobalStyle from "./globalStyles";
import Dropdown from "./Components/Dropdown";
import Education from "./Components/Education";
import SocialBar from "./Components/SocialBar";
import { projectData } from "./data/ProjectData";
import ContactForm from "./Components/ContactForm";
import Spinner from "./Components/Spinner";
import Skills from "./Components/Skills";
import ScrollSnap from "scroll-snap";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Lead />
            <SocialBar />
            <About component={About} />
            <Experience />
            <Projects slides={projectData} />
            <Education />
            <Skills />
            <ContactForm />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
