import React from "react";
import arrow from "../assets/Icon-4.svg";
import icon from "../assets/Shapes.svg";
import hero from "../assets/Hero.png";
import grey from "../assets/Grey.svg";
import logos from "../assets/logos.svg";

const Hero = () => {
  return (
    <main className="bg-[#232536] font-custom pt-32 pb-10">
      <div className="container">
        <div className="flex justify-between pb-10">
        <div className="flex flex-col gap-8">
            <img className="w-6 h-6" src={grey} alt="grey" />
          <h1 className="text-[56px] text-white w-[550px] leading-[68px]">
            Transform Your Idea Into Reality with Finsweet
          </h1>
          <p className="text-gray-400 w-[500px] font-thin leading-6">
            The entire Finsweet team knows what's good with Webflow and you can
            too with 1 week and a good attitude.
          </p>
          <button className=" relative flex items-center justify-between text-white bg-[#444CFC] w-[219px] px-7 py-5  shadow-lg hover:bg-[#2a37d3] transition-all duration-300">
            <img src={icon} alt="icon" className="absolute left-0 top-0 w-7 h-7" />
            <span className="text-sm font-medium pl-3 ">Request Quote</span>
            <img src={arrow} alt="arrow" className="w-5 h-5 " />
          </button>
        </div>
        <div >
            <img className="w-563px h-[632px]" src={hero} alt="hero" />
        </div>
        </div>
        <div className="flex justify-around">
            <div>
            <p className="text-gray-400 w-[500px] font-thin mt-5">Our Clients <br /> <span className="text-white w-[550px] ">We've Worked with</span></p>
            </div>
            <div className="">
                <img  src={logos} alt="logos" />
            </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
