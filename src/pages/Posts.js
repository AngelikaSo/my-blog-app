import BlogPostList from "../components/BlogPostList";
import blogPostsData from "../data-2.json";

const Posts = () => {
  return (
    <>{blogPostsData.length > 0 && <BlogPostList posts={blogPostsData} />}</>
  );
};

export default Posts;
