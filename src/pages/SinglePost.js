import { useParams } from "react-router-dom";
import React from "react";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SinglePost = ({ posts, ingridients }) => {
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
        <div className="flex flex-col  text-white px-6 lg:px-13.25 bg-light-blue sm:h-72 justify-center">
          <div className="w-full">
            <h2>Ingredients</h2>
            <ul className="list-disc">
              {post.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col  px-6 lg:px-13.25 sm:h-72 justify-center">
          <h2>Instructions</h2>
          <ul className="list-disc">
            {post.instructions.map((instructions, index) => (
              <li key={index}>{instructions}</li>
            ))}
          </ul>
        </div>
        <Footer />
      </section>
    );
};

export default SinglePost;
