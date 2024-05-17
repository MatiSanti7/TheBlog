import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Newsletter from "./components/Newsletter";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div
        className={`${
          darkMode ? "dark-mode" : "light-mode"
        } 2xl:px-44 md:px-20 px-10 pt-28`}
      >
        <Nav toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
