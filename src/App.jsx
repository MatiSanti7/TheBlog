import { useState } from "react";
import Nav from "./components/Nav";
import Blog from "./components/Blog/Blog";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"} px-44`}>
      <Nav toggleDarkMode={toggleDarkMode} />
      <Blog></Blog>
    </div>
  );
};

export default App;
