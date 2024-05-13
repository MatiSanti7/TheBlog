import PropTypes from "prop-types";

const Post = ({ post }) => {
  const { image, title, author, date, description, categories } = post;

  return (
    <div className="grid grid-cols-2 gap-5">
      <img src={image} alt="" />
      <div>
        <small className="text-sm font-semibold text-[#6941C6]">
          {author} • {date}
        </small>
        <a href="">
          <h3 className="py-2 text-2xl font-semibold">{title}</h3>
        </a>
        <p className="text-xl text-[#667085] font-normal mb-6">{description}</p>
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
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Post;
