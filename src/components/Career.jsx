import React from "react";
import shape from "../assets/Shape.svg";
import shape2 from "../assets/Shapes-2.svg";
import career from "../assets/Image-22.png";

const Hero = () => {
  return (
    <main className=" font-custom pt-32 pb-10">
      <div className="container relative">
          <div className="flex flex-col gap-12 text-center items-center">
            <p className="">CAREER AT FINSWEET</p>
            <h1 className="text-[56px] text-center  text-[#232536] w-[750px] leading-[68px]">
              We hired people who are Always Passionate about what they do
            </h1>
            <p className="text-[#232536] w-[700px] text-center  font-thin leading-6">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw .
            </p>
            <img className="" src={career} alt="career" />
            <p className="">See Our open positions <br />👇 </p>
            
          </div>
            <img className=" absolute top-0 right-0" src={shape2} alt="shape" />
      </div>
    </main>
  );
};

export default Hero;
