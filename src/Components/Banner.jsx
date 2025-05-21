import banner from "../assets/banner-bg.png";
import MovingButton from "./MovingButton";
import MovingImage from "./MovingImage";
const Banner = () => {
  return (
    <div
      className="lg:h-[600px] h-[420px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${banner}), linear-gradient(#1A1A1A, #1A1A1A)`,
      }}
    >
      <section className="flex justify-between items-center lg:py-40 py-5 px-12">
        <div className="lg:w-1/2 w-full">
          <div className="lg:text-[70px] text-[38px]">
            <h1 className="font-[700]" data-aos="flip-up">
              We Compose
            </h1>
            <h1 className="font-[500]" data-aos="flip-up">
              Software
            </h1>
            <h1 className="font-[700]" data-aos="flip-up">
              Masterpieces
            </h1>
          </div>
          <div className="font-semibold">
            <p className="text-[#C4C4C4]">
              Alhena Ventures offers custom software, mobile app, and website
              development services with expertise in solutions and powered tool.
            </p>
          </div>
            <div className="mt-6">
              <MovingButton />
            </div>
        </div>
        <div className="lg:w-1/2 w-full mx-auto justify-center items-center lg:flex hidden">
          <MovingImage />
        </div>
      </section>
    </div>
  );
};

export default Banner;
