import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdArrowRoundForward } from "react-icons/io";

const SmartSolution = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once on scroll
    });
  }, []);

  const services = [
    {
      number: "1.",
      title: "UI/UX Design",
      description:
        "Conducting research to understand the target audience, behaviors.",
      tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
    },
    {
      number: "2.",
      title: "App Development",
      description:
        "The process of creating software applications for mobile devices, such as smartphones.",
      tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
    },
    {
      number: "3.",
      title: "Block-Chain",
      description:
        "Conducting research to understand the target audience, behaviors.",
      tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
    },
    {
      number: "4.",
      title: "Web Development",
      description:
        "Web development is the process of building and maintaining websites or web applications.",
      tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
    },
    {
      number: "5.",
      title: "Cloud Service",
      description:
        "Conducting research to understand the target audience, behaviors.",
      tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
    },
    {
      number: "6.",
      title: "Cyber Security",
      description:
        "Conducting research to understand the target audience, behaviors.",
      tags: ["Color", "Design", "Typography", "Wireframe", "Visual"],
    },
  ];

  return (
    <div className="px-8 py-12 bg-[#F8F8F8]">
      <div className="flex flex-col md:flex-row justify-around mb-8 w-full">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold" data-aos="flip-down">
            TO PROVIDE SMART
          </h2>
          <h3 className="text-4xl font-bold" data-aos="flip-down">
            SOLUTION
          </h3>
        </div>
        <div className="lg:w-1/2 w-11/12">
          <a
            href="#"
            className="text-gray-600 hover:text-yellow-400 text-xl font-semibold flex items-center mt-4 md:mt-0 hover:transition-all hover:duration-500"
            data-aos="flip-up"
          >
            Explore More <span className="ml-2">→</span>
          </a>
          <p
            className="text-gray-600 text-xl font-semibold mb-8 lg:w-3/4 w-11/12"
            data-aos="flip-up"
          >
            Offer a wide range of services to help businesses establish and
            enhance their online presence.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            <h3 className="text-2xl font-bold mb-2">
              {service.number} {service.title}
            </h3>
            <p className="text-gray-600 text-lg font-semibold mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {service.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-black hover:text-white hover:transition-all hover:duration-500 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="relative overflow-hidden px-5 py-2 rounded-full font-semibold shadow-md text-white bg-black transition-colors duration-300 z-10 group flex items-center gap-2">
              <span className="relative z-20">Explore More</span>
              <span>
                <IoMdArrowRoundForward />
              </span>
              <span className="absolute inset-0 bg-yellow-400 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300 ease-out z-10 rounded-full"></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartSolution;
