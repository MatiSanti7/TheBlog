import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { image, title, author, date, description, categories } = post;

  return (
    <div className="grid md:grid-cols-2 md:gap-5">
      <img src={image} alt="" className="w-full" />
      <div className="mt-4 md:mt-0">
        <small className="2xl:text-base md:text-lg text-xl font-semibold text-[#6941C6]">
          {author} • {date}
        </small>
        <Link to={{ pathname: "/detail-blog", state: { post } }}>
          <h3 className="py-2 text-3xl font-semibold">{title}</h3>
        </Link>
        <p className="text-xl text-[#667085] font-normal mb-6">{description}</p>
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
