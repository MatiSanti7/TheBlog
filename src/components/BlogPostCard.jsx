import PropTypes from "prop-types";
import iconWrap from "../assets/img/Icon-wrap.svg";

const BlogPostCard = ({ post }) => {
  const { image, title, author, date, description, categories } = post;
  return (
    <section className="grid grid-cols-2 gap-8">
      <img src={image} alt={title} />
      <div>
        <small className="text-base font-semibold text-[#6941C6]">
          {author} • {date}
        </small>
        <a href="#" className="flex items-center justify-between">
          <h3 className="py-2 text-3xl font-semibold">{title}</h3>
          <img
            src={iconWrap}
            alt=""
            className="text-[#2f2f2f] w-10 icon-wrap"
          />
        </a>
        <p className="text-[22px] text-[#667085] font-normal mb-6">
          {description}
        </p>
        <ul className="flex gap-4">
          {categories.map((cat, index) => {
            const numRandom = Math.floor(Math.random() * 7) + 1;
            return (
              <li className={`text-lg cat color-${numRandom}`} key={index}>
                {cat}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

BlogPostCard.propTypes = {
  post: {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  },
};

export default BlogPostCard;
