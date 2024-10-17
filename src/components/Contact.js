import PrimaryButton from "./button/PrimaryButton";

const Contact = () => {
  return (
    <section className="flex flex-col lg:px-13.25">
      <div className="flex flex-col justify-between bg-light-blue px-6 py-6 w-full contend-end">
        <h1 className="text-white font-semibold sm:text-lg md:text-xl lg:text-2xl">
          Join the Discussion
        </h1>
        <p className="text-white sm:text-xs md:text-sm lg:text-base mt-6 sm:w-80 md:w-31 lg:w-37">
          Share Your Thoughts & Tips At Flavor Feast, we believe that cooking is
          best enjoyed as a shared experience. Whether you’ve tried one of our
          recipes or have your own tips to make them even better, we’d love to
          hear from you! Join our vibrant community of home cooks and food
          lovers by sharing your thoughts, questions, or tips below.
        </p>
        <div className="flex justify-center mt-8">
          <PrimaryButton title="Email Me" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
