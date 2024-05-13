import PrincipalPost from "./PrincipalPost";
import Post from "./Post";
import "./styles/post.css";
import postsData from "../../posts.json";

const RecentBlog = () => {
  return (
    <section className="pb-16 h-[745px]">
      <h2 className="mb-8 text-2xl font-semibold">Recent blog post</h2>
      <div className="grid grid-cols-2 gap-8">
        <PrincipalPost post={postsData[0]}></PrincipalPost>
        <div className="flex flex-col gap-8 column-post">
          <Post post={postsData[1]}></Post>
          <Post post={postsData[2]}></Post>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
