import { useState } from "react";
import dataPosts from "../../../posts.json";
import PostBlog from "./PostBlog";

const postsPerPage = 6;

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataPosts.slice(
    indexOfFirstPost + 4,
    indexOfLastPost + 4
  );
  const totalPages = Math.ceil(dataPosts.length / postsPerPage) - 1;

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <h2 className="mb-8 text-2xl font-semibold">All blog posts</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {currentPosts.map((post) => (
          <PostBlog post={post} key={post.id}></PostBlog>
        ))}
      </div>
      <div className="flex items-center justify-center gap-10 py-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="py-1 text-2xl px-7 bg-slate-200 rounded-3xl"
        >
          Prev
        </button>
        <ul className="flex gap-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => setPage(index + 1)}
                className={`text-2xl ${
                  currentPage === index + 1
                    ? "font-bold bg-gray-400 text-white"
                    : "font-normal bg-gray-200"
                } rounded-full px-3 py-1`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="py-1 text-2xl px-7 bg-slate-200 rounded-3xl"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AllBlogs;
