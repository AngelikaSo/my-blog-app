const PrimaryButton = ({ title }) => {
  return (
    <button className="bg-red rounded-full text-white px-11 py-2  font-semibold text-xs lg:text-base">
      {title}
    </button>
  );
};

export default PrimaryButton;
