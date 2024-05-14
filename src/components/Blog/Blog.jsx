import RecentBlog from "./RecentBlog";
import AllBlogs from "./AllBlogs";

const Blog = () => {
  return (
    <>
      <hr className="h-0.5 bg-[#2f2f2f]" />
      <h1 className="font-bold text-center 2xl:text-[220px] 2xl:leading-[270px] md:text-[120px] md:leading-[170px] text-5xl">
        THE BLOG
      </h1>
      <hr className="mb-10 h-0.5 bg-[#2f2f2f]" />
      <RecentBlog></RecentBlog>
      <AllBlogs></AllBlogs>
    </>
  );
};

export default Blog;
