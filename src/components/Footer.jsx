const Footer = () => {
  const yearCurrent = new Date().getFullYear();
  return (
    <footer>
      <ul className="flex gap-6 py-8 text-xl">
        <li>
          <span>© {yearCurrent}</span>
        </li>
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
