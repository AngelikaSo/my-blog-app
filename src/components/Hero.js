const Hero = () => {
  return (
    <section className="flex flex-col items-center lg:px-13.25">
      <div className="w-full bg-blue sm:h-25 md:h-25 lg:h-28.75 relative flex justify-center lg:justify-end lg:pr-10">
        <button className="bg-red rounded-full text-white px-11 py-2 absolute bottom-14 font-semibold text-xs lg:text-base">
          Read
        </button>
      </div>
      <div className="bg-light-blue sm:h-48 md:h-48 h-52 px-6 py-11">
        <p className="text-white ">
          Your Ultimate Cooking Destination At Cook with me, we believe that
          cooking is an art, and every meal has the power to bring people
          together. Whether you're a seasoned home chef or just starting your
          culinary journey, our collection of delicious recipes is designed to
          inspire you to create unforgettable dishes.
        </p>
      </div>
    </section>
  );
};

export default Hero;
