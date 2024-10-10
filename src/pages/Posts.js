import React, { useState, useEffect } from "react";
import BlogPostList from "../components/BlogPostList";
import blogPostsData from "../data-2.json";
import Footer from "../components/Footer";

const Posts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogPostsData);
  }, []);

  return (
    <>
      <div>{blogPosts.length > 0 && <BlogPostList posts={blogPosts} />}</div>;
      <Footer />;
    </>
  );
};

export default Posts;
