import PostBlog from "../Blog/PostBlog";
import Heading from "../Newsletter/Heading";
import dataPost from "../../../posts.json";

const index = () => {
  const postBlogs = dataPost.slice(4, 7);
  return (
    <div>
      <Heading></Heading>
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
