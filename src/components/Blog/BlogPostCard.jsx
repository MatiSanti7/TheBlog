import PropTypes from "prop-types";

const BlogPostCard = ({ post }) => {
  const { image, title, author, date, description, categories } = post;
  return (
    <div className="grid-cols-2 gap-8 2xl:grid">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-56 md:h-auto"
      />
      <div className="mt-5">
        <small className="2xl:text-base md:text-lg text-xl font-semibold text-[#6941C6]">
          {author} • {date}
        </small>
        <a href="#" className="flex justify-between">
          <h3 className="py-2 text-3xl font-semibold">{title}</h3>
          <i className="pt-2 text-3xl fa-solid fa-up-right-from-square"></i>
        </a>
        <p className="text-[22px] text-[#667085] font-normal mb-6">
          {description}
        </p>
        <ul className="flex flex-wrap gap-4">
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
    </div>
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
