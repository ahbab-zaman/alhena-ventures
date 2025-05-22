import innerBanner from "../assets/inner-banner.jpg"
const InnovativeIdea = () => {
  return (
    <div
      className="relative w-full h-[600px] bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white flex items-center justify-start px-12 py-24"
      style={{
        backgroundImage: `url(${innerBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div data-aos="flip-up" className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Text Section */}
        <div className="md:w-2/3">
          <span className="text-lg uppercase tracking-widest">Innovative Idea</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
            “Drawing on the technical expertise of IT professionals to assess and address complex technical!”
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InnovativeIdea;