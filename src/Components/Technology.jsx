import React, { useEffect } from "react";
import html from "../assets/html1.svg";
import css from "../assets/css2.svg";
import javascript from "../assets/javascript2.svg";
import vue from "../assets/vue2.svg";
import react from "../assets/react2.svg";
import angular from "../assets/angular2.svg";
import d3 from "../assets/d3.svg";
import jquery from "../assets/jquery.svg";
import typescript from "../assets/typescript.svg";
import graphql from "../assets/graphql.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Technology = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  const technologies = [
    { name: "HTML", icon: html, category: "Front-end" },
    { name: "CSS", icon: css, category: "Front-end" },
    { name: "JavaScript", icon: javascript, category: "Front-end" },
    { name: "VueJs", icon: vue, category: "Front-end" },
    { name: "ReactJs", icon: react, category: "Front-end" },
    { name: "AngularJs", icon: angular, category: "Front-end" },
    { name: "D3.js", icon: d3, category: "Back-end" },
    { name: "jQuery", icon: jquery, category: "Back-end" },
    { name: "TypeScript", icon: typescript, category: "Back-end" },
    { name: "GraphQL", icon: graphql, category: "Mobile" },
  ];

  return (
    <div className="bg-[#1A1A1A] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex lg:flex-row flex-col justify-around items-baseline-last">
          <div className="lg:w-1/2 w-full">
            <h2 className="lg:text-5xl text-3xl font-bold mb-6" data-aos="flip-up">
              WE USED ADVANCE
            </h2>
            <h3 className="lg:text-5xl text-3xl font-bold mb-6" data-aos="flip-up">
              TECHNOLOGY
            </h3>
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-gray-400 text-lg mb-12 lg:w-3/4 w-11/12" data-aos="flip-down">
              Offer a wide range of services to help businesses establish and
              enhance their online presence.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-center gap-4 font-semibold mb-8">
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full mr-2">
            Front-end
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-full mr-2">
            Back-end
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-full">
            Mobile
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-[#252525] p-6 rounded-lg text-center hover:bg-[#2525255e] hover:transition-all hover:duration-500"
              data-aos="zoom-in"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 mx-auto mb-4 hover:scale-110 transition-transform duration-300"
              />
              <p className="text-lg text-gray-400 font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
