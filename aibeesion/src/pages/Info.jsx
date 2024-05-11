import React from "react";

const Info = () => {
  return (
    <>
      <div
        className="sm:px-5
                   md:px-8"
      >
        <div
          className="flex py-20
                     sm:flex-col
                     md:flex-row"
        >
          <h1 className="text-[2rem] font-bold">
            Lorem ipsum dolor sit amet. Facilisi mollis ut tellus aliquam
            pellentesque.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dui mattis eu consequat sit
            a mattis eget enim. Sit morbi lobortis eget neque feugiat eget. Nisi
            a adipiscing elementum vitae amet neque quis praesent imperdiet.
          </p>
        </div>
        <div
          className="flex
                     sm:flex-col
                     md:flex-row"
        >
          <div
            className="bg-gray-400 h-[550px] rounded-xl 
                       sm:mb-4 p-6
                       md:flex-1"
          ></div>
          <div
            className="bg-gray-400 h-[550px] rounded-xl 
                       sm:mb-4 p-6
                       md:flex-1 md:ml-4"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Info;
