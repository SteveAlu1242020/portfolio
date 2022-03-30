import React from "react";
import Navbar from "./Navbar";
import Steven from "../Images/steven.png";

const Hero = ({ dark, setDark }) => {
  return (
    <div className="bg-[#F4F9FC] dark:bg-gray-900 rounded-tl rounded-tr">
      <Navbar dark={dark} setDark={setDark} />
      <div className="flex flex-col md:flex md:flex-row items-center justify-center h-[40rem]">
        <div className="p-7 border-box border-box z-20 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl text-left dark:text-white">
            Hi, my <br />
            name is <span className="font-semibold">Stephen</span>
          </h1>
          <p className="pt-2 border-box text-left dark:text-white">
            A Front-end Developer, Creative Thinker and Passionate Learner
          </p>
        </div>
        <div className="bg-white rounded-full border-box md:p-0 md:bg-transparent border-box relative z-10 order-1 md:order-2 bg-opacity-80">
          <img
            src={Steven}
            alt=""
            className="w-56 md:w-72 dark:bg-white dark:rounded-full p-5"
            draggable="false"
          />
          <div className="absolute md:w-[34.1rem] md:h-32 md:bg-white rounded-md top-1/3 right-2 z-[-1] opacity-80 dark:bg-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
