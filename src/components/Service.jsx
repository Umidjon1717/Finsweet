import React from "react";
import arrow from "../assets/Icon-5.svg";
import icon from "../assets/Shapes.svg";
import hero from "../assets/Hero.png";
import grey from "../assets/Grey.svg";
import logos from "../assets/logos.svg";

const Service = () => {
  return (
    <main className="bg-[#FFE6D2] font-custom pt-32 pb-10">
      <div className="container">
        <div className="flex justify-around pb-10">
        <div className="flex flex-col gap-8">
            <p>Our Services</p>
          <h1 className="text-[56px] text-[#232536] w-[550px] leading-[68px]">
          We Build Software Solutionthat Solve Clients Business Challenges
          </h1>
          <p className="text-[#232536] w-[500px] font-thin leading-6">
          Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.
          </p>
          <button className=" relative flex items-center justify-between text-white bg-[#444CFC] w-[219px] px-7 py-5  shadow-lg hover:bg-[#2a37d3] transition-all duration-300">
            <img src={icon} alt="icon" className="absolute left-0 top-0 w-7 h-7" />
            <span className="text-sm font-medium pl-3 ">Request Quote</span>
            <img src={arrow} alt="arrow" className="w-5 h-5 " />
          </button>
        </div>
        <div className="mt-24">
            <ul className="flex flex-col gap-10">
                <li className="text-[24px]">Technical support</li>
                <li className="flex gap-2">
                    <span>Development</span>
                    <img className=" colo" src={arrow} alt="arrow" />
                </li>
                <li className="text-[24px]">AWS/Azure </li>
                <li className="text-[24px]">Consulting</li>
                <li className="text-[24px]">Information Technology</li>
            </ul>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Service;
