import Marquee from "react-fast-marquee";
import rct from "../assets/react.svg";

import img1 from "../img/r1.png";
import img2 from "../img/r2.png";
import img3 from "../img/r3.png";
import img4 from "../img/r4.png";
import img5 from "../img/r5.png";
import img6 from "../img/r6.png";

const Hero = () => {
  return (
    <>
      <div className="">
        <div
          className="flex justify-center pt-5
                  sm:bg-slate-500 
                   md:bg-red-400 
                   lg:bg-yellow-200
                   xl:bg-pink-500"
        >
          <img src={rct} className="" />
        </div>
        <Marquee speed={15}>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img2} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img3} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img4} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img5} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img6} className="object-contain w-full h-full" />
          </div>
        </Marquee>
        <Marquee direction="right" speed={15}>
          <div className="w-[300px] h-[380px]">
            <img src={img6} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img5} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img4} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img3} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img2} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
        </Marquee>
        <Marquee autoFill="true" speed={15}>
          <h1>• 10K+ OF DATA TO TRAIN THE MODEL&nbsp;</h1>
        </Marquee>
      </div>
    </>
  );
};

export default Hero;
