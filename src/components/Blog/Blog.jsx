import RecentBlog from "./RecentBlog";
import AllBlogs from "./AllBlogs";

const Blog = () => {
  return (
    <>
      <hr className="mt-10" />
      <h1 className="font-bold text-center">THE BLOG</h1>
      <hr className="mb-10" />
      <RecentBlog></RecentBlog>
      <AllBlogs></AllBlogs>
    </>
  );
};

export default Blog;
