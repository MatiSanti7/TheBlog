import { useState } from "react";
import Nav from "./components/Nav";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "dark-mode" : "light-mode"
      } 2xl:px-44 md:px-20 px-10 pt-28`}
    >
      <Nav toggleDarkMode={toggleDarkMode} />
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default App;
