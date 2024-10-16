import { Link } from "react-router-dom";

import React from "react";
const BlogPost = ({ id, title, description }) => {
  return (
    <section className="flex flex-col lg:px-13.25">
      <Link to={`/post/${id}`}>
        <div className="p-5 md:px-10 md:py-10 flex flex-col gap-y-2 items-center  justify-center lg:flex-row-reverse bg-main">
          <div className="sm:w-full bg-blue sm:h-72 lg:w-2/4 lg:max-h-80 lg:max-w-80"></div>
          <div className="lg:w-2/4">
            <h1 className="font-semibold sm:text-lg md:text-xl lg:text-2xl">
              {title}
            </h1>
            <p className="text-black sm:text-xs md:text-sm lg:text-base lg:py-10 lg:pr-10 mt-3">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default BlogPost;
