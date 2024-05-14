import PrincipalPost from "./PrincipalPost";
import Post from "./Post";
import BlogPostCard from "./BlogPostCard";
import "../styles/post.css";
import postsData from "../../../posts.json";

const RecentBlog = () => {
  return (
    <section className="pb-12">
      <h2 className="pb-8 text-2xl font-semibold">Recent blog post</h2>
      <div className="gap-8 mb-16 2xl:grid 2xl:grid-cols-2">
        <PrincipalPost post={postsData[0]}></PrincipalPost>
        <div className="flex flex-col gap-8 column-post">
          <Post post={postsData[1]}></Post>
          <Post post={postsData[2]}></Post>
        </div>
      </div>
      <BlogPostCard post={postsData[3]}></BlogPostCard>
    </section>
  );
};

export default RecentBlog;
