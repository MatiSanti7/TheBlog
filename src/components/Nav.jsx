import "./nav.css";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-10/12 m-auto mt-7 mb-7">
      <strong className="text-xl">Matias Santillán</strong>
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
      </ul>
    </nav>
  );
};

export default Nav;
