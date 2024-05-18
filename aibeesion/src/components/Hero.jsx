import React from "react";
import Marquee from "react-fast-marquee";
import rct from "../assets/react.svg";
import land from "../assets/land.jpg";
import img1 from "../assets/fotd_img/slug.png";

const Heero = () => {
  return (
    <div>
      <div className="flex justify-center px-8 py-5">
        <img src={rct} />
      </div>
      <div className="px-5 mb-5">
        <div
          className="bg-cover mb-4 w-full h-[300px]
                     md:h-[400px]
                     lg:h-[460px]"
        >
          <img
            src={land}
            className="object-cover w-full h-full rounded-xl shadow-md"
          />
        </div>
        <div
          className="w-full flex justify-between 
                     md:h-[250px]
                     lg:h-[320px]"
        >
          <img
            src={img1}
            className="object-cover h-full w-1/3 mr-4 rounded-xl shadow-md"
          />
          <div className="h-full w-1/3 mr-4 flex flex-col justify-between items-center">
            <h1 className="mb-2">Final Project</h1>
            <img
              src={img1}
              className="object-cover md:h-72 w-full rounded-xl shadow-md"
            />
          </div>
          <img
            src={img1}
            className="object-cover h-full w-1/3 rounded-xl shadow-md"
          />
        </div>
      </div>
      <Marquee className="mb-16" autoFill="true" speed={15}>
        <h1>• 10K+ OF DATA TO TRAIN THE MODEL&nbsp;</h1>
      </Marquee>
    </div>
  );
};

export default Hero;
