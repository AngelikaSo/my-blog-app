import { useParams } from "react-router-dom";
import React from "react";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SinglePost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  } else
    return (
      <section>
        <Header />
        <div>
          <BlogPost title={post.title} description={post.description} />
        </div>
        <div className="flex flex-col lg:px-13.25">
          <div className="w-full text-white px-16 py-10 bg-light-blue">
            <h2 className="pb-2 font-bold">Ingredients</h2>
            <ul className="list-disc">
              {post.ingredients.map((ingredients, index) => (
                <li key={index}>{ingredients}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:px-13.25">
          <div className="flex flex-col px-16 py-10  bg-main">
            <h2 className="pb-2 font-bold">Instructions</h2>
            <ul className="list-disc">
              {post.instructions.map((instructions, index) => (
                <li key={index}>{instructions}</li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </section>
    );
};

export default SinglePost;
