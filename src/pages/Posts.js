import React, { useState, useEffect } from "react";
import BlogPostList from "../components/BlogPostList";
import blogPostsData from "../data-2.json";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Posts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogPostsData);
  }, []);

  return (
    <>
      <Header />
      <div>{blogPosts.length > 0 && <BlogPostList posts={blogPosts} />}</div>
      <Footer />
    </>
  );
};

export default Posts;
