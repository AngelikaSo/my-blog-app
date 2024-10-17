import BlogPostList from "../components/BlogPostList";
import Hero from "../components/Hero";
import blogPostsData from "../data-2.json";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      {blogPostsData.length > 0 && (
        <BlogPostList posts={blogPostsData.slice(0, 2)} />
      )}
      <Contact />
    </>
  );
};

export default Home;
