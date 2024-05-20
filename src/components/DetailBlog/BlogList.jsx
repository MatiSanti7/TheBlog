import postData from "../../../posts.json";
import { Link } from "react-router-dom";

const BlogList = () => {
  const recentPost = postData.slice(0, 7);
  return (
    <>
      {recentPost.map((post, index) => (
        <div key={index}>
          <img
            src={post.image}
            alt=""
            className="object-cover md:w-full md:h-[190px] h-1/3"
          />
          <div className="mt-2">
            <small className="2xl:text-base md:text-lg text-xl font-semibold text-[#6941C6] ">
              {post.author} • {post.date}
            </small>
            <Link
              to={{ pathname: "/detail-blog", state: { post } }}
              className="flex items-start justify-between"
            >
              <h3 className="w-11/12 py-2 text-3xl font-semibold">
                {post.title}
              </h3>
              <i className="pt-2 text-3xl fa-solid fa-up-right-from-square"></i>
            </Link>
            <p className="text-[22px] text-[#667085] font-normal mb-6">
              {post.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {post.categories.map((cat, catIndex) => {
                const numRandom = Math.floor(Math.random() * 8) + 1;
                return (
                  <li
                    className={`text-base cat color-${numRandom}`}
                    key={catIndex}
                  >
                    {cat}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
