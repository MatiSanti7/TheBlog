const Footer = () => {
  const yearCurrent = new Date().getFullYear();
  return (
    <footer className="flex flex-col-reverse items-center gap-6 pt-20 pb-10 md:items-start md:flex-row md:text-xl">
      <span>© {yearCurrent}</span>
      <ul className="flex flex-col items-center gap-6 md:items-start md:flex-row 2xl:text-xl">
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>
          <a href="">Email</a>
        </li>
        <li>
          <a href="">RSS feed</a>
        </li>
        <li>
          <a href="">Add to Feedly</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
