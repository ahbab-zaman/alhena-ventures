import banner from "../assets/banner-bg.png";
import heroBg from "../assets/banner-img.png"
const Banner = () => {
  return (
    <div
      className="h-[600px]  bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${banner}), linear-gradient(#1A1A1A, #1A1A1A)`,
      }}
    >
      <section className="flex justify-between items-center py-40 px-12">
        <div className="w-1/2">
          <div className="text-[70px]">
            <h1>We Compose</h1>
            <h1>Software</h1>
            <h1>Masterpieces</h1>
          </div> 
          <div className="">
            <p className="text-[#C4C4C4]">
              Alhena Ventures offers custom software, mobile app, and website
              development services with expertise in solutions and powered tool.
            </p>
          </div>
        </div>
        <div className="w-1/2">
            <img className="w-[400px] object-cover mx-auto" src={heroBg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
