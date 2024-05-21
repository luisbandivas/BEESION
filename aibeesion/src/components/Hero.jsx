import React from "react";
import rct from "../assets/logo.svg";
import grassland from "../assets/home_img/grassland.png";
import slug from "../assets/fotd_img/slug.png";
import weevil from "../assets/home_img/weevil.png";
import grasshopper from "../assets/home_img/grasshopper.png";

const Heero = () => {
  return (
    <div>
      <div className="flex justify-center items-center px-8 py-4">
        <img src={rct} className="h-14" />
        <h1 className="font-Coiny text-2xl mt-1">Debug</h1>
      </div>
      <div className="px-4 lg:px-16 mb-5">
        <div
          className="bg-cover mb-4 w-full h-[300px] rounded-md shadow-md flex flex-col justify-center items-center
                     lg:h-[400px] lg:mb-6"
          style={{ backgroundImage: `url(${grassland})` }}
        >
          <h1 className="text-6xl  font-Coiny">PEST FREE</h1>
          <h2 className="text-xl  font-light">
            Informed Harvests: Identifying Pests, Optimizing Growth.
          </h2>
        </div>
        <div
          className="w-full h-36 flex justify-between
                     md:h-[250px]
                     lg:h-[320px]"
        >
          <img
            src={weevil}
            className="object-fill h-full w-1/3 mr-4 rounded-md shadow-md "
          />
          <img
            src={slug}
            className="object-fill h-full w-1/3 mr-4 rounded-md shadow-md "
          />
          <img
            src={grasshopper}
            className="object-fill h-full w-1/3 rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Heero;
