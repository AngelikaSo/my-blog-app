import React from "react";
import BlogPost from "./BlogPost";

const BlogPostList = ({ posts }) => {
  return (
    <>
      <div className="mb-10">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </>
  );
};

export default BlogPostList;
