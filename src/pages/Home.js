import React, { useState, useEffect } from "react";
import BlogPostList from "../components/BlogPostList";
import Hero from "../components/Hero";
import blogPostsData from "../data-2.json";

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogPostsData);
  }, []);

  return (
    <>
      <Hero />
      {blogPosts.length > 0 && <BlogPostList posts={blogPosts.slice(0, 2)} />}
    </>
  );
};

export default Home;
