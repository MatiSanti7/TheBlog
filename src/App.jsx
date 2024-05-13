import { useState } from "react";
import Header from "./components/Header";
import Blog from "./components/Blog";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"} px-44`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Blog></Blog>
    </div>
  );
};

export default App;
