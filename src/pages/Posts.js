import React, { useState, useEffect } from "react";
import BlogPostList from "../components/BlogPostList";
import blogPostsData from "../data-2.json";

const Posts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogPostsData);
  }, []);

  return <>{blogPosts.length > 0 && <BlogPostList posts={blogPosts} />}</>;
};

export default Posts;
