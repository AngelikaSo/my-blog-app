import React from "react";
const BlogPost = ({ title, description }) => {
  return (
    <section className="flex flex-col items-center lg:px-13.25">
      <div className="p-5 md:px-10 md:py-10 flex flex-col gap-y-2 items-center md:items-start justify-center lg:flex-row-reverse">
        <div className="sm:w-full bg-blue sm:h-72 lg:w-2/4 lg:max-h-80 lg:max-w-80"></div>
        <div className="lg:w-2/4">
          <h1 className="font-semibold sm:text-lg md:text-xl lg:text-2xl">
            {title}
          </h1>
          <p className="text-black sm:text-xs md:text-sm lg:text-base lg:py-10 lg:pr-10">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
