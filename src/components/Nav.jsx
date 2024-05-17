import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles/header.css";

const Nav = ({ toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (path) => {
    setActivePath(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const bars = document.querySelector(".fa-bars");
    const nav = document.querySelector(".nav");
    const body = document.querySelector("body");

    if (isMenuOpen) {
      body.classList.add("overflow-hidden");
    }

    const handleClick = () => {
      nav.classList.toggle("top-0");
      nav.classList.toggle("top-[-100%]");
    };

    if (bars) {
      bars.addEventListener("click", handleClick);
    }

    return () => {
      if (bars) {
        bars.removeEventListener("click", handleClick);
      }
      body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const isActive = (path) => (activePath === path ? "active" : "");

  return (
    <header>
      <nav className="fixed top-0 left-0 flex items-center justify-between w-full px-10 pt-7 pb-7 2xl:px-44 md:px-20 nav-princ">
        <a href="/" className="text-2xl font-bold md:text-xl 2xl:text-4xl">
          Matias Santillán
        </a>
        <div>
          <ul className="hidden gap-3 text-xl lg:gap-10 md:flex">
            <li
              className={`px-2 pb-1 nav-item ${
                isActive("/blog") || isActive("/")
              }`}
            >
              <a href="/blog" onClick={() => handleNavLinkClick("/blog")}>
                Blog
              </a>
            </li>
            <li className={`px-2 pb-1 nav-item ${isActive("/projects")}`}>
              <a
                href="/projects"
                onClick={() => handleNavLinkClick("/projects")}
              >
                Projects
              </a>
            </li>
            <li className={`px-2 pb-1 nav-item ${isActive("/about")}`}>
              <a href="/about" onClick={() => handleNavLinkClick("/about")}>
                About
              </a>
            </li>
            <li className={`px-2 pb-1 nav-item ${isActive("/newsletter")}`}>
              <a
                href="/newsletter"
                onClick={() => handleNavLinkClick("/newsletter")}
              >
                Newsletter
              </a>
            </li>
            <li>
              <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} />
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
          <div className="block text-3xl md:hidden">
            <a href="/" onClick={(e) => e.preventDefault()}>
              <i className="fas fa-bars" onClick={handleMenuToggle}></i>
            </a>
          </div>
        </div>
      </nav>
      <section
        className={`fixed ${
          isMenuOpen ? "top-0" : "top-[-100%]"
        } left-0 flex flex-col items-center justify-end w-full h-screen bg-white nav`}
      >
        <div className="flex flex-col items-center justify-center gap-20 h-5/6">
          <a href="/" className="mb-20 text-3xl font-bold md:text-2xl ">
            Matias Santillán
          </a>
          <ul className="flex flex-col gap-10 text-2xl text-center">
            <li
              className={`h-9 nav-item ${isActive("/blog") || isActive("/")}`}
            >
              <a href="/blog" onClick={() => handleNavLinkClick("/blog")}>
                Blog
              </a>
            </li>
            <li className={`h-9 nav-item ${isActive("/projects")}`}>
              <a
                href="/projects"
                onClick={() => handleNavLinkClick("/projects")}
              >
                Projects
              </a>
            </li>
            <li className={`h-9 nav-item ${isActive("/about")}`}>
              <a href="/about" onClick={() => handleNavLinkClick("/about")}>
                About
              </a>
            </li>
            <li className={`h-9 nav-item ${isActive("/newsletter")}`}>
              <a
                href="/newsletter"
                onClick={() => handleNavLinkClick("/newsletter")}
              >
                Newsletter
              </a>
            </li>
            <li className="flex items-center justify-center scale-150 h-11">
              <label className="scale-125 switch">
                <input type="checkbox" onChange={toggleDarkMode} />
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
        </div>
        <div className="flex items-center h-1/6">
          <i
            className="text-5xl text-center cursor-pointer fa-solid fa-xmark"
            onClick={handleMenuToggle}
          ></i>
        </div>
      </section>
    </header>
  );
};

Nav.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Nav;
