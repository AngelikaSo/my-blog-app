import React from "react";
import BlogPost from "./BlogPost";

const BlogPostList = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          description={post.description}
        />
      ))}
    </>
  );
};

export default BlogPostList;
