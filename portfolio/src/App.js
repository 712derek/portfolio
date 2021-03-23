import "./App.css";
import Navbar from "./Components/Navbar";
import Lead from "./Components/Lead";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Lead />
        <About />
        <Experience />
        <Projects />
      </Router>
    </div>
  );
}

export default App;
