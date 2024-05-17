import PostBlog from "../Blog/PostBlog";
import dataPost from "../../../posts.json";

const index = () => {
  const postBlogs = dataPost.slice(4, 7);
  return (
    <div>
      <div className="mb-10 heading">
        <div className="mb-10 text-center">
          <small className="md:text-xl text-lg font-semibold text-[#6941C6]">
            Newsletters
          </small>
          <h1 className="mt-3 mb-6 text-5xl font-semibold">
            Stories and interviews
          </h1>
          <p className="xl:text-xl text-lg text-[#667085] xl:w-5/12 w-11/12 mx-auto">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>
        <form action="" className="w-3/4 mx-auto sm:w-2/3 xl:w-1/3">
          <div className="flex flex-col gap-0 mb-2 sm:gap-4 sm:flex-row">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="w-full h-12 px-5 mb-2 text-base bg-gray-200 sm:w-2/3"
            />
            <button
              type="submit"
              className=" text-xl sm:w-1/3 w-full h-12 bg-[#6941C6] text-white"
            >
              Suscribe
            </button>
          </div>
          <p className="text-sm">
            We care about yor data in our privacity policy
          </p>
        </form>
      </div>
      <div className="post-blog">
        <h2 className="pt-4 pb-8 text-2xl font-semibold ">Blog posts</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {postBlogs.map((post) => (
            <PostBlog post={post} key={post.id}></PostBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
