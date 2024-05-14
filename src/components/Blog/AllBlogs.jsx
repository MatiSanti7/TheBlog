import { useState, useRef } from "react";
import dataPosts from "../../../posts.json";
import PostBlog from "./PostBlog";

const postsPerPage = 6;

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataPosts.slice(
    indexOfFirstPost + 4,
    indexOfLastPost + 4
  );
  const totalPages = Math.ceil(dataPosts.length / postsPerPage) - 1;

  const scrollToTop = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    scrollToTop();
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    scrollToTop();
  };

  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  return (
    <section ref={sectionRef}>
      <h2 className="pt-4 pb-8 text-2xl font-semibold ">All blog posts</h2>
      <div className="grid 2xl:gap-x-10 md:gap-10 2xl:grid-rows-2 2xl:grid-cols-3 md:grid-cols-2 md:grid-rows-3 gap-y-10">
        {currentPosts.map((post) => (
          <PostBlog post={post} key={post.id}></PostBlog>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:gap-0">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`py-1 2xl:text-2xl md:text-lg text-xl px-7 rounded-3xl text-neutral-400 ${
            currentPage === 1 ? "cursor-not-allowed opacity-25" : ""
          }`}
        >
          <i className="mr-5 fa-solid fa-arrow-left"></i>
          Previous
        </button>
        <ul className="flex gap-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => setPage(index + 1)}
                className={`2xl:text-2xl md:text-lg text-xl ${
                  currentPage === index + 1
                    ? "font-bold bg-gray-400 text-white rounded-xl"
                    : "font-normal "
                }  px-3 py-1`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`py-1 2xl:text-2xl md:text-lg text-xl px-7 rounded-3xl text-neutral-400 ${
            currentPage === totalPages ? "cursor-not-allowed opacity-25" : ""
          }`}
        >
          Next
          <i className="ml-5 fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default AllBlogs;
