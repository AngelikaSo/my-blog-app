import React from "react";
import BlogPost from "./BlogPost";

const BlogPostList = ({ posts }) => {
  return (
    <>
      <div>
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            id={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </>
  );
};

export default BlogPostList;
