import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

export default function CustomMarquee() {
  return (
    <Marquee speed={50} gradient={false} className="bg-[#E3E5D8] py-8">
      <div className="flex items-center justify-between gap-4 mx-4 text-black font-semibold text-3xl w-full">
        <FaStar className="text-xl" />
        <span>development Agency</span>
        <span className="text-2xl font-bold">•</span>
        <span>UI/UX DESIGN</span>
        <span className="text-2xl font-bold">•</span>
        <span>software development</span>
        <FaStar className="text-xl" />
        <span>web consulting</span>
        <FaStar className="text-xl" />
        <span>development Agency</span>
        <span className="text-2xl font-bold">•</span>
        <span>UI/UX DESIGN</span>
        <span className="text-2xl font-bold">•</span>
        <span>software development</span>
        <FaStar className="text-xl" />
        <span>web consulting</span>
      </div>
    </Marquee>
  );
}
