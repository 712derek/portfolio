import React, { useState } from "react";
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
import Skills from "./Components/Skills";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
    </>
  );
}

export default App;
