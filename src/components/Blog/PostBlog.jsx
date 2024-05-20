import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostBlog = ({ post }) => {
  const { image, title, author, date, description, categories } = post;
  return (
    <div className="flex flex-col gap-5 h-min">
      <img
        src={image}
        alt=""
        className="object-cover md:w-full md:h-[290px] h-1/3"
      />
      <div>
        <small className="2xl:text-base md:text-lg text-xl font-semibold text-[#6941C6]">
          {author} • {date}
        </small>
        <Link
          to={{ pathname: "/detail-blog", state: { post } }}
          className="flex items-start justify-between"
        >
          <h3 className="w-11/12 py-2 text-3xl font-semibold">{title}</h3>
          <i className="pt-2 text-3xl fa-solid fa-up-right-from-square"></i>
        </Link>
        <p className="text-[22px] text-[#667085] font-normal mb-6">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {categories.map((cat, index) => {
            const numRandom = Math.floor(Math.random() * 8) + 1;
            return (
              <li className={`text-base cat color-${numRandom}`} key={index}>
                {cat}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

PostBlog.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PostBlog;
