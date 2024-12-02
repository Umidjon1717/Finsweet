import React from "react";
import shape from "../assets/Shape.svg";
import shape2 from "../assets/Shapes-2.svg";
import shape3 from "../assets/Shapes.png";
import comp1 from "../assets/comp1.png";
import comp2 from "../assets/comp2.png";
import comp3 from "../assets/comp3.png";

const Hero = () => {
  return (
    <main className=" font-custom pt-32 pb-10">
      <div className="container">
        <div className="flex justify-between pb-10">
        <div className="flex flex-col gap-8">
            <img className="w-6 h-6" src={shape} alt="grey" />
            <p>Company</p>
          <h1 className="text-[56px] text-[#232536] w-[750px] leading-[68px]">
          Award-winning Company seen and used by millions around the world.
          </h1>
          <p className="text-[#232536] w-[700px] font-thin leading-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. 
          </p>
        </div>
        <div >
            <img src={shape2} alt="shape" />
        </div>
        </div>
        <div className="flex justify-around gap-3 relative">
            <img className="z-10" src={comp1} alt="comp1" />
            <img className="z-10" src={comp2} alt="comp2" />
            <img className="z-10" src={comp3} alt="comp3" />
            <img className="absolute right-[-12px] top-[-20px] z-0" src={shape3} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
