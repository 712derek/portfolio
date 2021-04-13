import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Lead from "./Components/Lead";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import GlobalStyle from "./globalStyles";
import Dropdown from "./Components/Dropdown";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import SocialBar from "./Components/SocialBar";
import { projectData } from "./data/ProjectData";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        {show ? <Navbar toggle={toggle} /> : null}
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Lead />
        <SocialBar />
        <About path="/about" component={About} />
        <Experience path="/experience" />
        <Projects slides={projectData} />
        <Education />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
