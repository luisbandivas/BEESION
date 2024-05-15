import React from "react";
import FOTD from "../components/FOTD";

const Info = () => {
  const DateToday = new Date().toDateString();
  return (
    <>
      <div
        className="px-5 
                   md:px-8"
      >
        <div
          className="flex py-20
                     sm:flex-col
                     lg:flex-row"
        >
          <div
            className="w-full h-auto mb-4 text-center 
                       lg:text-left
                       xl:w-2/3 mr-5"
          >
            <h1 className="text-[2.7rem] font-extrabold font-Poppins">
              Take Control of Your Farm's Health with Precision Pest Recognition
            </h1>
          </div>
          <div
            className="w-full h-auto text-center
                       lg:text-left
                       xl:w-[730px]"
          >
            <p className="text-xl font-thin">
              Take control of your farm's health with our cutting-edge pest
              recognition technology. Quickly identify pests threatening your
              crops and make informed decisions to safeguard your harvest.
              Experience hassle-free crop protection today.
            </p>
          </div>
        </div>
        <div
          className="flex
                     sm:flex-col
                     md:flex-row"
        >
          <div
            className="bg-[#B5C0D0] h-[550px] rounded-xl 
                       sm:mb-4 p-6
                       md:flex-1"
          ></div>
          <div
            className="bg-[#EED3D9] h-[550px] rounded-xl 
                       sm:mb-4 p-6
                       md:flex-1 md:ml-4
                       xl:px-8 xl:py-4"
          >
            <label
              className="flex flex-row justify-between mb-2
                         md:mb-4
                         xl:mb-2"
            >
              <h1
                className="text-3xl font-Poppins font-black 
                     "
              >
                Daily Facts!
              </h1>
              <p className="font-light">{DateToday}</p>
            </label>
            <FOTD />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
