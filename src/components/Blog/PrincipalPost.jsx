import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PrincipalPost = ({ post }) => {
  const { image, title, author, date, description, categories } = post;

  return (
    <div className="mb-8 principal-post">
      <img
        src={image}
        alt="img-principal"
        className="object-cover w-full h-56 mb-7 md:h-auto"
      />
      <small className="2xl:text-base md:text-lg text-xl font-semibold text-[#6941C6]">
        {author} • {date}
      </small>
      <Link
        to={{ pathname: "/detail-blog", state: { post } }}
        className="flex justify-between"
      >
        <h3 className="py-2 text-3xl font-semibold">{title}</h3>
        <i className="pt-2 text-3xl fa-solid fa-up-right-from-square"></i>
      </Link>
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
  );
};

PrincipalPost.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PrincipalPost;
