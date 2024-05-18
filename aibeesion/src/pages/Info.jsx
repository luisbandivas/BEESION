import React from "react";
import FOTD from "../components/FOTD";
import boy from "../assets/boy.jpg";

const Info = () => {
  const DateToday = new Date().toDateString();
  return (
    <div
      className="px-5 mb-8
                 md:px-8"
    >
      <div
        className="flex pt-20 pb-24 flex-col
                     lg:flex-row"
      >
        <div
          className="w-full h-auto mb-12 text-center
                       lg:text-left
                       xl:w-2/3"
        >
          <h1 className="text-[3rem] font-light font-Shrikhand">
            Efficient. Accurate. Essential: Your Pest Identification Solution
          </h1>
        </div>
        <div
          className="w-full h-auto text-center
                       lg:text-left
                       xl:w-[730px]"
        >
          <p className="text-2xl font-thin">
            Take control of your farm's health with our cutting-edge pest
            recognition technology. Quickly identify threats, safeguard your
            harvest, and experience hassle-free crop protection today.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div
          className="flex flex-col mb-20 items-center
                     lg:flex-row"
        >
          <div className="bg-[#B5C0D0] h-[550px] w-[450px] rounded-xl shadow-lg">
            <img src={boy} className="w-full h-full rounded-xl" />
          </div>
          <label
            className="text-center mt-5 w-full
                       lg:w-[450px] lg:ml-10 lg:text-start
                       xl:ml-20 xl:w-[480px]"
          >
            <h1>Hello</h1>
            <p className="whitespace-pre-wrap font-thin">
              Take control of your farm's health with our cutting-edge pest
              recognition technology. Quickly identify threats, safeguard your
              harvest, and experience hassle-free crop protection today.Take
              control of your farm's health with our cutting-edge pest
              recognition technology. Quickly identify threats, safeguard your
              harvest, and experience hassle-free crop protection today.
            </p>
          </label>
        </div>
        <div
          className="flex flex-col-reverse items-center
                     lg:flex-row"
        >
          <label
            className="text-center mt-5 w-full
                       lg:w-[450px] lg:mr-10 lg:text-start
                       xl:mr-20 xl:w-[480px]"
          >
            <h1>Hello</h1>
            <p className="whitespace-pre-wrap font-thin">
              Take control of your farm's health with our cutting-edge pest
              recognition technology. Quickly identify threats, safeguard your
              harvest, and experience hassle-free crop protection today.Take
              control of your farm's health with our cutting-edge pest
              recognition technology. Quickly identify threats, safeguard your
              harvest, and experience hassle-free crop protection today.
            </p>
          </label>
          <div className="bg-slate-600 h-[550px] w-[450px] rounded-xl shadow-md">
            <FOTD />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
