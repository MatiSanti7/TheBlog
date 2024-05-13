import PropTypes from "prop-types";
import "./styles/header.css";

const Nav = ({ toggleDarkMode }) => {
  return (
    <header>
      <nav className="flex items-center justify-between pt-7 pb-7">
        <strong className="text-3xl">Matias Santillán</strong>
        <ul className="flex gap-10 text-xl">
          <li className="pb-1 pl-2 pr-2 nav-item active">
            <a href="blog.html">Blog</a>
          </li>
          <li className="pb-1 pl-2 pr-2 nav-item">
            <a href="projects.html">Projects</a>
          </li>
          <li className="pb-1 pl-2 pr-2 nav-item">
            <a href="about.html">About</a>
          </li>
          <li className="pb-1 pl-2 pr-2 nav-item">
            <a href="newsletter.html">Newsletter</a>
          </li>
          <li>
            <label className="switch">
              <input type="checkbox" onChange={toggleDarkMode} />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </nav>
      <hr className="mt-10" />
      <h1 className="font-bold text-center">THE BLOG</h1>
      <hr className="mb-10" />
    </header>
  );
};

Nav.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Nav;
