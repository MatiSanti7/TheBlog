import { useState } from "react";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default App;
