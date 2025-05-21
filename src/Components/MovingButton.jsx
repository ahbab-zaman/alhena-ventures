import { MdArrowOutward } from "react-icons/md";

const MovingButton = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div>
          <button
            className="overflow-hidden px-6 py-3 rounded-full font-semibold shadow-md text-black bg-yellow-400 transition-transform duration-400 ease-in-out
        hover:translate-x-12"
          >
            <span className="relative z-20">Schedule a Call</span>
          </button>
        </div>
        <div className="bg-yellow-400 w-10 h-10 p-2 rounded-full flex justify-center items-center">
          <MdArrowOutward className="text-black font-bold" />
        </div>
      </div>
    </>
  );
};

export default MovingButton;
