import { MdArrowOutward } from "react-icons/md";

const AboutButton = () => {
  return (
    <>
      <div className="flex items-center mt-4">
        <div>
          <button
            className="overflow-hidden px-6 py-3 rounded-full font-semibold shadow-md text-white bg-black transition-transform duration-400 ease-in-out
        hover:translate-x-12"
          >
            <span className="relative z-20">About AlhenaVentures</span>
          </button>
        </div>
        <div className="bg-black w-12 h-12 p-2 rounded-full flex justify-center items-center">
          <MdArrowOutward className="text-white font-bold" />
        </div>
      </div>
    </>
  );
};

export default AboutButton;
