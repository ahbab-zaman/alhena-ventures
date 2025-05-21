import banner from "../assets/banner-img.png";
const MovingImage = () => {
  return (
    <div>
      <img
        src={banner}
        alt="Smooth Move"
        className=" w-[400px] object-cover mx-auto 
          cursor-pointer animate-floating
        "
      />
    </div>
  );
};

export default MovingImage;
