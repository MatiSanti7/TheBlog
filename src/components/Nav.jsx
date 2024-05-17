import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles/header.css";

const Nav = ({ toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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

  return (
    <header>
      <nav className="fixed top-0 left-0 flex items-center justify-between w-full px-10 pt-7 pb-7 2xl:px-44 md:px-20 nav-princ">
        <strong className="text-2xl md:text-xl 2xl:text-4xl">
          Matias Santillán
        </strong>
        <div>
          <ul className="hidden gap-1 text-xl lg:gap-10 md:flex">
            <li className="px-2 pb-1 nav-item active">
              <a href="/blog">Blog</a>
            </li>
            <li className="px-2 pb-1 nav-item">
              <a href="/projects">Projects</a>
            </li>
            <li className="px-2 pb-1 nav-item">
              <a href="/about">About</a>
            </li>
            <li className="px-2 pb-1 nav-item">
              <a href="/newsletter">Newsletter</a>
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
        <strong className="mb-20 text-3xl md:text-xl">Matias Santillán</strong>
        <ul className="flex flex-col gap-6 text-3xl text-center">
          <li className="h-11 nav-item active">
            <a href="/blog">Blog</a>
          </li>
          <li className=" h-11 nav-item">
            <a href="/projects">Projects</a>
          </li>
          <li className=" h-11 nav-item">
            <a href="/about">About</a>
          </li>
          <li className=" h-11 nav-item">
            <a href="/newsletter">Newsletter</a>
          </li>
          <li>
            <label className="switch">
              <input type="checkbox" onChange={toggleDarkMode} />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
        <a href="/" onClick={(e) => e.preventDefault()}>
          <i
            className="pt-40 pb-20 text-5xl fa-solid fa-xmark"
            onClick={handleMenuToggle}
          ></i>
        </a>
      </section>
    </header>
  );
};

Nav.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Nav;
