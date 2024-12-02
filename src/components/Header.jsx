import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo-4.svg";
import icon from "../assets/Icon-4.svg";

const Header = () => {
  return (
    <header className="bg-[#232536] font-custom " id="header">
      <nav className="container">
        <div className="flex gap-4  justify-between py-6">
        <img src={logo} alt="logo" />
        <div className="flex gap-14">
          <NavLink className=" text-white text-[16px]" to={"/"}>
            Home
          </NavLink>
          <NavLink className=" text-white text-[16px]" to={"/service"}>
            Service
          </NavLink>
          <NavLink className=" text-white text-[16px]" to={"/company"}>
            Company
          </NavLink>
          <NavLink className="  text-white text-[16px]" to={"/career"}>
            Career
          </NavLink>
          <NavLink className=" text-white text-[16px]" to={"/signin"}>
            Sign In
          </NavLink>
          <div className="flex gap-1">
          <NavLink className=" text-[#FFD3AF] text-[16px]" to={"/service"}>
            Clone project
          </NavLink>
          <img src={icon} alt="icon" />
          </div>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
