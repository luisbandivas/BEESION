import Marquee from "react-fast-marquee";
import rct from "../assets/react.svg";

import img1 from "../img/b1.png";

const Hero = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center pt-5 bg-slate-500">
          <img src={rct} className="" />
        </div>
        <Marquee speed={15}>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
        </Marquee>
        <Marquee direction="right" speed={15}>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
          </div>
          <div className="w-[300px] h-[380px]">
            <img src={img1} className="object-contain w-full h-full" />
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
