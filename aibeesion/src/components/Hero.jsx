import React from "react";
import rct from "../assets/react.svg";
import grassland from "../assets/home_img/grassland.png";
import slug from "../assets/fotd_img/slug.png";
import weevil from "../assets/home_img/weevil.png";
import grasshopper from "../assets/home_img/grasshopper.png";

const Heero = () => {
  return (
    <div>
      <div className="flex justify-center px-8 py-5">
        <img src={rct} />
      </div>
      <div className="px-4 lg:px-16 mb-5">
        <div
          className="bg-cover mb-4 w-full h-[300px] rounded-xl shadow-md flex justify-center items-center
                     lg:h-[400px] lg:mb-6"
          style={{ backgroundImage: `url(${grassland})` }}
        >
          <h1>what the fuck</h1>
        </div>
        <div
          className="w-full flex justify-between 
                     md:h-[250px]
                     lg:h-[320px]"
        >
          <img
            src={weevil}
            className="object-cover h-full w-1/3 mr-4 rounded-xl shadow-md lg:mr-6"
          />
          <div className="h-full w-1/3 mr-4 flex flex-col justify-between items-center lg:mr-6">
            <h1 className="mb-3 font-Coiny">Final Project</h1>
            <img
              src={slug}
              className="object-fill h-36 w-full rounded-xl shadow-md md:h-52 lg:h-72"
            />
          </div>
          <img
            src={grasshopper}
            className="object-cover h-full w-1/3 rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Heero;
