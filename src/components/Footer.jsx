import React from "react";
import footerImg from "../assets/Shapes-3.svg";
import footerImg2 from "../assets/Shapes-2.png";
import icon from "../assets/Icon-5.svg";
import logo from "../assets/Logo-5.svg";
import social from "../assets/Social.svg";

const Footer = () => {
  return (
    <main className="font-custom pt-32 ">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <img className="w-9 h-9" src={footerImg} alt="footerimg" />
            <h2 className="text-[48px] w-[450px]">
              Let's make something special
            </h2>
            <h4>Let's talk! 🤙 </h4>
            <p>
              020 7993 2905 <br /> hi@finsweet.com
            </p>
          </div>
          <div className="mt-16">
            <ul className="flex flex-col gap-3">
              <li>
                {" "}
                <b>Home</b>
              </li>
              <li>Service</li>
              <li>Company</li>
              <li>Career</li>
              <li>News</li>
            </ul>
          </div>
          <div className="mt-16">
            <ul className="flex flex-col gap-3">
              <li>
                {" "}
                <b>Service</b>
              </li>
              <li>Technical support</li>
              <li>Testing</li>
              <li>Development</li>
              <li>AWS/Azure </li>
              <li>Consulting</li>
              <li>Information Technology</li>
            </ul>
          </div>
          <div className="mt-16">
            <ul className="flex flex-col gap-3">
              <li>
                {" "}
                <b>Resourses</b>
              </li>
              <li>About Us</li>
              <li>Testimonial</li>
              <li>Privacy Policy</li>
              <li>Terms of use</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-14">
          <div>
            <p>
              DLF Cybercity, Bhubaneswar, <br />
              India, &52050
            </p>
          </div>
          <div className="flex gap-2">
            <img className="w-[50px] h-4" src={footerImg2} alt="footerimg2" />
            <p>Contact Us</p>
            <img className="mb-5" src={icon} alt="icon" />
          </div>
        </div>
      </div>
      <div className="bg-[#FFE6D2] py-5 mt-20">
        <div className="container">
          <div className="flex justify-between ">
            <div className="flex gap-20">
              <img src={logo} alt="logo" />
              <p className="mt-2">©2021 Finsweet</p>
            </div>
            <div>
              <img src={social} alt="social" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
